const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs')
const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = {
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })
    },
    profileLogin: (req, res) => {
        const { emailLog } = JSON.parse(JSON.stringify(req.body));
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.User.findOne({
                    where: {
                        email: emailLog
                    },
                })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        avatar: user.avatar,
                        rol: user.rol,
                    };

                    if (req.body.remember) {
                        res.cookie("userNeoTech", req.session.user, { expires: new Date(Date.now() + 1000000), httpOnly: true })
                    }

                    res.locals.user = req.session.user;
                    res.redirect("/");
                })
        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body.emailLog
            })
        }
    },
    processRegister: (req, res) => {
        let arrayImages = [];
        let errors = validationResult(req)

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
                avatar: arrayImages.length > 0 ? arrayImages : "nuevos/default-image.jpg",
                rol: 0,
            }).then(() => {
                res.redirect('/user/login')
            }).catch(err => console.log(err))
        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
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
            let { firstName, lastName, dni, numberPhone, streetName, streetNumber, dto, postalCode, province, location } = req.body;

            db.User.update({
                    firstName,
                    lastName,
                    dni,
                    numberPhone,
                    avatar: req.file ? req.file.filename : req.session.user.avatar
                }, {
                    where: {
                        id: req.params.id
                    }
                },
                options
            ).then(async() => {
                if (await db.Address.findOne({ where: { id: req.params.id } })) {
                    db.Address.update({
                            streetName,
                            streetNumber,
                            dto,
                            postalCode,
                            province,
                            location,
                            userId: req.params.id
                        }, {
                            where: {
                                id: req.params.id
                            }
                        },
                        options
                    ).then(() => {
                        res.redirect('/user/profile/' + req.params.id)
                    })
                } else {
                    db.Address.create({
                        streetName,
                        streetNumber,
                        dto,
                        postalCode,
                        province,
                        location,
                        userId: req.params.id
                    }).then(() => {
                        res.redirect('/user/profile/' + req.params.id)
                    })
                }
            })
        } else {
            res.render("profile-edit", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        if (req.cookies.userNeoTech) {
            res.cookie('userNeoTech', '', { maxAge: -1 })
        }
        res.redirect('/')
    },
    categorias: (req, res) => {
        db.Products.findAll({
                where: {
                    discount: {
                        [Op.gte]: 0
                    }
                },
                include: [{ association: "productsimage" }],
                raw: true,
                nest: true
            })
            .then(Product => {
                res.render('categorias', {
                    titleSlider: "productos",
                    session: req.session,
                    Product

                })
            })
            .catch(err => { console.log(err) })


    },
    productCart: (req, res) => {
        res.render('productCart', { session: req.session })

    }
}