// receipts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const receipts = new Schema({
    title: { type: String, required: true },
    desc: String,
    userId: { type: String, required: true },
    images: [ String ],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('receipts');
  } catch (e) {
    return mongooseClient.model('receipts', receipts);
  }
};
