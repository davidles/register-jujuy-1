const express  = require('express');
const router = express.Router();

/** Controlador */
const adminController = require('../controllers/adminController');

/** Middleware */
const validateAdmin = require('../middlewares/validateAdmin');
const upload = require('../middlewares/multer');

/*** Validaciones */
const { arrValidate, validationSearch } = require('../middlewares/ValidateSearch');
const { arrRegister, validateRegister } = require('../middlewares/validateRegister');

// queryString ?user=Lika
router.get('/', arrValidate, validationSearch, validateAdmin, adminController.render);

// Registrar Admin
router.get('/create', adminController.formCreate);
router.post('/create',upload.single('avatar'), arrRegister, validateRegister, adminController.createUser)

module.exports = router;