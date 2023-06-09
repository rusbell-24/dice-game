const express = require('express')
const router = express.Router()
const controller = require('../controllers/app.controllers')


router.get('/', controller.startapp)

// router.post('/createGame', (req, res) => {
//     console.log('Post exitoso')
// })

module.exports = router