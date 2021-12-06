const { validationResult } = require("express-validator");
let bcrypt = require("bcryptjs");
const db = require("../database/models");
const { Op, where } = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  register: (req, res) => {
    res.render("users/register", {
      session: req.session,
      register: "no",
    });
  },
  profileLogin: (req, res) => {
    const { emailLog } = JSON.parse(JSON.stringify(req.body));
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.findOne({
        where: {
          email: emailLog,
        },
      }).then((user) => {
        req.session.user = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.avatar,
          rol: user.rol,
        };

        if (req.body.remember) {
          res.cookie("userNeoTech", req.session.user, {
            expires: new Date(Date.now() + 1000000),
            httpOnly: true,
          });
        }
        res.locals.user = req.session.user;
        res.redirect("/");
      });
    } else {
      res.render("users/register", {
        errors: errors.mapped(),
        session: req.session,
        old: req.body.emailLog,
        register: "no",
      });
    }
  },
  processRegister: (req, res) => {
    let arrayImages = [];
    let errors = validationResult(req);

    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }

    if (errors.isEmpty()) {
      let { firstName, lastName, email, password1 } = req.body;

      db.User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password1, 12),
        avatar: arrayImages.length > 0 ? arrayImages : "default-image.png",
        rol: 1,
      })
        .then(() => {
          res.render("users/register", {
            session: req.session,
            register: "no",
          });
        })
        .catch((err) => console.log(err));
    } else {
      res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
        register: "yes",
      });
    }
  },
  profile: (req, res) => {
    db.User.findByPk(req.session.user.id, {
      include: [{ association: "addresses" }],
    }).then((user) => {
      res.render("users/profile", {
        user,
        session: req.session,
      });
    });
  },
  profileEdit: (req, res) => {
    db.User.findByPk(req.session.user.id, {
      include: [{ association: "addresses" }],
    }).then((user) => {
      res.render("users/profile-edit", {
        user,
        session: req.session,
      });
    });
  },
  updateProfile: (req, res) => {
    const options = { multi: true };
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let {
        email,
        firstName,
        lastName,
        dni,
        numberPhone,
        streetName,
        streetNumber,
        dto,
        postalCode,
        province,
        location,
        avatar,
      } = req.body;

      db.User.update(
        {
          email,
          firstName,
          lastName,
          dni,
          numberPhone,
          location,
          avatar: req.file
            ? req.file.filename
            : avatar
            ? "default-image.png"
            : avatar,
        },
        {
          where: {
            id: req.params.id,
          },
        },
        options
      ).then(async () => {
        if (await db.Address.findOne({ where: { id: req.params.id } })) {
          db.Address.update(
            {
              streetName,
              streetNumber,
              dto,
              postalCode,
              province,
              /*location,*/
              userId: req.params.id,
            },
            {
              where: {
                id: req.params.id,
              },
            },
            options
          ).then(() => {
            res.redirect("/user/profile/" + req.params.id);
          });
        } else {
          db.Address.create({
            streetName,
            streetNumber,
            dto,
            postalCode,
            province,
            location,
            userId: req.params.id,
          }).then(() => {
            res.redirect("/user/profile/" + req.params.id);
          });
        }
      });
    } else {
      db.User.findByPk(req.params.id, {
        include: [{ association: "addresses" }],
      }).then((user) => {
        res.render("users/profile-edit", {
          errors: errors.mapped(),
          old: req.body,
          session: req.session,
          user,
        });
      });
    }
  },
  categorias: (req, res) => {
    db.Products.findAll({
      where: {
        discount: {
          [Op.gte]: 0,
        },
      },
      include: [{ association: "productsimage" }],
    })
      .then((Product) => {
        res.render("categorias", {
          titleSlider: "productos",
          session: req.session,
          Product,
          toThousand,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  productCart: (req, res) => {
    res.render("productCart", { session: req.session });
  },
  profileDelete: (req, res) => {
    db.Address.destroy({
      where: { userId: req.params.id },
    })
      .then(() => {
        db.User.destroy({
          where: {
            id: req.params.id,
          },
        }).then(() => {
          req.session.destroy();
          if (req.cookies.userNeoTech) {
            res.cookie("userNeoTech", "", { maxAge: -1 });
          }
          res.redirect("/");
        });
      })
      .catch((error) => console.log(error));
  },
  imgDeleteProfile: (req, res) => {
    db.User.update(
      { avatar: "" },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((user) => {
      res.redirect("/user/profile/" + req.params.id);
    });
  },
  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.userNeoTech) {
      res.cookie("userNeoTech", "", { maxAge: -1 });
    }
    res.redirect("/");
  },
};
