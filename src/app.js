const express = require("express")
const app = express()
const path = require('path')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use(express.json())

//ROUTES
const routes = require('./routes/app.routes')
app.use('/', routes)


//STATIC FILES
//redirigimos a rutas no existentes
app.use(express.static(path.join(__dirname, '../public'))) //Ubica la direccion exacta donde se estan ejecutando los archivos estaticos del proyecto
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'))
})

app.listen(8080, ()=> {
    console.log("Servidor a la espera de conexion")
})