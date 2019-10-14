const express = require('express');

const router = express.Router();

const UploadDocument = require('./UploadDocument');

router.use('/', UploadDocument.routes);

module.exports.routes = router;
