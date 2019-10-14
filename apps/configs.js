// AWS S3 File Methods
const { uploadDocument } = require('../main/controllers/cloud-file-helpers/s3-upload');
const { downloadDocument } = require('../main/controllers/cloud-file-helpers/s3-download');

module.exports = {
  uploadDocument,
  downloadDocument
};
