const express = require("express");

const router = express.Router();

const {
    perfil,
    edit,
    adminLogin,
    agregarProducto,
    eliminarProducto,
    update,
    productsList,
    crear,
    productListAdCategory,
    searchAd,
    addCategory
} = require("../controllers/adminController");
const upLoadFile = require("../middlewares/cargaImagen");
const checkLogAdmin = require("../middlewares/checkLogUserAdmin");
let productValidator = require('../validations/productCargaValidator')
let productEditValidator = require('../validations/productEditValidator')

//Muestra la lista de productos desde el admin
router.get("/products", checkLogAdmin, productsList);


//configuración del admin y login
router.get("/config-perfil", checkLogAdmin, perfil);
router.get("/adminLogin", checkLogAdmin, adminLogin);

//crea un nuevo producto
router.get("/products/create", checkLogAdmin, agregarProducto);

router.post("/products/create", upLoadFile.array("image"), productValidator, crear);

//edita un producto existente
router.get("/products/:id/edit", checkLogAdmin, edit);

router.put("/products/:id", upLoadFile.array("image"), productEditValidator, update);

//elimina el producto seleccionado
router.delete("/products/delete/:id", eliminarProducto);

router.get("/products/:id", checkLogAdmin, productListAdCategory);
router.get("/search", checkLogAdmin, searchAd)

router.post("/addCategory", checkLogAdmin, addCategory)


module.exports = router;