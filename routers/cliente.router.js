const express = require('express')
const router = express.Router()
const { clienteMiddleware } = require('../middlewares')
const { clienteController } = require('../controllers')

// router.post('/', (req, res)=>{
//     res.status(201).json({id:1, fechaDeRegistro : new Date()})
// })

router.post('/', clienteMiddleware.validarCliente, clienteController.agregarCliente)

module.exports = router