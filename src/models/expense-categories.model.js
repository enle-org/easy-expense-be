// expense-categories-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const expenseCategories = new Schema(
    {
      name: { type: String, required: true, unique: true },

      createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  try {
    return mongooseClient.model('expenseCategories');
  } catch (e) {
    return mongooseClient.model('expenseCategories', expenseCategories);
  }
};
