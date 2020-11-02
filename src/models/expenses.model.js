// expenses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const expenses = new Schema(
    {
      merchantName: { type: String, required: true },
      amount: { type: Number, required: true },
      expenseDate: { type: Date, receiptId: true },
      expenseCategoryId: { type: Schema.Types.ObjectId, required: true },
      receiptId: { type: Schema.Types.ObjectId, required: true, unique: true },
      reportId: { type: Schema.Types.ObjectId },
      orgId: { type: Schema.Types.ObjectId, required: true },
    },
    {
      timestamps: true,
    },
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  try {
    return mongooseClient.model('expenses');
  } catch (e) {
    return mongooseClient.model('expenses', expenses);
  }
};
