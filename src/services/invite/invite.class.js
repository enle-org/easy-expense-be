/* eslint-disable no-unused-vars */
const { Forbidden, GeneralError } = require('@feathersjs/errors');
const validate = require('validate.js');

const generateInvites = require('../../utils/generateInvites');

exports.Invite = class Invite {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    const org = await this.options.models.organisations.findOne({
      _id: params.query.orgId,
    });
    if (org.members.includes(params.user._id))
      throw new GeneralError('Already a member.');
    org.members.push(params.user._id);
    const newInvites = org.invites.filter(
      invite => invite.email !== params.user.email,
    );
    org.invites = newInvites;
    const updatedOrg = await this.options.models.organisations.updateOne(
      { _id: params.query.orgId },
      {
        members: org.members,
        invites: org.invites,
      },
      { upsert: true, new: true },
    );
    return {
      success: true,
      data: {
        organisation: org,
      },
    };
  }

  async get(id, params) {
    const org = await this.options.models.organisations.findOne({
      'invites.token': id,
    });
    const invitedBy = await this.options.models.users.findOne({
      _id: org.createdBy,
    });
    return {
      sucess: true,
      data: {
        orgID: org._id,
        orgName: org.name,
        invitedBy: invitedBy.email,
        inviteEmail: org.invites.find(invite => invite.token === id),
      },
    };
  }

  async create(data, params) {
    if (!validate.isArray(data.invites))
      throw new GeneralError('Invites need to be an array.');

    const org = await this.options.models.organisations.findOne({
      createdBy: params.user._id,
    });
    if (!org) throw new Forbidden('You are not allowed to create invites.');
    if (data.invites.includes(params.user.email))
      throw new GeneralError('You are already a member.');

    const orgInvites = org.invites.map(invite => invite.email);
    const newOrgInvites = await generateInvites(
      data.invites,
      orgInvites,
      params.user.email,
      org.name,
      data.url,
      this.options.sendgridMail,
    );
    org.invites.push(...newOrgInvites);
    await this.options.models.organisations.findByIdAndUpdate(
      { _id: org._id },
      { invites: org.invites },
      { upsert: true, new: true },
    );

    return {
      sucess: true,
      data: {
        message: 'Invites sent successfully.',
      },
    };
  }
};
