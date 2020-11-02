/* eslint-disable require-atomic-updates */
const { Forbidden } = require('@feathersjs/errors');

module.exports = async function checkReceipt(context) {
  const receipt = await context.app
    .get('mongooseClient')
    .model('receipts')
    .findOne({
      _id: context.data.receiptId,
    });
  if (!receipt) throw new Forbidden('This receipt does not exist');
  return context;
};
