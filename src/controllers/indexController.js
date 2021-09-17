const { products } = require('../data/dataBase')
module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 0)

        res.render('index', {
            titleSlider: "productos",
            productsSlider,
            session: req.session

        })

    },
    pago: (req, res) => {
        res.render('formas-de-pago', { session: req.session })
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
            search: req.query.search,
            session: req.session
        })
    }
}