const express = require('express');
const ContactController = require('../Controller/contactController');

const router = express.Router();

router.post('/create', ContactController.Create);
router.get('/read', ContactController.Read);
router.post('/update', ContactController.Update);
//router.post('/delete', ContactController.Delete);

module.exports = router;