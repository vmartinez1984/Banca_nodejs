const { ahorroBusiness } = require("../business");
const IdDto = require("../models/idDto.model");
const { v4: uuidv4 } = require("uuid");
const Ahorro = require("../models/ahorro.class");

const agregarAsync = async (req, res) => {
  let ahorro = await ahorroBusiness.obtenerPorIdEncodedkeyAsync(
    req.body.encodedKey
  );
  if (ahorro == undefined) {
    let id = await ahorroBusiness.agregarAsync(
      new Ahorro(
        req.body.encodedKey,
        req.body.nombre,
        req.body.clienteEncodedKey
      )
    );
    req.body.encodedKey = req.body.encodedKey ? uuidv4() : req.body.encodedKey;
    res.status(201).json(new IdDto(id, req.body.encodedKey));
  } else {
    res.status(200).json(new IdDto(
      ahorro.id,
      ahorro.encodedKey,
      ahorro.fechaDeRegistro,
    ));
  }
};

module.exports = { agregarAsync };
