const { products, writeJson } = require('../data/dataBase')
module.exports = {

    perfil: (req, res) => {
        res.render('users/config-perfil', {
            session: req.session

        })

    },

    carga: (req, res) => {
        res.render('admin/admin-carga', {
            session: req.session
        })
    },

    edit: (req, res) => {
        res.render('admin/admin-edit', {
            session: req.session
        })
    },

    adminLogin: (req, res) => {
        res.render('admin/adminLogin', {
            session: req.session
        })
    },
    productsList: (req, res) => {
        res.render('admin/productsList', {
            products: products,
            session: req.session

        })
    },
    agregarProducto: (req, res) => {
        res.render('admin/admin-carga', {
            session: req.session
        })
    },
    crearProducto: (req, res) => {
        let lastId = 1;

        products.forEach(product => {
            if (product.id > lastId) {
                lastId = product.id
            }
        });
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push("nuevos/" + image.filename)
            })
        }

        let productoNuevo = {
            id: lastId + 1,
            name: req.body.name,
            description: req.body.description,
            category: req.body.categoria,
            discount: req.body.discount,
            mark: req.body.mark,
            code: req.body.codeo,
            color: req.body.color,
            price: req.body.price,
            image: arrayImages.length > 0 ?
                arrayImages : ["nuevos/img-default.jpg"]
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
            product,
            session: req.session
        })
    },
    update: (req, res) => {

        let {
            name,
            price,
            discount,
            category,
            description,
            mark,
            code,
            color
        } = req.body;
        let arrayImages = [];
        if (req.files) {
            req.files.forEach(image => {
                arrayImages.push("nuevos/" + image.filename)
            })
        }
        products.forEach(product => {
            if (product.id === +req.params.id) {
                product.id = product.id,
                    product.name = name,
                    product.price = price,
                    product.discount = discount,
                    product.category = category,
                    product.description = description,
                    product.mark = mark,
                    product.code = code,
                    product.color = color,
                    product.image = arrayImages.length > 0 ?
                    arrayImages : product.image
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
        res.redirect('/admin/products');
    }
}