const express = require('express');
const { checkKey } = require('../../tools');
const { uploadDocument } = require('../../configs');

const router = express.Router();

let upload;

router.post('/', checkKey,
  uploadDocument.single('UPLOAD'),
  async (req, res) => upload(req, res));

upload = async (req, res) => {
  res.send({
    status: 'successfully upload document',
    key: req.file.key,
    location: req.file.location
  });
};

module.exports.routes = router;
