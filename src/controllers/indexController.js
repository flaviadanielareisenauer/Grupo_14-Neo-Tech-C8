//const { products } = require('../data/dataBase')
const db = require("../database/models");
const { Op, where } = require("sequelize");
const User = require("../database/models/User");
const { promiseImpl } = require("ejs");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req, res) => {
        db.Products.findAll({
                where: {
                    discount: {
                        [Op.gte]: 0,
                    },
                },
                include: [{
                    association: "productsimage",
                }, ],
            })
            /*   Promise.all([productsImage, Product]) */
            .then((Product) => {
                console.log(req.session)
                res.render("index", {
                    titleSlider: "productos",
                    session: req.session,
                    Product,
                    toThousand,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    },
    pago: (req, res) => {
        res.render("formas-de-pago", { session: req.session });
    },
    search: (req, res) => {
        let search = req.query.search.toLowerCase();
        let categories = db.Categories.findAll()

        let products = db.Products.findAll({
            /*   where: {
                  name: {
                      [Op.substring]: search,
                  },
              },*/
            include: [{ association: "productsimage" }]
        })
        Promise.all([products, categories])

        .then(([Products, Category]) => {
            db.Products.findAll({
                        where: {
                            name: {
                                [Op.substring]: search,
                            },
                        },
                        include: [{ association: "productsimage" }]
                    }

                )
                .then(result => {
                    res.render("results", {
                        session: req.session,
                        result,
                        Category,
                        search: search,
                        toThousand,
                        req: req.params.id,
                        Products

                    });
                })



        });
    },

    /***********PROCESO************/

    allProducts: (req, res) => {
        let categories = db.Categories.findAll()
        let products = db.Products.findAll({
                where: {
                    discount: {
                        [Op.gte]: 0
                    }
                },
                include: [{ association: "productsimage" }]
            })
            /*   Promise.all([productsImage, Product]) */
        Promise.all([categories, products])
            .then(([Category, Product]) => {
                res.render('allProducts', {
                    titleSlider: "productos",
                    session: req.session,
                    Product,
                    Category,
                    toThousand,
                    req: req.params.id
                })
            })
            .catch(err => { console.log(err) })

    },
    allProductsCategory: (req, res) => {
        let categories = db.Categories.findAll()
        let products = db.Products.findAll({
            where: {
                categoryId: req.params.id
            },
            include: [{ association: "productsimage" }]
        })
        Promise.all([categories, products])
            .then(([Category, Product]) => {
                res.render('allProducts', {
                    Category,
                    Product,
                    session: req.session,
                    req: req.params.id
                })
            })

    },
};