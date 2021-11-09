const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("firstName").notEmpty().withMessage("El campo nombre es obligatorio")
  .isAlpha()
  .withMessage('Debes agregar un nombre valido que no contenga numeros'),

  check("lastName").notEmpty().withMessage("El campo apellido es obligatorio")
  .isAlpha()
  .withMessage('Debes agregar un nombre valido que no contenga numeros'),

  check("email")
    .notEmpty()
    .withMessage("El campo email es obligatorio")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

  body("email").custom((value) => {
    return db.User.findOne({
      where: {
        email: value,
      },
    }).then((user) => {
      if (user) {
        return Promise.reject("El email ya está registrado");
      }
    });
  }),

  check("password1")
    .notEmpty()
    .withMessage("El campo contraseña es obligatorio")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número"),

  body("password2")
    .custom((value, { req }) => (value !== req.body.password1 ? false : true))
    .withMessage("Las contraseñas no coinciden"),
];
