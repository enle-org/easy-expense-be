// organisations-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const organisations = new Schema({

    name: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },

    invites: [{ type: String }],

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('organisations');
  } catch (e) {
    return mongooseClient.model('organisations', organisations);
  }
};
