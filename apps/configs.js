const { dbs } = require('../main/configs/db/db_connection');
// AWS S3 File Methods
const { uploadPdfFile } = require('../main/controllers/cloud-file-helpers/s3-upload');

module.exports = {
  dbs,
  uploadPdfFile
};
