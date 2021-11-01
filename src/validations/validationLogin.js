let { check, body } = require("express-validator");
let bcrypt = require("bcryptjs");
const db = require("../database/models");

module.exports = [
  check("emailLog")
    .notEmpty()
    .withMessage("Debes ingresar una dirección de correo")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un correo válido"),

  body("custom").custom((value, { req }) => {
    const { emailLog, passLog } = JSON.parse(JSON.stringify(req.body));
    return db.User.findOne({
      where: {
        email: emailLog,
      },
    })
      .then((user) => {
        if (!bcrypt.compareSync(passLog, user.dataValues.password)) {
          return Promise.reject();
        }
      })
      .catch((error) => {
        return Promise.reject("Email o contraseña incorrecta");
      });
  }),
];