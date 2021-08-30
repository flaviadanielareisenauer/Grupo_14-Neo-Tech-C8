const { products } = require('../data/dataBase')
module.exports = {
    register: (req, res) => {
        res.render('register')
    },
    perfil: (req, res) => {
        res.render('config-perfil')

    },

    categorias: (req, res) => {
        res.render('categorias')
    },

    productCart: (req, res) => {
        res.render('productCart')
    },

    productDetail: (req, res) => {
        res.render('productDetail')
    },
}