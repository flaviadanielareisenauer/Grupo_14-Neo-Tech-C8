module.exports = {
    
    perfil:(req,res)=> {
        res.render('config-perfil')
    },

    carga:(req,res)=>{
        res.render('admin-carga')
    },

    edit:(req,res)=>{
        res.render('admin-edit')
    },

    categorias: (req, res) => {
        res.render('categorias')
    },

    productCart: (req, res) => {
        res.render('productCart')
    },

    productDetail: (req, res) => {
        res.render('productDetail')
    },
    adminLogin: (req, res) => {
        return res.render('adminLogin')
    }

}