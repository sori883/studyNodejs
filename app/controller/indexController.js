const User = require('../models').User

const index = (req, res, next) => {
  User.findOne({ where: { id: 1 } })
  .then(user => {
    res.render('index.ejs', {title: user.password});
  });
}

const user = (req, res, next) => {
  res.render('user.ejs', {title: 'ログインした'});
}


module.exports = {
  index,
  user
}
