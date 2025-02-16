class Cliente{
    id
    encodedKey
    nombre
    apellidos
    fechaDeRegistro
    estaActivo
    otrosId

    constructor(
        encodedKey,
        nombre,
        apellidos
    ){
        this.encodedKey = encodedKey
        this.apellidos = apellidos
        this.nombre = nombre
        this.fechaDeRegistro = new Date()
    }
}