const db = require('./db'); // Asegúrate de tener la conexión a la base de datos configurada

// Función para agregar un nuevo curso
const agregarCurso = (req, res) => {
    const { codigodelcurso, nombredelcurso } = req.body;

    const query = 'INSERT INTO cursos (codigodelcurso, nombredelcurso) VALUES (?, ?)';
    db.query(query, [codigodelcurso, nombredelcurso], (err, result) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Curso agregado correctamente', cursoId: result.insertId });
    });
};

module.exports = { agregarCurso };
