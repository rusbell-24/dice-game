const mongoose = require('mongoose')
const {Schema} = mongoose

//Definimos las normas para el modelo de datos
const GameSchema = new Schema({
    type:{
        type: String,
        require: true
    },
    gamers: {
        type: [],
        require: true
    }
})

// Creamos el modelo para finalmente exportarlo
const GameModel = mongoose.model('games', GameSchema)

module.exports = GameModel