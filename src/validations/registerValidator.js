const { check, body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("firstName").notEmpty().withMessage("Debes escribir tu nombre"),

  check("lastName").notEmpty().withMessage("Debes escribir tu apellido"),

  check("email")
    .notEmpty()
    .withMessage("Debes escribir un email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un email válido"),

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
    .withMessage("Debes escribir tu contraseña")
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage("La contraseña debe tener entre 6 y 12 caracteres"),

  body("password2")
    .custom((value, { req }) => (value !== req.body.password1 ? false : true))
    .withMessage("Las contraseñas no coinciden"),
];
