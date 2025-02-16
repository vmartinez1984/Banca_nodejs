class Ahorro {
    nombre
    total
    interes
    fechaDeRegistro
    clienteId
    clienteEncodedKey
    id
    encodedKey

    constructor(
        nombre,
        total,
        interes,
        clienteId,
        clienteEncodedKey
    ) {
        this.clienteEncodedKey = clienteEncodedKey
        this.nombre = nombre
        this.total = total
        this.interes = interes
        this.fechaDeRegistro = new Date()
        this.clienteId = clienteId
        this.clienteEncodedKey = clienteEncodedKey
    }
}