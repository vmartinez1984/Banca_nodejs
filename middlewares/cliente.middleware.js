const validarCliente = (req, res, next) => {
    console.log(req.body);
    if (req.body.nombre == undefined || req.body.nombre == "") {
        res.status(400).json({
          mensaje: "El nombre es requerido",
        });
      }
      if (req.body.apellidos == undefined || req.body.apellidos == "") {
        res.status(400).json({
          mensaje: "Los apellidos son requeridos",
        });
      }
    next()
  }
  
  module.exports = { validarCliente }