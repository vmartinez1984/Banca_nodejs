function esSoloNumeros(cadena) {
  return /^\d+$/.test(cadena);
}

function leftPad(str, length, char = " ") {
  str = String(str); // Convertir a string
  return str.length >= length ? str : char.repeat(length - str.length) + str;
}

module.exports = { esSoloNumeros, leftPad };
