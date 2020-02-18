const { GeneralError } = require('@feathersjs/errors');
const generateInvites = require('../utils/generateInvites');

module.exports = async function sendInvites(context) {
  const org = await context.app
    .get('mongooseClient')
    .model('organisations')
    .findOne({
      name: context.data.name,
    });
  if (org) throw new GeneralError('Organization already exists');
  const otherOrg = await context.app
    .get('mongooseClient')
    .model('organisations')
    .findOne({
      createdBy: context.params.user._id,
    });
  if (otherOrg)
    throw new GeneralError('You cannot create more than one organization');
  const newOrgInvites = generateInvites(
    context.data.invites,
    [],
    context.params.user.email,
    context.data.name,
    context.data.url,
    context.app.get('sendgridMail'),
  );

  // eslint-disable-next-line require-atomic-updates
  context.data = {
    name: context.data.name,
    createdBy: context.params.user._id,
    invites: await newOrgInvites,
    members: [],
  };
  return context;
};
