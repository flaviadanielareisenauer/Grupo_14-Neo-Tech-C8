const { products } = require('../data/dataBase')
module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 0)

        res.render('index', {
            titleSlider: "._.",
            productsSlider

        })
    },
    pago: (req, res) => {
        res.render('formas-de-pago')
    },


}