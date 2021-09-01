let express = require('express')

let router = express.Router()

let { perfil, adminLogin } = require('../controllers/adminController')

router.get('/config-perfil', perfil)

router.get('/adminLogin', adminLogin);


module.exports = router;