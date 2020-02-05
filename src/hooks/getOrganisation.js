/* eslint-disable require-atomic-updates */
module.exports = async function getOrganisation(context) {
  const org = await context.app
    .get('mongooseClient')
    .model('organisations')
    .findOne({
      createdBy: context.params.user._id,
    });
  if (!org) {
    context.result = [];
    return context;
  }
  const memberEmailsPromises = org.members.map(async memberId => {
    const user = await context.app.services.users.get(memberId);
    return user.email;
  });
  const memberEmails = await Promise.all(memberEmailsPromises);
  const newOrg = Object.assign({}, org._doc, { members: memberEmails });
  context.result = newOrg;
  return context;
};
