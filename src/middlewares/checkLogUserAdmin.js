module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.rol === "admin_user") {
        next()
    } else {
        res.redirect('/')
    }
}