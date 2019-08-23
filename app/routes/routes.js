const router = require('express').Router();
const authController = require('../controllers/authController');
router.post('/register', (req, res) => authController.Register(req, res));
router.post('/authenticate', (req, res) => authController.Authenticate(req, res));
module.exports = router;