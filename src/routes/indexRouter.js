const express = require("express");
const router = express.Router();

const {
    index,
    pago,
    search,
    allProducts,
    allProductsCategory
} = require("../controllers/indexController");

const coockieCheck = require("../middlewares/cookieCheck");

router.get("/", coockieCheck, index);

router.get("/formas-de-pago", pago);

router.get("/search", search);

router.get("/allProducts", allProducts);
router.get('/allProducts/:id', allProductsCategory)


module.exports = router;