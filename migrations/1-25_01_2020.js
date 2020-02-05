// use this.db for MongoDB communication, and this.log() for logging
'use strict';

module.exports.id = '25_01_2020';

module.exports.up = function(done) {
  let userId;
  const coll = this.db.collection('test');
  coll.insertOne(
    { name: 'migrationTest' },
    (err, res) => (userId = res.insertedId),
  );
  done();
};

module.exports.down = function(done) {
  var coll = this.db.collection('test');
  coll.deleteOne({ name: 'migrationTest' }, done);
  done();
};
