/* eslint-disable require-atomic-updates */
module.exports = async function createExpense(context) {
  const expCat = await context.app
    .get('mongooseClient')
    .model('expenseCategories')
    .findOne({
      name: context.data.expenseCategory,
    });
  if (!expCat) {
    const newExpCat = await context.app
      .get('mongooseClient')
      .model('expenseCategories')
      .create({
        name: context.data.expenseCategory,
        createdBy: context.params.user._id,
      });
    context.data.expenseCategoryId = newExpCat._id;
    return context;
  }
  context.data.expenseCategoryId = expCat._id;
  return context;
};
