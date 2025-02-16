const { clienteRepository } = require('../repositories')
//const { v4: guid } = require("uuid");

const agregarCliente = async (req, res) => {
    let id = await clienteRepository.agregarClienteAsync(req.body)
    let encodedKey = guid();
    res.status(200).json({ id: id, encodedKey: encodedKey })
}

module.exports = { agregarCliente }