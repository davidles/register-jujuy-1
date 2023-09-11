// Requires! Modules
const { body, validationResult } = require('express-validator');
const path = require('node:path');
const fs = require('node:fs');
const data = require('../data/dataUsers.json');

const arrRegister = [
    body('username').notEmpty().withMessage('Debes ingresar un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes ingresar tu email').bail().isEmail().withMessage('Debes ingresar un formato de email válido'),
    body('password').notEmpty().withMessage('Debes ingresar tu password')
];

const validateRegister = ( req, res, next) =>{

    const errors = validationResult(req);

    // Intentar
    try{
        if(errors.isEmpty()){
            next()
    
        }else{
            // Lanzar
            throw errors
        }

    // Capturar
    }catch(err){
        res.render('create',{
            errors: err.mapped(),
            old: req.body
        })
    }



}

module.exports = {
    arrRegister,
    validateRegister
}