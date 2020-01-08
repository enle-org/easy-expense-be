const users = require('./users/users.service.js');
const organisation = require('./organisation/organisation.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(organisation);
};
