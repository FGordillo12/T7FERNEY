const express = require("express");
const router = express.Router();
const cursosControllers = require("../controllers/cursosControllers.js");

router.get("/", cursosControllers.consultar); // Listar cursos
router.post("/", cursosControllers.ingresar); // Agregar curso

router.route("/:codigodelcurso")
    .get(cursosControllers.consultarDetalle) // Obtener detalles del curso
    .put(cursosControllers.actualizar) // Actualizar curso
    .delete(cursosControllers.borrar); // Eliminar curso

module.exports = router;
