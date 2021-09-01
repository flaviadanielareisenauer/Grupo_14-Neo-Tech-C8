const { products } = require('../data/dataBase')
module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 0)

        res.render('index', {
            titleSlider: "Para los amantes del café.",
            productsSlider

        })
    },
    pago: (req, res) => {
        res.render('formas-de-pago')
    },
    search: (req, res) => {
        let results = [];
        products.forEach(product => {
            if (product.name.toLowerCase().includes(req.query.search)) {
                return results.push(product)
            }
        })
        res.render('results', {
            results,
            search: req.query.search
        })
    },


}