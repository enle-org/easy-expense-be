/* eslint-disable require-atomic-updates */
module.exports = async function deleteOrganisation(context) {
  await context.app.get('mongooseClient').model('organisations').findOneAndDelete({
    createdBy: context.params.user._id
  });
  return context;
};
