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
    },
    eliminarProducto: (req, res) => {
        products.forEach(product => {
            if(product.id === +req.params.id){
                let productoAEliminar = products.indexOf(product);
                products.splice(productoAEliminar, 1)
            }
        })
        writeJson(products);
        res.redirect('/products');
    }
}