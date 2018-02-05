const express = require('express');
const HomeController = require('../controllers/home');

const router = express.Router();

router.get('/', HomeController.index);

module.exports = router;
