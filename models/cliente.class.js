class Cliente {
  id;
  encodedKey;
  nombre;
  primerApellido;
  segundoApellido;
  fechaDeNacimiento;
  fechaDeRegistro;
  estaActivo;
  otrosId;

  constructor(encodedKey, nombre, primerApellido, segundoApellido, fechaDeNacimiento) {
    this.encodedKey = encodedKey;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.nombre = nombre;
    this.fechaDeRegistro = new Date();
  }
}
