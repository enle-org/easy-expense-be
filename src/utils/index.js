
const crypto = require('crypto');

const tokenGenerator = async () => {
  const buffer = await new Promise((resolve, reject) => {
    crypto.randomBytes(20, (err, buffer) => {
      if (err) {
        reject('error generating token');
      }
      resolve(buffer);
    });
  });
  return buffer.toString('hex');
};

module.exports =  {
  tokenGenerator,
};
