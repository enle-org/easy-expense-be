const app = require('../../src/app');

describe("'expense-categories' service", () => {
  it('registered the service', () => {
    const service = app.service('expense-categories');
    expect(service).toBeTruthy();
  });
});
