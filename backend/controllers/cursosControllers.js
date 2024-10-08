const db= require("../bd/conexion.js");


class CursosControllers{
    constructor(){

    }

    consultar(req, res) {
        try {
            db.query('SELECT * FROM cursos', [], (err, rows) => {
                if (err) {
                    res.status(400).send(err.message);
                } else {
                    res.status(200).json(rows); // Devuelve la lista de cursos
                }
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    
    

    actualizar(req, res) {
        const { codigodelcurso } = req.params;  // Get dni from URL
        try {
            const { codigo } = req.body;  // Get new name from request body
            db.query(
                'UPDATE sistema_asistencia.cursos SET codigodelcurso=? WHERE nombredelcurso=?',
                [codigo, codigodelcurso],  // Update the name where dni matches
                (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);z
                        return;
                    }
                    if (rows.affectedRows == 1) {
                        res.status(200).json({ respuesta: "Registro actualizado correctamente" });
                    } else {
                        res.status(404).json({ respuesta: "Curso no encontrado" });
                    }
                }
            );
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    
    

    ingresar(req, res) {
        try {
            const { codigodelcurso, nombredelcurso } = req.body;
    
            db.query('INSERT INTO cursos (codigodelcurso, nombredelcurso) VALUES (?, ?);',
                [codigodelcurso, nombredelcurso], (err, rows) => {
                    if (err) {
                        res.status(400).send(err.message);
                    } else {
                        res.status(201).json({ id: rows.insertId });
                    }
                }
            );
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    

    consultarDetalle(req,res){
        const {id} = req.params;
        try{

            db.query('SELECT  * FROM cursos WHERE id=?',
            [id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows[0]);
            });
        }catch (err){
            res.status(500).send(err.message);
        }

    }

    borrar(req,res){
        const {codigodelcurso} = req.params;
        try{
            req.body;
            db.query('DELETE FROM sistema_asistencia.cursos WHERE codigodelcurso=?;',
            [codigodelcurso],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:"Registro borrado correctamente"});
            });
        }catch (err){
            res.status(500).send(err.message);
        }
   }
}

module.exports = new CursosControllers();
