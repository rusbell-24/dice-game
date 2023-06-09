const express = require("express")
const app = express()


app.use(express.json())
//ROUTES
const routes = require('./routes/app.routes')
app.use('/', routes)

app.listen(8080, ()=> {
    console.log("Servidor a la espera de conexion")
})