const express = require('express');
const { checkKey, checkQuery } = require('../../tools');

const router = express.Router();

const UploadDocument = require('./UploadDocument');

router.use('/', UploadDocument.routes);

let index;

router.get('/', async (req, res) => index(req, res));

index = async (req, res) => {
  res.render(
    'UploadPdf/views/index',
    {
      title: 'hello',
    }
  );
};

module.exports.routes = router;
