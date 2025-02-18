const { mongoDbConfig } = require("../config");
const coleccion = "Ahorros";
const { esSoloNumeros } = require("../helpers/helper");

async function agregarAhorroAsync(ahorro) {
  ahorro.id = await obtenerIdAsync();
  const db = await mongoDbConfig.conectarAMongoDb();
  let respuesta = await db.collection(coleccion).insertOne(ahorro);
  console.log(respuesta);

  return ahorro.id;
}

async function depositar(encodedKey, ahorroId, cantidad, concepto) {}

async function depositar(encodedKey, ahorroId, cantidad, concepto) {}

async function obtenerIdAsync() {
  const db = await mongoDbConfig.conectarAMongoDb();
  let id = (await db.collection(coleccion).countDocuments()) + 1;

  return id;
}

async function obtenerPorIdEncodedkeyAsync(IdEncodedKey) {
  let ahorro;
  //console.log("idEncodedKey", IdEncodedKey);
  const db = await mongoDbConfig.conectarAMongoDb();
  if (esSoloNumeros(IdEncodedKey)) {
    ahorro = await db
      .collection(coleccion)
      .findOne({ id: Number(IdEncodedKey) });
  } else {
    ahorro = await db
      .collection(coleccion)
      .findOne({ encodedKey: IdEncodedKey });
  }

  return ahorro;
}

async function obtenerMovimientoPorIdEncodedKeyAsync(IdEncodedKey) {
  let ahorro;
  console.log("idEncodedKey", IdEncodedKey);
  const db = await mongoDbConfig.conectarAMongoDb();
  if (esSoloNumeros(IdEncodedKey)) {
    ahorro = await db
      .collection(coleccion)
      .findOne({ id: Number(IdEncodedKey) });
  } else {
    ahorro = await db
      .collection(coleccion)
      .findOne({ encodedKey: IdEncodedKey });
  }

  //return ahorro.movimientos.find(x=> x.IdEncodedKey || x.id == encodedKey);
}

async function actualizarAsync(ahorro) {
  const db = await mongoDbConfig.conectarAMongoDb();
  const resultado = await db
    .collection(coleccion)
    .updateOne({ id: ahorro.id }, { $set: ahorro });
  console.log(resultado);
}
module.exports = {
  agregarAhorroAsync,
  obtenerPorIdEncodedkeyAsync,
  actualizarAsync,
};
