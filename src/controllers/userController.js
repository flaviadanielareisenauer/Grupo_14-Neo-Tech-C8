const { products, users } = require('../data/dataBase');
const { validationResult } = require('express-validator');

module.exports = {
    register: (req, res) => {
        res.render('users/register')
    },

    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (erros.isEmpty()) {

        } else {

        }

    },













    perfil: (req, res) => {
        res.render('users/config-perfil')
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