const controller = {}
const connection = require('../dbconnection/connection')
const gameModel = require('../models/game.model')

controller.startApp = async (req, res)=>{
    try{
        const title = 'INDEX DESDE EL SERVIDOR'
        await connection()
        console.log('CONNECTION OK')
        res.render('app', {title})
    }catch(err){
        console.log(err)
    }
    
}

controller.startGame = (req, res) => {
    const game = gameModel(req.body);
    game
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
 }


module.exports = controller