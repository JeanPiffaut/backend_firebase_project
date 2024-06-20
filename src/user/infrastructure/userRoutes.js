const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

router.post('/', UserController.createUser);

module.exports = router;
