const { clienteBusiness } = require("../business");

const agregarCliente = async (req, res) => {
  console.log(req.body);
  let cliente = await clienteBusiness.obtenerClientePorEncodedKey(req.body);  
  if (cliente == undefined) {
    let idDto = await clienteBusiness.agregarClienteAsync(req.body);
    res.status(201).json(idDto);
  } else {
    res.status(200).json({
      id: cliente.id,
      encodedKey: cliente.encodedKey,
      fechaDeRegistro: cliente.fechaDeRegistro,
    });
  }
};

const obtenerClientePorIdEncodedKeyAsync = async (req, res) => {
  let idEncodedKey = req.params.id;
  let cliente = await clienteBusiness.obtenerClientePorIdEncodedKeyAsync(idEncodedKey);
  if (cliente == undefined) {
    res.status(404).json({ mensaje: "No se encontro cliente" });
  } else {
    res.status(200).json(cliente);
  }
};
module.exports = { agregarCliente, obtenerClientePorIdEncodedKeyAsync };
