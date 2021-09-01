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
        let { name, price, discount, category, subcategory, description, code } = req.body
        let productoNuevo = {
            id: lastId + 1,
            name,
            price,
            discount,
            category,
            subcategory,
            description,
            code,
            image: req.file ? ["nuevos/" + req.file.filename] : "default-image"
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

        })
    },
    edit: (req, res) => {
        let productID = +req.params.id;
        let product = products.find(product => product.id === productID);


        res.render('admin/admin-edit', {
            titleSlider: "Productos relacionados",
            product
        })
    },
    update: (req, res) => {

        let {
            name,
            price,
            discount,
            category,
            description
        } = req.body;

        products.forEach(product => {
            if (product.id === +req.params.id) {
                product.id = product.id,
                    product.image = image,
                    product.name = name,
                    product.price = price,
                    product.discount = discount,
                    product.category = category,
                    product.description = description,
                    product.marca = marca,
                    product.codigo = codigo,
                    product.color = color
            }
        })

        writeJson(products);

        res.send(`Has editado el producto ${name}`)
        res.redirect('/products')
    }

}