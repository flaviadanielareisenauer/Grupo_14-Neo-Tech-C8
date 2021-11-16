let { check, body } = require("express-validator");
let bcrypt = require("bcryptjs");
const db = require("../database/models");

module.exports = [
  check("emailLog")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  body("emailLog").custom((value, { req }) => {
    return db.User.findOne({
      where: {
        email: req.body.emailLog,
      },
    }).then((email) => {
      if (email) {
        return true;
      } else {
        return Promise.reject("Este correo aún no ha sido registrado");
      }
    });
  }),

  check("passLog").notEmpty().withMessage("Debes ingresar una contraseña"),

  body("passLog").custom((value, { req }) => {
    return db.User.findOne({
      where: {
        email: req.body.emailLog,
      },
    })
      .then((user) => {
        if (!bcrypt.compareSync(req.body.passLog, user.dataValues.password)) {
          return Promise.reject();
        }
      })
      .catch((err) => {
        return Promise.reject("Email o contraseña incorrectos");
      });
  }),
];
