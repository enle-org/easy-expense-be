/* eslint-disable no-unused-vars */
const settingsHandler = require('./controllers/settings');

exports.Dashboard = class Dashboard {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return {
      invites: params.user.invites,
    };
  }

  async get (id, params) {
    if (id === 'settings')
      return settingsHandler(this.options.models, params.user);
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
