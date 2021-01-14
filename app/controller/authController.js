const passport = require('../utils/auth')


const showLogin = (req, res, next) => {
  const errorMessage = req.flash('error').join('<br>')
  res.render('login.ejs', {
    errorMessage: errorMessage
  });
}

const login = passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/login',
  failureFlash: true,
  badRequestMessage: 'Login Faield'
})

const logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

module.exports = {
  showLogin,
  login,
  logout
}