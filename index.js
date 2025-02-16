//Librerias
require('express-async-errors');
const express = require("express")
require('dotenv').config()
const morgan = require('morgan')

//Servicios
const { clienteRouter } = require('./routers')
const { mongoDbConfig } = require('./config')
//Configuraciones y constantes
const port = process.env.port

//Inicio de app
const app = express();
mongoDbConfig.verificarConexionAMongoDb();
app.use(morgan("tiny"));

//Middlewares
app.use(express.json()); // Para procesar JSON

app.get("/", (req, res) => {
    res.status(200).json({ mensaje: "Hola mundo" })
})

app.use('/api/clientes', clienteRouter)

app.use(require('./middlewares/error.middleware').cacharError)

app.listen(port, () => {
    console.log("http://localhost:" + port)
})