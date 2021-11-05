const { check, body } = require('express-validator')
const db = require('../database/models')


module.exports = [

    check('email')
    .notEmpty()
    .withMessage('El campo email no puede ir vacío').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    check('firstName')
    .notEmpty()
    .withMessage('El campo nombre no puede ir vacío'),

    check('lastName')
    .notEmpty()
    .withMessage('El campo apellido no puede ir vacío'),

]