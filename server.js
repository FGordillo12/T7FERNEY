const express = require('express');
const cors = require("cors");
const estudiantesroutes = require("./backend/routes/estudiantesroutes.js");
const cursosRoutes = require("./backend/routes/cursosRouters.js"); // Asegúrate de tener esta ruta

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.use("/estudiantes", estudiantesroutes);
app.use("/cursos", cursosRoutes); // Agrega esta línea para manejar cursos

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});

module.exports = app; // Exporta la aplicación para Netlify
