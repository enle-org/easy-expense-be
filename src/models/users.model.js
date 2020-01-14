// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },

    password: { type: String, required: true },

    orgId: mongooseClient.Schema.Types.ObjectId,
  
    googleId: { type: String },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};

// TCL: GoogleStrategy -> getEntityData -> profile {
//   sub: '117442093990342533940',
//   picture: 'https://lh5.googleusercontent.com/-Cw8V6coFhOo/AAAAAAAAAAI/AAAAAAAAAAA/qZBhoihPWTg/photo.jpg',
//   email: 'david@enle.co',
//   email_verified: true,
//   hd: 'enle.co'
// }
// TCL: GoogleStrategy -> getEntityData -> baseData { googleId: '117442093990342533940' }
