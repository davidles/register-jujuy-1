const express = require('express');
const router = express.Router();

/** Controlador */
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/usuarios', mainController.users);

module.exports = router;