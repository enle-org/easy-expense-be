require('dotenv').config();

const migrationConfig = {
  url: process.env.DEV_MIGRATION_MONGODB_URI,
  db: 'easy-expense',
  collection: '_migrations',
  // timeout: 200,
  options: {
    useMongoClient: true,
  }
};

module.exports = migrationConfig;
