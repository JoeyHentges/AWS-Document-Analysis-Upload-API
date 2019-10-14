const multer = require('multer');
const multerS3 = require('multer-s3');
const { s3 } = require('../../configs/aws-s3/s3_connection');

module.exports.uploadDocument = multer({
  storage: multerS3({
    s3,
    bucket: 'jophen1298-test',
    key: (req, file, cb) => {
      console.log(req.query);
      cb(null, `${req.query.documentName.slice(0, 0 - (req.query.documentName.split('.')[req.query.documentName.split('.').length - 1].length + 1))}-${new Date().toISOString()}-${file.originalname}.${req.query.documentName.split('.')[req.query.documentName.split('.').length - 1]}`);
    }
  })
});
