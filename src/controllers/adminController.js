const { promiseImpl } = require('ejs');
const { validationResult } = require('express-validator')
const db = require("../database/models");
const { Op, where } = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


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
        let categories = db.Categories.findAll()
        let Products = db.Products.findAll({
            include: [{ association: "productsimage" }],
        })
        Promise.all([categories, Products])

        .then(([Category, products]) => {
            let productsRev = products.reverse()
            res.render("admin/productsList", {
                productsRev,
                session: req.session,
                Category,
                req: req.params.id,
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

        let errors = validationResult(req)
        if (errors.isEmpty()) {


            let arrayImages = [];
            if (req.files) {
                req.files.forEach((image) => {
                    arrayImages.push("nuevos/" + image.filename);
                });
            }
            let { name, description, discount, price, color, code, categoria, marca } =
            req.body;

            db.Products.create({
                name,
                description,
                discount,
                price,
                color,
                categoryId: categoria,
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

        } else {
            db.Categories.findAll()
                .then((categorias) => {
                    res.render("admin/admin-carga", {
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session,
                        categorias
                    })
                })
        }
    },
    edit: (req, res) => {
        let categories = db.Categories.findAll();
        let product = db.Products.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: "categories" }]
        });
        let Image = db.ProductsImage.findAll({
            where: { productId: req.params.id },
        });

        Promise.all([categories, product, Image])

        .then(
            ([categories, Product, Image]) => {
                console.log(Image)
                res.render("admin/admin-edit", {
                    Product,
                    Image,
                    categories,
                    session: req.session,
                });
            }
        );
    },

    update: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            let { name, description, discount, price, color, code, categoryId, marca } =
            req.body;
            console.log(categoryId)

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
            
            
            let arrayImages = [];
            if (req.files) {
                req.files.forEach((image) => {
                    arrayImages.push("nuevos/" + image.filename);
                });
                db.ProductsImage.destroy({
                        where: { productId: +req.params.id }
                    })
                    .then(() => {
                        db.Products.findOne({
                                where: { id: req.params.id }
                            })
                            .then(() => {
                                let productsImage = arrayImages.map((image) => {
                                    return {
                                        name: image,
                                        productId: +req.params.id
                                    };
                                });
                                db.ProductsImage.bulkCreate(productsImage);
                            })
                    })

            }

            res.redirect("/admin/products");

        } else {
            const categories = db.Categories.findAll();
            const product = db.Products.findOne({
                where: { id: req.params.id }
            })
            Promise.all([categories, product])

            .then(([category, Product]) => {
                console.log(category)
                res.render("admin/admin-edit", {
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                    Product,
                    category
                })
            }).catch(error => { console.log(error) })
        }


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
    productListAdCategory: (req, res) => {
        let categories = db.Categories.findAll()
        let Products = db.Products.findAll({
            where: {
                categoryId: req.params.id
            },
            include: [{ association: "productsimage" }]
        })
        Promise.all([categories, Products])
            .then(([Category, products]) => {
                let productsRev = products.reverse();
                res.render('admin/productsList', {
                    Category,
                    productsRev,
                    session: req.session,
                    req: req.params.id
                })
            })

    },
    searchAd: (req, res) => {
        let search = req.query.search.toLowerCase();
        db.Categories.findAll()

        .then(Category => {
            db.Products.findAll({
                    where: {
                        name: {
                            [Op.substring]: search,
                        },
                    },
                    include: [{ association: "productsimage" }]
                })
                .then(products => {
                    let productsRev = products.reverse();
                    res.render("admin/productsList", {
                        session: req.session,
                        Category,
                        search: search,
                        toThousand,
                        req: req.params.id,
                        productsRev,
                    });
                })
        });
    },
    addCategory: (req, res) => {
        db.Categories.create({
                name: req.body.addCategory
            })
            .then(() => {
                res.redirect("/admin/products");
            })

    }, deleteCategory : (req, res)=> {
        db.Categories.destroy({
            where:{
                id:req.params.id
            }})
            .then(()=> {
                res.redirect('/admin/products')
            })
    }
};