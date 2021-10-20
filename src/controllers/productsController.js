const { products, writeJson } = require('../data/dataBase')
const db = require('../database/models')
const { Op } = require('sequelize')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    detail: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 0)
        db.Products.findOne({
            where: {
                id: req.params.id,
            },
            include: [{
                association: "productsimage",
            }],
            raw: true,
            nest: true
        })

        .then((ProductD) => {
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
                .then(Product => {
                    res.render("productDetail", {
                        ProductD,
                        session: req.session,
                        Product,
                        toThousand
                    });
                })
        });

    },
    edit: (req, res) => {
        let productID = +req.params.id;
        let product = products.find(product => product.id === productID);
        res.render('admin/admin-edit', {
            titleSlider: "Productos relacionados",
            product,
            session: req.session
        })
    }

}