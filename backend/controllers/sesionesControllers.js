// Asumiendo que tienes una conexión a la base de datos
const db = require('./database'); // Asegúrate de tener configurada la conexión a MySQL

const sesionesControllers = {
  guardarSesion: (req, res) => {
    const { codigodelcurso, fecha, horadeinicio, horafinal } = req.body;

    const query = "INSERT INTO sesiones (codigodelcurso, fecha, horadeinicio, horafinal) VALUES (?, ?, ?, ?)";
    db.query(query, [codigodelcurso, fecha, horadeinicio, horafinal], (err, result) => {
      if (err) {
        console.error("Error al insertar sesión:", err);
        return res.status(500).json({ error: "Error al insertar la sesión" });
      }
      res.status(201).json({ mensaje: "Sesión guardada exitosamente", id: result.insertId });
    });
  },

  listarSesiones: (req, res) => {
    const query = "SELECT * FROM sesiones";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Error al listar sesiones:", err);
        return res.status(500).json({ error: "Error al listar las sesiones" });
      }
      res.status(200).json(result);
    });
  }
};

module.exports = sesionesControllers;