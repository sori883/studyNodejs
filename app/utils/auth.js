const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User

passport.use(new LocalStrategy(
  function  (username, password, done) {
    User.findOne({where: { username: username }})
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        // ログイン成功
        return done(null, user);
      }
      throw new Error();
    })
    .catch(error => {
       // エラー処理
      return done(null, false, { message: '一致するレコードが存在していません' });
    });
}));

// Session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;