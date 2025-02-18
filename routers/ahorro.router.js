const express = require("express");
const router = express.Router();
const { ahorroController } = require("../controllers");

router.post("/", ahorroController.agregarAsync);

module.exports = router;