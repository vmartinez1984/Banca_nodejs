const { ahorroRepository } = require("../repositories");
const { clabeService } = require("../services");

async function agregarAsync(ahorro) {
  let id = ahorroRepository.agregarAhorroAsync(ahorro);
  let clabe = await clabeService.generarClabeAsync("1")
  console.log(clabe)
  ahorro.otrosId = clabe
  await ahorroRepository.actualizarAsync(ahorro)
  return id;
}

async function obtenerPorIdEncodedkeyAsync(idEncodedKey) {
  return ahorroRepository.obtenerPorIdEncodedkeyAsync(idEncodedKey);
}

module.exports = {
  agregarAsync,
  obtenerPorIdEncodedkeyAsync,
};
