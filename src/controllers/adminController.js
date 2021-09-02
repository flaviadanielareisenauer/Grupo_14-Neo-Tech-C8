const { products, writeJson } = require('../data/dataBase')
module.exports = {

    perfil: (req, res) => {
        res.render('config-perfil')
    },

    carga: (req, res) => {
        res.render('admin/admin-carga')
    },

    edit: (req, res) => {
        res.render('admin/admin-edit')
    },

    adminLogin: (req, res) => {
        res.render('admin/adminLogin')
    },
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

        res.redirect('/admin/products')
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
            description,
            marca,
            código,
            color,
            image
        } = req.body;

        products.forEach(product => {
            if (product.id === +req.params.id) {
                product.id = product.id,
                    product.image = req.file ? req.file.filename : product.image,
                    product.name = name,
                    product.price = price,
                    product.discount = discount,
                    product.category = category,
                    product.description = description,
                    product.marca = marca,
                    product.código = código,
                    product.color = color
            }

        })

        writeJson(products);
        res.redirect('/admin/products')
    },
    eliminarProducto: (req, res) => {
        products.forEach(product => {
            if (product.id === +req.params.id) {
                let productoAEliminar = products.indexOf(product);
                products.splice(productoAEliminar, 1)
            }
        })
        writeJson(products);
        res.redirect('admin/products');
    }
}