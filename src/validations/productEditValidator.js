const { check } = require("express-validator");


module.exports = [

    check('name').notEmpty()
    .withMessage("el campo Nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),


    check('categoryId').notEmpty()
    .withMessage("Debes asignar una categoria"),


    check('price').notEmpty()
    .withMessage("El campo Precio es obligatorio")
    .isNumeric()
    .withMessage("Solo puedes ingresar numeros"),

    check('code').notEmpty()
    .withMessage("El campo codigo es obligatorio")
    .isLength({ min: 2 })
    .withMessage("El código debe tener al menos 2 caracteres")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),


]