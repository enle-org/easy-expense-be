const receiptTestData = {
  title: 'test title',
  userId: '5e3bec5f384f22b9ec29c22f',
  images: ['https://image1.com', 'https://image2.org', 'https://image3.co'],
};

const updatedReceiptTestData = {
  title: 'updated test title',
  userId: '5e3bec5f384f22b9ec29c22f',
  images: ['https://image1.com', 'https://image2.org', 'https://image3.co'],
};

const PatchedReceiptTestData = {
  title: 'updated test title',
  userId: '5e3bec5f384f22b9ec29c22f',
  images: ['https://image2.org', 'https://image3.co'],
};

module.exports = {
  receiptTestData,
  updatedReceiptTestData,
  PatchedReceiptTestData,
};
