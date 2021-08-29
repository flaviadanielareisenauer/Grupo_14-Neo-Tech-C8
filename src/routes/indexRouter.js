let express = require('express')

let router = express.Router()

let indexController =require ('../controllers/indexController')

router.get('/', indexController.index)

router.get('/formas-de-pago', indexController.pago)

module.exports= router;