const express = require('express');
const router = express.Router();
const sesionesControllers = require('./sesionesControllers');

// Definir rutas para manejar las sesiones
router.post('/sesiones', sesionesControllers.guardarSesion); // Ruta para guardar sesión
router.get('/sesiones', sesionesControllers.listarSesiones); // Ruta para listar sesiones

module.exports = router;
