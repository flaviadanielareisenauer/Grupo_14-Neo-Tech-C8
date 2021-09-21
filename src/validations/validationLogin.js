let { check, body } = require('express-validator');
let { users } = require('../data/dataBase')
let bcrypt = require('bcryptjs')

module.exports = [
    check('emailLog').notEmpty().withMessage('debes ingresar una dirección de correo').bail().isEmail().withMessage('Debes ingresar un correo válido'),
    body('emailLog')
    .custom(value => {
        let user = users.find(user => user.email === value)
        if (user !== undefined) {
            return true
        } else {
            return false
        }
    })
    .withMessage('Este email aún no ha sido registrado'),

    check('passLog')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),


    body('passLog')
    .custom((value, { req }) => {
        let user = users.find(user => user.email === req.body.emailLog)
        return bcrypt.compareSync(value, user.password)
    })
    .withMessage('Contraseña inválida')


]