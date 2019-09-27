const express = require('express');
const { graphql } = require('graphql');
const { checkKey, checkQuery } = require('../../tools');
const { uploadPdfFile } = require('../../configs');
const { resolvers } = require('../controllers/resolvers/resolvers');
const { typedefs } = require('../controllers/typeDefs/typeDefs');

const router = express.Router();

let uploadPdf;

router.post('/', checkKey,
  // uploadPdfFile.single('PDF'),
  async (req, res) => uploadPdf(req, res));

uploadPdf = async (req, res) => {
  console.log('hi');
  res.send('HI');
};

module.exports.routes = router;
