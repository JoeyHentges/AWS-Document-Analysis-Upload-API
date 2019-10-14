const express = require('express');

const router = express.Router();

const DownloadDocument = require('./DownloadDocument');

router.use('/', DownloadDocument.routes);

module.exports.routes = router;
