const express = require('express');
const path = require('path');
const rootdir = require('../../helpers/rootdir');
const inputValidator = require(path.join(rootdir, 'middlewares', 'input-validator'));

const authController = require('./controller');

const router = express.Router();

router.post('/auth/register', inputValidator.validate('register'), authController.postRegister);

router.post('/auth/login', inputValidator.validate('login'), authController.postLogin);

module.exports = router;