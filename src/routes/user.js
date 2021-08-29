let express =require('express');

let router = express.Router();

let controller= require('../controllers/userController')

router.get('/register', controller.register)

router.get('/config-perfil', controller.perfil)

module.exports=router;