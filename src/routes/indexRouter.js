let express = require('express')

let router = express.Router()

let { index, pago, search } = require('../controllers/indexController')

router.get('/', index)

router.get('/formas-de-pago', pago)

router.get('/search', search)
module.exports = router;