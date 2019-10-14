const { s3 } = require('../../configs/aws-s3/s3_connection');

module.exports.downloadDocument = async (bucket, fileKey) => {
  const options = {
    Bucket: bucket,
    Key: fileKey,
  };

  return s3.getObject(options).createReadStream();
};
