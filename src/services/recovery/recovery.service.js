// Initializes the `recovery` service on path `/recovery`
const { Recovery } = require('./recovery.class');
const hooks = require('./recovery.hooks');
// eslint-disable-next-line no-unused-vars
const { serviceDocs } = require('./docs');

module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const sendgridMail = app.get('sendgridMail');
  const users = mongooseClient.model('users');
  const paginate = app.get('paginate');

  const options = {
    sendgridMail,
    models: { users },
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/recovery', new Recovery(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recovery');

  service.hooks(hooks);
};
