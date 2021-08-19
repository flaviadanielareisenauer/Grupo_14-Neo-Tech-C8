const controller ={
    index:(req,res) => {
       return res.render('index')
    },
    
admin: (req,res) => {
    return res.render ('admin')
},

categorias: (req,res) => {
    return res.render ('categorias')
},

perfil: (req,res) => {
    return res.render ('config-perfil')

},

pago: (req,res) => {
    return res.render ('formas-de-pago')
},

productCart: (req,res) => {
    return res.render ('ProductCart')
},

productDetail: (req,res) => {
    return res.render ('productDetail')
},

register: (req,res) => {
    return res.render ('register')
}

}

module.exports=controller;