const { mongoDbConfig } = require("../config");
const coleccion = "Clientes";

async function agregarClienteAsync(cliente) {
  console.log("clienteRepositorio", cliente);
  cliente.id = await obtenerIdAsync();
  const db = await mongoDbConfig.conectarAMongoDb();
  let respuesta = await db.collection(coleccion).insertOne(cliente);
  console.log(respuesta);

  return cliente.id;
}

async function obtenerIdAsync() {
  const db = await mongoDbConfig.conectarAMongoDb();
  let id = (await db.collection(coleccion).countDocuments()) + 1;

  return id;
}

/**
 * busqueda por id o encodedkey
 * @param {string} clienteIdEncodedKey 
 * @returns cliente
 */
async function obtenerClientePorIdEncodedKeyAsync(clienteIdEncodedKey) {
  let cliente;
  console.log("idEncodedKey", clienteIdEncodedKey);
  const db = await mongoDbConfig.conectarAMongoDb();
  if (esSoloNumeros(clienteIdEncodedKey)) {
    cliente = await db
      .collection(coleccion)
      .findOne({ id: Number(clienteIdEncodedKey) });
  } else {
    cliente = await db
      .collection(coleccion)
      .findOne({ encodedKey: clienteIdEncodedKey });
  }

  return cliente;
}

function esSoloNumeros(cadena) {
  return /^\d+$/.test(cadena);
}

module.exports = {
  agregarClienteAsync,
  obtenerClientePorIdEncodedKeyAsync,
};
