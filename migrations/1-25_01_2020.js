// use this.db for MongoDB communication, and this.log() for logging
'use strict';

const users = require('./data/users');
const organisations = require('./data/organisations');

module.exports.id = '25_01_2020';

module.exports.up = async function (done) {
  let userIds;
  const userSize = users.data.length;
  const coll = this.db.collection('test');
  await coll.insertMany(
    users.data,
    async (_err, res) => {
      userIds = res.insertedIds;
      let createdBy;
      const addOrgs = organisations.data.map(async (organisation, i) => {
        if (i+1 % users.data.length === 0) {
          createdBy = userIds[0];
        }
        createdBy = userIds[1];
        await coll.insertOne(
          {
            ...organisation,
            createdBy,
          },
        );
      });
      await Promise.all(addOrgs);
    },
  );
  done();
};

module.exports.down = function(done) {
  var coll = this.db.collection('test');
  users.map(user => {
    coll.deleteOne(
      user,
      () => {},
    );
  });
  done();
};
