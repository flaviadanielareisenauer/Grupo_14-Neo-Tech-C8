const { products, users } = require('../data/dataBase');
const { validationResult } = require('express-validator');

module.exports = {
    register: (req, res) => {
        res.render('users/register'       
        )
    },

    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (erros.isEmpty()) {
            let lastId = 0;

            users.forEach(user => {
                if (user.id > lastId) {
                    lastId = user.id
                }
            })

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
                password : password1,
                DNI,
                number_phone,
                street_name,
                street_number, 
                dto,
                postal_code,
                province,
                localidad,
                category,
                avatar : req.file ? req.file.filename : "default-image.png",
                rol: "ROL_USER"
            };
            
            users.push(newUser)

            writeUsersJSON(users)

            res.redirect('/users/login')

        } else {
            res.render('register', {
                category, 
                errors: errors.mapped(),
                old : req.body
            })
        }
    },

    profile: (req, res) => {
        res.render('users/profile')
    },

    profileEdit: (req, res) => {
        res.render('users/profile-edit')
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