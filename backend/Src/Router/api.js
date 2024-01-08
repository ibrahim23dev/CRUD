const express = require('express');
const ContactController = require('../Controller/contactController');

const router = express.Router();

router.post('/create', ContactController.Create);
router.post('/read', ContactController.Read);
router.post('/delete', ContactController.Update);

module.exports = router;