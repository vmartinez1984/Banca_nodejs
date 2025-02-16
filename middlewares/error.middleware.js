const cacharError = (error, req, res, next) => {
    console.error('🔥 Error detectado:', error); // Más descriptivo para identificar el error

    // Si el error tiene un código de estado, lo usamos; de lo contrario, 500
    const statusCode = error.status || 500;

    res.status(statusCode).json({
        mensaje: "Ocurrió un error, no se agüite e inténtelo más tarde",
        error: process.env.env === 'development' ? error.message : undefined // Muestra detalles solo en desarrollo
    });
};

module.exports = { cacharError }