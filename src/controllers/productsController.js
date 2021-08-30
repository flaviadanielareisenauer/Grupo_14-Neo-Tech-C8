const { products, writeJson } = require('../data/dataBase')
module.exports = {
    productsList: (req, res) => {
        res.render('admin/productsList', {
            products: products

        })
    },
    agregarProducto: (req, res) => {
        res.render('admin/admin-carga')
    },
    crearProducto: (req, res) => {
        let lastId = 1;

        products.forEach(product => {
            if (product.id > lastId) {
                lastId = product.id
            }
        });

        let productoNuevo = {
            id: lastId + 1,
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
            category: req.body.categoria,
            subCategory: req.body.subcategoria,
            marca: req.body.marca,
            código: req.body.codigo,
            color: req.body.color,
            precio: req.body.precio
        }

        products.push(productoNuevo);

        writeJson(products)

        res.redirect('/products')
    },
    detail: (req, res) => {
        let productID = +req.params.id;
        let productsSlider = products.filter(product => product.discount >= 0)
        let product = products.find(product => product.id === productID)


        res.render('productDetail', {
            titleSlider: "Productos relacionados",
            product,
            productsSlider
            /*  productsSlider,
             product */
            /*  bannerSlides: carousel */
        })
    }

}