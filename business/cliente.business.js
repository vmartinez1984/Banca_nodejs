const { satService } = require("../services");
const { clienteRepository } = require("../repositories");

const agregarClienteAsync = async (cliente) => {
  console.log("Agregar cliente business", cliente);
  let rfcDto = await satService.generarRfc(
    cliente.nombre,
    cliente.primerApellido,
    cliente.segundoApellido,
    cliente.fechaDeNacimiento
  );
  //console.log("clienteBusiness rfc", rfcDto);

  cliente.encodedKey = rfcDto.rfc;
  cliente.fechaDeRegistro = new Date()
  let id = await clienteRepository.agregarClienteAsync(cliente);

  return {
    id,
    encodedKey: rfcDto.rfc,
    fechaDeRagistro: new Date(),
  };
};

/**
 * Verifica mediante el rfc
 * @param {nombre, primerApellido, segundoApellido, fechaDeNacimiento} cliente
 * @returns
 */
const obtenerClientePorEncodedKey = async (cliente) => {
  let rfcDto = await satService.generarRfc(
    cliente.nombre,
    cliente.primerApellido,
    cliente.segundoApellido,
    cliente.fechaDeNacimiento
  );
  let clienteOriginal = clienteRepository.obtenerClientePorIdEncodedKeyAsync(
    rfcDto.rfc
  );

  return clienteOriginal;
};

const obtenerClientePorIdEncodedKeyAsync = async (idEncodedKey) => {
  let clienteOriginal =
    clienteRepository.obtenerClientePorIdEncodedKeyAsync(idEncodedKey);

  return clienteOriginal;
};

module.exports = {
  agregarClienteAsync,
  obtenerClientePorEncodedKey,
  obtenerClientePorIdEncodedKeyAsync,
};
