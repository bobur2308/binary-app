const express = require('express');
const router = express.Router();
const binaryController = require('../controllers/binary.controller');

// Route to display binary conversion
router.get('/', binaryController.showBinary);
router.get('/clear',binaryController.clearNumber)

module.exports = router;

