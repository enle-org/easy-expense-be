// Initializes the `organisation` service on path `/organisation`
const { Organisation } = require('./organisation.class');
const createModel = require('../../models/organisation.model');
const hooks = require('./organisation.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/organisation', new Organisation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('organisation');

  service.hooks(hooks);
};
