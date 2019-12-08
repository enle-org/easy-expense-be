const config = Object.freeze({
  development: {
    MONGO_URI: `mongodb+srv://${process.env.DEV_MONGODB_USER}:${encodeURIComponent(process.env.DEV_MONGODB_USER_PWD)}@${process.env.DEV_MONGODB_URI}/${process.env.DEV_MONGODB_DB}?${process.env.DEV_MONGODB_DB_RETRY}`,
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  production: {
    MONGO_URI: `mongodb+srv://${process.env.PROD_MONGODB_USER}:${encodeURIComponent(process.env.PROD_MONGODB_USER_PWD)}@${process.env.PROD_MONGODB_URI}/${process.env.PROD_MONGODB_DB}?${process.env.PROD_MONGODB_DB_RETRY}`,
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
});

module.exports = config[process.env.ENVIRONMENT];
