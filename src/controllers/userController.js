const { products, users, writeUsersJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs')

module.exports = {
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })
    },
    profileLogin: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            let user = users.find(user => user.email === req.body.emailLog)

            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            if (req.body.remember) {
                res.cookie("NeoTech", req.session.user, { expires: new Date(Date.now() + 1000000), httpOnly: true })
            }

            res.locals.user = req.session.user

            res.redirect('/')

        } else {

            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body.emailLog
            })
        }
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let lastId = 0;

            users.forEach(user => {
                if (user.id > lastId) {
                    lastId = user.id
                }
            })

            let arrayImages = [];

            if (req.files) {
                req.files.forEach(image => {
                    arrayImages.push("nuevos/" + image.filename)
                })
            }

            let {
                first_name,
                last_name,
                email,
                password1,
                password2,
            } = req.body

            let newUser = {
                id: lastId + 1,
                first_name,
                last_name,
                email,
                password1: bcrypt.hashSync(password1, 10),
                password2: bcrypt.hashSync(password2, 10),
                DNI: "",
                number_phone: "",
                street_name: "",
                street_number: "",
                dto: "",
                postal_code: "",
                province: "",
                localidad: "",
                category: "",
                avatar: arrayImages.length > 0 ?
                    arrayImages : ["nuevos/default-image.jpg"],
                rol: "ROL_USER",
            };

            users.push(newUser);

            writeUsersJSON(users)

            res.redirect('register')

        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },

    profile: (req, res) => {
        /*       let user = users.find(user => user.id === req.session.user.id) */
        let user = users.find(user => user.id === +req.params.id)
        res.render('users/profile', {
            user,
            session: req.session
        })
    },

    profileEdit: (req, res) => {


        let {
            nombreUser,
            password,
            firts_name,
            last_name,
            DNI,
            tel,
            calle,
            postal_code
        } = req.body;
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push("nuevos/" + image.filename)
            })
        }
        users.forEach(user => {
            if (user.id === +req.params.id) {
                user.id = user.id,
                    user.user_name = nombreUser,
                    user.password = password,
                    user.firts_name = firts_name,
                    user.last_name = last_name,
                    user.DNI = DNI,
                    user.number_phone = tel,
                    user.street_name = calle,
                    user.postal_code = postal_code,
                    user.image = arrayImages.length > 0 ?
                    arrayImages : user.image
            }

        })

        writeUsersJSON(users)
    },
    logout: (req, res) => {
        req.session.destroy()
        if (req.cookies.NeoTech) {
            res.cookie('NeoTech', '', { maxAge: -1 })
        }

        res.redirect('/')
    },


    categorias: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 0)

        res.render('categorias', {
            titleSlider: "categorias",
            productsSlider,
            session: req.session
        })
    },

    productCart: (req, res) => {
        res.render('productCart', { session: req.session })

    }
}