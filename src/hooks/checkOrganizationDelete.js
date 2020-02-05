/* eslint-disable require-atomic-updates */
const { Forbidden } = require('@feathersjs/errors');

module.exports = async function checkOrganizationDelete(context) {
  const org = await context.app
    .get('mongooseClient')
    .model('organisations')
    .findOne({
      createdBy: context.params.user._id,
    });
  if (!org) throw new Forbidden('You are not authorized.');
  return context;
};
