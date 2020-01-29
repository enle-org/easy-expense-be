const { authenticate } = require('@feathersjs/authentication').hooks;

const sendInvites = require('../../hooks/sendInvites');
const getOrganisation = require('../../hooks/getOrganisation');
const checkOrganizationDelete = require('../../hooks/checkOrganizationDelete');
const patchOrganisation = require('../../hooks/patchOrganisation');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ sendInvites ],
    update: [],
    patch: [ patchOrganisation ],
    remove: [ checkOrganizationDelete  ]
  },

  after: {
    all: [],
    find: [ getOrganisation ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
