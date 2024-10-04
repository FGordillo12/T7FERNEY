fetch("http://localhost:8888/.netlify/functions/cursos", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        codigodelcurso: document.getElementById('codigodelcurso').value,
        nombredelcurso: document.getElementById('nombredelcurso').value
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
