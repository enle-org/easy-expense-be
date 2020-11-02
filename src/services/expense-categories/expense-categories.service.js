// Initializes the `expense-categories` service on path `/expense-categories`
const { ExpenseCategories } = require('./expense-categories.class');
const createModel = require('../../models/expense-categories.model');
const hooks = require('./expense-categories.hooks');

module.exports = function(app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/expense-categories', new ExpenseCategories(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('expense-categories');

  service.hooks(hooks);
};
