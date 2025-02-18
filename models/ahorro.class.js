class Ahorro {
  nombre;
  total;
  interes;
  fechaDeRegistro;
  clienteEncodedKey;
  id;
  encodedKey;

  constructor(encodedKey, nombre, clienteEncodedKey) {
    this.encodedKey = encodedKey;
    this.clienteEncodedKey = clienteEncodedKey;
    this.nombre = nombre;
    this.total = 0;
    this.interes = 0;
    this.fechaDeRegistro = new Date();
  }
}

module.exports = Ahorro;
