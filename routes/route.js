// routes/contact.js
const express = require('express');
const  {createContact}  = require('../controllers/controller');
const router = express.Router();


router.post('/create', createContact);

module.exports = router;
