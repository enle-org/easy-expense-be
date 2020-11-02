const { authenticate } = require('@feathersjs/authentication').hooks;

const createExpense = require('../../hooks/createExpense');
const checkOrganization = require('../../hooks/checkOrganization');
const checkReceipt = require('../../hooks/checkReceipt');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [checkOrganization, checkReceipt, createExpense],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
