const express = require('express');
const { graphql } = require('graphql');
const { checkKey, checkQuery } = require('../../tools');
const { uploadPdfFile } = require('../../configs');

const router = express.Router();

let uploadPdf;

router.post('/', checkKey,
  // uploadPdfFile.single('PDF'),
  async (req, res) => uploadPdf(req, res));

uploadPdf = async (req, res) => {
  res.send({
    status: 'successfully upload document'
  });
};

module.exports.routes = router;
