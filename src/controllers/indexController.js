const { products } = require('../data/dataBase')
const db = require('../database/models')
const { Op } = require('sequelize')
const User = require('../database/models/User')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    index: (req, res) => {

        db.Products.findAll({
                where: {
                    discount: {
                        [Op.gte]: 0
                    }
                },
                include: [{ association: "productsimage" }],
                raw: true,
                nest: true
            })
            /*   Promise.all([productsImage, Product]) */
            .then(Product => {

                res.render('index', {
                    titleSlider: "productos",
                    session: req.session,
                    Product,
                    toThousand
                })
            })
            .catch(err => { console.log(err) })

    },
    pago: (req, res) => {
        res.render('formas-de-pago', { session: req.session })
    },
    search: (req, res) => {

        let search = req.query.search.toLowerCase();
        db.Products.findAll({
                where: {
                    name: {
                        [Op.substring]: search
                    }
                },
                include: [
                    { association: 'productsimage' }
                ],
                raw: true,
                nest: true
            })
            .then((result) => {

                res.render('results', {
                    session: req.session,
                    result,
                    search: search,
                    toThousand
                })
            })
    },
    allProducts: (req, res) => {
        let categories = db.Categories.findAll()
        let products = db.Products.findAll({
                where: {
                    discount: {
                        [Op.gte]: 0
                    }
                },
                include: [{ association: "productsimage" }],
                raw: true,
                nest: true
            })
            /*   Promise.all([productsImage, Product]) */
        Promise.all([categories, products])
            .then(([Category, Product]) => {

                res.render('allProducts', {
                    titleSlider: "productos",
                    session: req.session,
                    Product,
                    Category,
                    toThousand
                })
            })
            .catch(err => { console.log(err) })

    }
}