// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
  
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
  
  
    googleId: { type: String },
  
    facebookId: { type: String },
  
    twitterId: { type: String },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};


User -> ID, full name (string), email(string), pwd(varchar), org_id(ID - optional),
Org -> ID, Name (unique), created by, invites (array -> email(string))

Other thoughts:
Org invite link -> base url + url encoded org name