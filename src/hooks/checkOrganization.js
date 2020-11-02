/* eslint-disable require-atomic-updates */
const { Forbidden } = require('@feathersjs/errors');

module.exports = async function checkOrganization(context) {
  const org = await context.app
    .get('mongooseClient')
    .model('organisations')
    .findOne({
      _id: context.data.orgId,
    });
  if (!org) throw new Forbidden('This organization does not exist');
  if (org.createdBy.toString() !== context.params.user._id.toString())
    throw new Forbidden('You are not the owner of this organization.');

  const member = org.members.find(
    member => member._id.toString() === context.params.user._id.toString(),
  );
  if (!member)
    throw new Forbidden(
      'You are not a member or the owner of this organization.',
    );
  return context;
};
