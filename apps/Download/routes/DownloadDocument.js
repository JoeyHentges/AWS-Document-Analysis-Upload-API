const express = require('express');
const { checkKey } = require('../../tools');
const { downloadDocument } = require('../../configs');

const router = express.Router();

let uploadPdf;

router.post('/', checkKey, async (req, res) => uploadPdf(req, res));

uploadPdf = async (req, res) => {
  const { fileKey } = req.query;

  const fileDownload = await downloadDocument('jophen1298-test', fileKey);

  console.log(fileDownload);
  fileDownload.pipe(res);
};

module.exports.routes = router;
