const { products } = require('../data/dataBase')
module.exports = {
    register: (req, res) => {
        res.render('register')
    },
    perfil: (req, res) => {
        res.render('config-perfil')

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
    },

    productDetail: (req, res) => {
        res.render('productDetail')
    },
}