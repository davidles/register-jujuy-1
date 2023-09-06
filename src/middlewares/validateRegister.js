// Requires! Modules
const { body, validationResult } = require('express-validator');

const arrRegister = [
    body('username').notEmpty().withMessage('Debes ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail().isEmail().withMessage('Debes ingresar un formato de email válido'),
    body('password').notEmpty().withMessage('Debes ingresar tu password')
];

const validateRegister = ( req, res, next) =>{

    const errors = validationResult(req);

    console.log(req.body)

    if(errors.isEmpty()){
        next()

    }else{
        res.render('create',{
            errors: errors.mapped(),
            old: req.body
        })
    }

}

module.exports = {
    arrRegister,
    validateRegister
}