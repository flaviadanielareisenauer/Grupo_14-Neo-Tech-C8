module.exports = (req, res, next) => {
  if (req.session.user && req.session.user.rol === 0) {
    next();
  } else {
    res.redirect("/");
  }
};