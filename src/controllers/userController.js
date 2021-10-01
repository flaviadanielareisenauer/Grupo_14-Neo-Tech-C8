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
                res.cookie("userNeoTech", req.session.user, { expires: new Date(Date.now() + 1000000), httpOnly: true })
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

            } = req.body

            let newUser = {
                id: lastId + 1,
                first_name,
                last_name,
                email,
                password: bcrypt.hashSync(password1, 10),
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
                rol: "regular_user",
            };

            users.push(newUser);

            writeUsersJSON(users)

            res.redirect('/user/register')

        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },

    profile: (req, res) => {
        /*     let user = users.find(user => user.id === req.session.user.id) */
        let user = users.find(user => user.id === +req.params.id)
        res.render('users/profile', {
            user,
            session: req.session
        })
    },

    editar: (req, res) => {
        /*   let user = users.find(user => user.id === req.session.user.id) */

        let user = users.find(user => user.id === +req.params.id)
        res.render('users/profile-edit', {
            user,
            session: req.session.user
        })
    },

    profileEdit: (req, res) => {
        let user = users.find(user => user.id === +req.params.id)
        let {
            email,
            password,
            first_name,
            last_name,
            DNI,
            number_phone,
            street_name,
            postal_code,
            province,
            localidad,
            street_number
        } = req.body;


        let arrayImages = [];

        users.forEach(user => {

            if (user.id === +req.params.id) {
                user.id = user.id,
                    user.email = email,
                    user.first_name = first_name,
                    user.last_name = last_name,
                    user.DNI = DNI,
                    user.number_phone = number_phone,
                    user.street_name = street_name,
                    user.postal_code = postal_code, user.street_number = street_number,
                    user.province = province,
                    user.localidad = localidad,
                    user.avatar = req.file ? req.file.filename : user.avatar
            }
        })

        writeUsersJSON(users)
        req.session.user = user
        res.redirect('/user/profile/' + user.id)
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
        if (req.cookies.userNeoTech) {
            res.cookie('userNeoTech', '', { maxAge: -1 })
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