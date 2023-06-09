const controller = {}
const connection = require('../dbconnection/connection')


controller.startapp = async (req, res)=>{
    try{
        const title = 'INDEX DESDE EL SERVIDOR'
        await connection()
        console.log('CONNECTION OK')
        res.render('app', {title})
    }catch(err){
        console.log(err)
    }
    
}


module.exports = controller