// organisation-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const userSchema = require('./users.model');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const organisation = new Schema({

    id: {type: Number, unique: true},

    Name: {type: String, unique: true, lowercase: true},

    createdBy: {userSchema},

    invites: [{type: String}],

    meta: {
      users: [{type: String}]
    }

  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('organisation');
  } catch (e) {
    return mongooseClient.model('organisation', organisation);
  }
};
