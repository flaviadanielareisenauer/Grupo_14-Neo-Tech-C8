let express = require('express')

let router = express.Router()

let { perfil, carga, edit, adminLogin } = require('../controllers/adminController')

router.get('/config-perfil', perfil)

router.get('/admin-carga', carga)

router.get('/admin-edit', edit);

router.get('/adminLogin', adminLogin);


module.exports = router;