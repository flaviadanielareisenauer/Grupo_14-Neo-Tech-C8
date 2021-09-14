const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir tu nombre'),


    check('last_name')
    .notEmpty()
    .withMessage('Debes escribir tu apellido'),


    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),
    
    
    check('password1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),


    body('password2')
    .custom((value, {req}) => value !== req.body.password1 ? false : true)
    .withMessage('Las contraseñas no coinciden')
]