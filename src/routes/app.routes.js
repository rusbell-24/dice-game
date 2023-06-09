const express = require('express')
const router = express.Router()
const controller = require('../controllers/app.controllers')


router.get('/', controller.startApp)

//Crear juego
router.post('/createGame', controller.startGame)

module.exports = router