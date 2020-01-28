const app = require('../../src/app');

describe('\'organisation\' service', () => {
  it('registered the service', () => {
    const service = app.service('organisation');
    expect(service).toBeTruthy();
  });
});
