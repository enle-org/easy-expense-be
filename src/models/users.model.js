// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    fullname: {
      type: String,
      default: '',
    },
  
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },

    password: { type: String, required: true },

    type: {
      type: String,
      default: 'user',
    },
    
    orgId: [{
      type: mongooseClient.Schema.Types.ObjectId,
      ref: 'organisations'
    }],
    
    invites: [{
      organisation: { type: mongooseClient.Schema.Types.ObjectId, ref: 'organisations' },
      sentBy: { type: String },
    }],

    googleId: {
      type: String,
      default: '',
    },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
