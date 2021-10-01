module.exports = function (req, res, next) {
    if(req.cookies.userNeoTech){
        req.session.user = req.cookies.userNeoTech
        res.locals.user = req.session.user
    }
    next()
}