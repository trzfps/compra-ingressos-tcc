const router = require('express').Router();
const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/authController');
const UserController = require('../controllers/userController');
router.post('/register', (req, res) => authController.Register(req, res));
router.post('/authenticate', (req, res) => authController.Authenticate(req, res));
router.post('/user/buy', authMiddleware, (req, res) => UserController.get(req, res));
module.exports = router;