const { checkKey } = require('../main/controllers/api-tools/check-key');
const { checkValues } = require('../main/controllers/api-tools/check-values');
const { checkQuery } = require('../main/controllers/api-tools/check-query');
// const { updateLogs } = require('../main/controllers/tools/update.logs');
const nodemailer = require('../main/controllers/tools/nodemailer');

module.exports = {
  checkKey,
  checkValues,
  checkQuery,
  // updateLogs,
  nodemailer,
};
