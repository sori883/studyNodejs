const authMiddleware = (req, res, next) => {
  if(req.isAuthenticated()) {
    // loginしている場合は想定のページに遷移
    next();
  } else {
    // ログインしていない場合はログインページにリダイレクト
    res.redirect(302, '/login');
  }
};

module.exports = authMiddleware;