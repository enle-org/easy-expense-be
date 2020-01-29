/* eslint-disable require-atomic-updates */
const generateInvites = require('../utils/generateInvites');

module.exports = async function patchOrganisation(context) {
  const org = await context.app.get('mongooseClient').model('organisations').findOne({
    _id: context.data._id
  });
  const patchedOrgInvites = context.data.invites.map(inviteEmail => inviteEmail);
  const newOrgInvites = await generateInvites(
    patchedOrgInvites,
    org.invites,
    context.params.user.email,
    context.data.name,
    context.data.url,
    context.app.get('sendgridMail')
  );
  const memberIdsPromise = context.data.members.map(async memberEmail => {
    const member = await context.app.get('mongooseClient').model('users').findOne({
      email: memberEmail
    });
    return member._id;
  });
  const memberIds = await Promise.all(memberIdsPromise);
  context.data = {
    members: memberIds,
    invites: newOrgInvites,
  };
  return context;
};
