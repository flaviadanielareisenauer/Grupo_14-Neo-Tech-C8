const { products, users, writeUsersJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs')

module.exports = {
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })
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

            res.redirect('/')

        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },

    profile: (req, res) => {
        let user = users.find(user => user.id === req.session.user.id)

        res.render('users/profile', {
            user,
            session: req.session
        })
    },

    profileEdit: (req, res) => {
        let user = users.find(user => user.id === +req.params.id)

        res.render('users/profileEdit', {
            user,
            session: req.session
        })
    },

    categorias: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 0)

        res.render('categorias', {
            titleSlider: "categorias",
            productsSlider
        })
    },

    productCart: (req, res) => {
        res.render('productCart')
    }
}