// routes/contact.js
const express = require('express');
const { createContact } = require('../controllers/Controller');
const router = express.Router();
console.log('Current directory:', __dirname);
console.log('Resolved path:', require('path').resolve(__dirname, '../controllers/Controller'));
const Controller = require(require('path').resolve(__dirname, '../controllers/Controller'));


router.post('/create', createContact);

module.exports = router;
