const express = require("express");
const router = express.Router();

const {
    register,
    processRegister,
    profile,
    updateProfile,
    categorias,
    productCart,
    profileLogin,
    logout,
    profileEdit,
    profileDelete,
    imgDeleteProfile, contact
} = require("../controllers/userController");

const checkUserLogin = require('../middlewares/checkUserlogin');
const validationLogin = require("../validations/validationLogin");
const checkLog = require("../middlewares/checklLogUser");
const registerValidator = require("../validations/registerValidator");
const userAvatars = require("../middlewares/userAvatars");
const profileUserValidator = require('../validations/profileUserValidator');

/* GET - REGISTER */
router.get("/register", checkUserLogin, register);

router.post(
    "/register",
    userAvatars.single("avatar"),
    registerValidator,
    processRegister
);

/* GET - LOGIN */
router.get("/login", checkUserLogin, validationLogin, profileLogin);
router.post("/login", validationLogin, profileLogin);
router.get("/logout", checkLog, logout);

/* GET - USER PROFILE */
router.get("/profile/:id", checkLog, profile);
router.get("/profile-edit/:id", checkLog, profileUserValidator, profileEdit);
router.put("/profile-edit/:id", userAvatars.single("avatar"), profileUserValidator, updateProfile);

router.get("/categorias", categorias);
router.get("/productCart", productCart);

router.post("/profileDelete/:id", checkLog, profileDelete)
router.post("/profile/imgDeleteProfile/:id", checkLog, imgDeleteProfile)

router.get("/contact", contact)
module.exports = router;