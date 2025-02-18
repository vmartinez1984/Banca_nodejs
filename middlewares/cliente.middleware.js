const validarCliente = (req, res, next) => {
    console.log(req.body);
    if (req.body.nombre == undefined || req.body.nombre == "") {
        res.status(400).json({
          mensaje: "El nombre es requerido",
        });
      }
      if (req.body.primerApellido == undefined || req.body.primerApellido == "") {
        res.status(400).json({
          mensaje: "Los apellidos son requeridos",
        });
      }
    next()
  }
  
  module.exports = { validarCliente }