// Initializes the `organisations` service on path `/organisations`
const { Organisations } = require('./organisations.class');
const createModel = require('../../models/organisations.model');
const hooks = require('./organisations.hooks');
// eslint-disable-next-line no-unused-vars
const { serviceDocs } = require('./docs');

module.exports = function(app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  const sendgridMail = app.get('sendgridMail');

  const options = {
    sendgridMail,
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/organisations', new Organisations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('organisations');

  service.hooks(hooks);
};
