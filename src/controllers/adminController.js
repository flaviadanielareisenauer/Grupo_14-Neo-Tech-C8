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
    }

}