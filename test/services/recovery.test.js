const app = require('../../src/app');

describe("'recovery' service", () => {
  it('registered the service', () => {
    const service = app.service('recovery');
    expect(service).toBeTruthy();
  });
});
