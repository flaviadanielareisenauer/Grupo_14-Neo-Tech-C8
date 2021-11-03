//const dataBase = require('../data/dataBase')
const db = require("../database/models");
//const { products, writeJson } = require('../data/dataBase')

module.exports = {
    perfil: (req, res) => {
        res.render("users/config-perfil", {
            session: req.session,
        });
    },

    adminLogin: (req, res) => {
        res.render("admin/adminLogin", {
            session: req.session,
        });
    },
    productsList: (req, res) => {
        db.Products.findAll({
                include: [{ association: "productsimage" }],
            })
            .then((products) => {
                res.render("admin/productsList", {
                    products: products,
                    session: req.session,
                });
            });
    },
    agregarProducto: (req, res) => {
        db.Categories.findAll()

        .then((categorias) => {
                res.render("admin/admin-carga", {
                    session: req.session,
                    categorias,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },

    crear: (req, res) => {
        let arrayImages = [];
        if (req.files) {
            req.files.forEach((image) => {
                arrayImages.push("nuevos/" + image.filename);
            });
        }
        let { name, description, discount, price, color, code, category, marca } =
        req.body;

        db.Products.create({
            name,
            description,
            discount,
            price,
            color,
            categoryId: category,
            code,
            marca
        }).then((product) => {
            if (arrayImages.length > 0) {
                let productsImage = arrayImages.map((image) => {
                    return {
                        name: image,
                        productId: product.id,
                    };
                });
                db.ProductsImage.bulkCreate(productsImage);
            }
        });

        res.redirect("/admin/products");
    },
    edit: (req, res) => {
        let categories = db.Categories.findAll();
        let Product = db.Products.findByPk(req.params.id);
        let Image = db.ProductsImage.findOne({
            where: { productId: req.params.id },
        });

        Promise.all([categories, Product, Image]).then(
            ([category, Product, Image]) => {
                res.render("admin/admin-edit", {
                    Product,
                    Image,
                    category,
                    session: req.session,
                });
            }
        );
    },

    update: (req, res) => {
        let { name, description, discount, price, color, code, categoryId, marca } =
        req.body;

        db.Products.update({
            name,
            description,
            discount,
            price,
            color,
            code,
            categoryId,
            marca
        }, {
            where: {
                id: req.params.id,
            },
        }).catch((err) => {
            console.log(err);
        });

        let images = "";
        if (req.files) {
            req.files.forEach((image) => {
                images = "nuevos/" + image.filename;
            });
        }
        db.ProductsImage.update({
            name: images,
            productId: req.params.id,
        }, {
            where: {
                productId: req.params.id,
            },
        });
        res.redirect("/admin/products");
    },
    eliminarProducto: (req, res) => {
        db.ProductsImage.destroy({
                where: { productId: req.params.id },
            })
            .then(() => {
                db.Products.destroy({
                    where: {
                        id: req.params.id,
                    },
                }).then(() => {
                    res.redirect("/admin/products");
                });
            })
            .catch((error) => console.log(error));
    },
};