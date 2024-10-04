const express = require("express");
const router = express.Router();
const cursosControllers = require("../controllers/cursosControllers.js");

router.get("/",cursosControllers.consultar);
router.post("/",cursosControllers.ingresar);

router.route("/:codigodelcurso")
.get(cursosControllers.consultarDetalle)
.put(cursosControllers.actualizar)
.delete(cursosControllers.borrar);

module.exports = router;