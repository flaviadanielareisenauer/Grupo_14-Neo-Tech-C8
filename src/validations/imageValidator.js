const { check, body } = require("express-validator");

module.exports = [

    check('image'),
    body('image')

    .custom((value, { req }) => {
        if (req.body.imagen !== undefined) {
            return true
        } else {
            return false
        }
    })
    .withMessage("Debes subir una imagen")
]