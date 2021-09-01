const { products, writeJson } = require('../data/dataBase')
module.exports = {
    detail: (req, res) => {
        let productID = +req.params.id;
        let productsSlider = products.filter(product => product.discount >= 0)
        let product = products.find(product => product.id === productID)


        res.render('productDetail', {
            titleSlider: "Productos relacionados",
            product,
            productsSlider

        })
    }

}