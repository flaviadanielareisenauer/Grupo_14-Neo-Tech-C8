let express = require('express')

let router = express.Router()



let { detail, productsList } = require('../controllers/productsController');




router.get('/:id', detail)

module.exports = router;