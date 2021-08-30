const { products, writeJson } = require('../data/dataBase')
module.exports = {

    perfil: (req, res) => {
        res.render('config-perfil')
    },

    carga: (req, res) => {
        res.render('admin-carga')
    },

    edit: (req, res) => {
        res.render('admin-edit')
    },


    adminLogin: (req, res) => {
        res.render('adminLogin')
    }

}