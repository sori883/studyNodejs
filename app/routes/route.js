const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController')
const authController = require('../controller/authController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/', indexController.index);
router.get('/user', authMiddleware, indexController.user);

router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;