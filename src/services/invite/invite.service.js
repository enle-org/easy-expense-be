// Initializes the `invite` service on path `/invite`
const { Invite } = require('./invite.class');
const hooks = require('./invite.hooks');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const sendgridMail = app.get('sendgridMail');
  const organisations = mongooseClient.model('organisations');
  const users = mongooseClient.model('users');
  const paginate = app.get('paginate');

  const options = {
    sendgridMail,
    mongooseClient,
    models: { organisations, users },
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/invite/join', new Invite(options, app));
  app.use('/invite', new Invite(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('invite');

  service.hooks(hooks);
};
