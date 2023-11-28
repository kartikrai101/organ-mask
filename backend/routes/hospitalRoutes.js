const express = require('express');
const router = express.Router();
const {loginController} = require('../controllers/hospitalControllers')

router.route('/login').post(loginController);

module.exports = router;