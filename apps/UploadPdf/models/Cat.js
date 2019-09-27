const { dbs } = require('../../configs');

module.exports.Cat = dbs.db1().model('Cats', { name: String });
