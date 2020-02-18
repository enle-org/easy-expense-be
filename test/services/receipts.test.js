const app = require('../../src/app');
const {
  receiptTestData,
  updatedReceiptTestData,
  PatchedReceiptTestData,
} = require('../mockData/receipts');

let receiptId;

describe('receipts service', () => {
  it('registered the service', () => {
    const service = app.service('receipts');
    expect(service).toBeTruthy();
  });

  it('creates a receipt', async () => {
    const receipts = await app.service('receipts').create(receiptTestData);

    receiptId = receipts._id;

    expect(typeof receipts).toBe('object');
    expect(receipts).toHaveProperty('_id');
    expect(receipts).toHaveProperty('userId');
    expect(receipts).toHaveProperty('title');
    expect(receipts).toHaveProperty('createdAt');
    expect(receipts).toHaveProperty('updatedAt');
    expect(receipts).toHaveProperty('images');
    expect(Array.isArray(receipts.images)).toBe(true);
  });

  it('finds all receipts', async () => {
    const receipts = await app.service('receipts').find();

    expect(typeof receipts).toBe('object');
    expect(receipts).toHaveProperty('total');
    expect(receipts).toHaveProperty('limit');
    expect(receipts).toHaveProperty('data');
    expect(Array.isArray(receipts.data)).toBe(true);
  });

  it('gets a single receipt', async () => {
    const receipts = await app.service('receipts').get(receiptId);

    expect(typeof receipts).toBe('object');
    expect(receipts).toHaveProperty('_id');
    expect(receipts._id).toEqual(receiptId);
    expect(receipts).toHaveProperty('userId');
    expect(receipts).toHaveProperty('title');
    expect(receipts).toHaveProperty('createdAt');
    expect(receipts).toHaveProperty('updatedAt');
    expect(receipts).toHaveProperty('images');
    expect(Array.isArray(receipts.images)).toBe(true);
  });

  it('update a single receipt', async () => {
    const receipts = await app
      .service('receipts')
      .update(receiptId, updatedReceiptTestData);

    expect(typeof receipts).toBe('object');
    expect(receipts).toHaveProperty('_id');
    expect(receipts._id).toEqual(receiptId);
    expect(receipts).toHaveProperty('userId');
    expect(receipts).toHaveProperty('title');
    expect(receipts.title).toEqual(updatedReceiptTestData.title);
    expect(receipts).toHaveProperty('createdAt');
    expect(receipts).toHaveProperty('updatedAt');
    expect(receipts).toHaveProperty('images');
    expect(Array.isArray(receipts.images)).toBe(true);
  });

  it('Patch a single receipt', async () => {
    const receipts = await app
      .service('receipts')
      .patch(receiptId, PatchedReceiptTestData);

    expect(typeof receipts).toBe('object');
    expect(receipts).toHaveProperty('_id');
    expect(receipts._id).toEqual(receiptId);
    expect(receipts).toHaveProperty('userId');
    expect(receipts).toHaveProperty('title');
    expect(receipts).toHaveProperty('createdAt');
    expect(receipts).toHaveProperty('updatedAt');
    expect(receipts).toHaveProperty('images');
    expect(receipts.images).toEqual(PatchedReceiptTestData.images);
    expect(Array.isArray(receipts.images)).toBe(true);
  });

  it('Deletes a single receipt', async () => {
    const receipts = await app.service('receipts').remove(receiptId);

    expect(typeof receipts).toBe('object');
  });
});
