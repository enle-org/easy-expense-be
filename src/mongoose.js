const mongoose = require('mongoose');
const config = require('../config');
const logger = require('./logger');

module.exports = function (app) {
  mongoose.connect(
    config.MONGO_URI,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
