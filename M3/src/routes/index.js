const express = require('express');
const router = express.Router();
const characters = require('./characters');

router.use('/rickandmorty', characters)//middleware para modularizar

module.exports = router