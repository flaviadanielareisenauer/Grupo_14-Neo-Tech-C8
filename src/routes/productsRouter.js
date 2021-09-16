const express = require('express');
const router = express.Router();

const { detail } = require('../controllers/productsController');
//detalle del producto
router.get('/detail/:id', detail)

module.exports = router;