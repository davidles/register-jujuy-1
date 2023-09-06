const {check ,  validationResult} = require('express-validator');

const arrValidate = [
    check('user').notEmpty().withMessage('Debes completar este campo')
];

const validationSearch = ( req, res, next ) =>{
    const errors = validationResult(req);

    console.log(errors.mapped())

    // errors: Esta  vacío?
    if(errors.isEmpty() === true){ // False: Hay Errores | True: No hay errores
        next();

    } else{
        res.render('index', {
            errors: errors.mapped()
        })
    }


}

module.exports = {
    arrValidate,
    validationSearch
}
