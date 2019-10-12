const multer = require('multer');
const multerS3 = require('multer-s3');
const { s3 } = require('../../configs/aws-s3/s3_connection');

module.exports.uploadPdfFile = multer({
  storage: multerS3({
    s3,
    bucket: 'jophen1298-test',
    key: (req, file, cb) => {
      cb(null, `${req.query.sourceName}-${new Date().toISOString()}-${file.originalname}.pdf`);
    }
  })
});
