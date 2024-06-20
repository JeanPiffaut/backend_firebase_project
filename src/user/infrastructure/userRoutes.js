const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);

module.exports = router;
