const { products } = require('../data/dataBase')
const db = require('../database/models')
const { Op } = require('sequelize')
const User = require('../database/models/User')


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
                    Product

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
                    search: search
                })
            })
    }
}