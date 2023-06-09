const mongoose = require('mongoose')

const password = 'rLvSO9D8MDXGw69O'
const dbname = 'dice-game'
const uri = `mongodb+srv://rusbellruizp:${password}@cluster0.arurjb4.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = () => mongoose.connect(uri)