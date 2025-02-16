const { MongoClient } = require("mongodb")

//const uri = "mongodb://root:12345@localhost:27017/?authMechanism=DEFAULT"; // Cambia esto si usas Mongo Atlas
const url = process.env.urlMongo;
const client = new MongoClient(url, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

/**
 * Prueba la conexion a mongo
 */
async function verificarConexionAMongoDb() {
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB");
        //return client.db("PuntoDeVenta"); // Cambia el nombre de la base de datos
    } catch (error) {
        console.error("❌ Error de conexión:", error);
        process.exit(1);
    }
}

/**
 * Hace la conexion a mongoDb
 * @returns conexion a mongoDb
 */
async function conectarAMongoDb() {
    try {
        await client.connect();
        //console.log("✅ Conectado a MongoDB");
        return client.db("PuntoDeVenta"); // Cambia el nombre de la base de datos
    } catch (error) {
        console.error("❌ Error de conexión:", error);
        process.exit(1);
    }
}

module.exports = { verificarConexionAMongoDb, conectarAMongoDb }