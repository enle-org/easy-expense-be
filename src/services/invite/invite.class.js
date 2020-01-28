/* eslint-disable no-unused-vars */
const crypto = require('crypto');
const { Forbidden, GeneralError } = require('@feathersjs/errors');
const validate = require('validate.js');

const utils = require('../../utils');

exports.Invite = class Invite {
  constructor (options) {
    this.options = options || {};
  }

  inviteMsg(to, from, org, link) {
    return {
      to,
      from: 'no_reply@easy-expense.com',
      subject: 'Easy Expense Invite',
      text: `You've been invited by ${from} to ${org} on Easy Exepense, to join, please click this link, ${link}`,
      html: `<strong>You've been invited by ${from} to ${org} on Easy Exepense, to join, please click this link, ${link}</strong>`,
    };
  }

  // async find (params) {
  //   return [];
  // }

  async get (id, params) {
    const org = await this.options.models.organisations.findOne({
      'invites.token': id
    });
    return {
      sucess: true,
      data: {
        email: org.invites.find(invite => invite.token === id).email
      }
    };
  }

  async create (data, params) {
    if (!validate.isArray(data))
      throw new GeneralError('Invites need to be an array.');
    
    const org = await this.options.models.organisations.findOne({
      createdBy: params.user._id
    });
    if (!org)
      throw new Forbidden('You are not allowed to create invites.');
    const orgInvites = org.invites.map(invite => invite.email);
    const token = await utils.tokenGenerator();
    const inviteEmails = [];
    data.map(email => {
      if (!orgInvites.includes(email)) {
        org.invites.push({ email, token });
        inviteEmails.push(email);
      }
      else {
        throw new GeneralError('Invite already exists.');
      }
    });
    const newOrg = await this.options.models.organisations.findByIdAndUpdate(
      { _id: org._id },
      { 'invites': org.invites },
      { upsert: true, new: true },
    );
    const emailsSent = inviteEmails.map(email => (
      this.options.sendgridMail.send(
        this.inviteMsg(
          email,
          params.user.email,
          org.name.toUpperCase(),
          `http://localhost:3030/invite?organisation=${encodeURI(org.name)}&token=${token}`
        )
      )
    ));
    await Promise.all(emailsSent);

    return {
      sucess: true,
      data: {
        message: 'Invites sent successfully.'
      }
    };
  }
};
