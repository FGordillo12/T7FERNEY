const express = require('express');
const cors = require("cors");
const cursosRoutes = require('../routes/cursosRouters'); // Ajusta la ruta según sea necesario

const app = express();
app.use(cors());
app.use(express.json());

app.use("/cursos", cursosRoutes);

module.exports = app; // Exporta la aplicación para usarla en Netlify
