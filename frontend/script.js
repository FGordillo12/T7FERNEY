function guardar(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let rawEstudiantes = JSON.stringify({
    "dni": document.getElementById("dni").value,
    "nombre": document.getElementById("nombre").value,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: rawEstudiantes,
    redirect: "follow"
  };

  fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

function cargar(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){

    //RESETEAR ELEMENTO
    elemento = "";

      elemento = elemento + "<br>Documento de identidad: " + transformado[vc].numerodedocumentodelestudiante;
      elemento = elemento + "<br>Nombres: " + transformado[vc].nombrescompletosdelestudiante;
      salida += elemento + "<br><br>";
  }
  document.getElementById("rta").innerHTML = salida;
}

function listar(){
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/estudiantes", requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargar(result))
    .catch((error) =>
      console.error(error));

}

function respuesta_actualizar(resultado){
  document.getElementById("rta").innerHTML = resultado;
}

function actualizar(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({  
    "nombre": document.getElementById("nombre").value,
  });

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  let dni = document.getElementById("dni").value;
  fetch(`http://localhost:8888/.netlify/functions/estudiantes/${dni}`, requestOptions)
    .then((response) =>
          response.text())
    .then((result) =>
          respuesta_actualizar(result))
    .catch((error) =>
          console.error(error));
}

function cargarLE(resultado){
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";
  elemento = "ID: " + transformado.id;
  elemento = elemento + "<br>Documento de identidad: " + transformado.dni;
  elemento = elemento + "<br>Nombres: " + transformado.nombre;
  salida = salida  + elemento + "<br><br>";
  document.getElementById("rtaLE").innerHTML = salida;
}

function listar_estudiante(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  let elid = document.getElementById("idLE").value;
  fetch("http://localhost:8888/.netlify/functions/estudiantes"+elid, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarLE(result))
    .catch((error) =>
      console.error(error));
}

function cargarEE(resultado){
  let transformado = JSON.parse(resultado);
  document.getElementById("rta").innerHTML = transformado.respuesta;
}

function eliminar_estudiante(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };
  let dni = document.getElementById("dni").value;
  fetch(`http://localhost:8888/.netlify/functions/estudiantes/${dni}`, requestOptions)
    .then((response) =>
      response.text())
    .then((result) =>
      cargarEE(result))
    .catch((error) =>
      console.error(error));
}


//---------------------------------------------------------------------------------------------------------------
function guardarCurso() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let rawCurso = JSON.stringify({
      "codigodelcurso": document.getElementById("codigodelcurso").value,
      "nombredelcurso": document.getElementById("nombredelcurso").value,
  });

  let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: rawCurso,
      redirect: "follow"
  };

  fetch("http://localhost:8888/.netlify/functions/cursos", requestOptions) // Cambia el puerto si es necesario
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

function cargarCursos(resultado) {
  let transformado = JSON.parse(resultado);
  var salida = "";
  var elemento = "";

  for (let vc in transformado) {
      //RESETEAR ELEMENTO
      elemento = "";

      elemento = elemento + "<br>Código del curso: " + transformado[vc].codigodelcurso;
      elemento = elemento + "<br>Nombre del curso: " + transformado[vc].nombredelcurso;
      salida += elemento + "<br><br>";
  }
  document.getElementById("rta").innerHTML = salida;
}

function listarCursos() {
  const requestOptions = {
      method: "GET",
      redirect: "follow"
  };
  fetch("http://localhost:8888/.netlify/functions/cursos", requestOptions) // Ajusta la URL aquí
      .then((response) => response.text())
      .then((result) => cargar(result))
      .catch((error) => console.error(error));
}




function respuestaActualizarCurso(resultado) {
  document.getElementById("rta").innerHTML = resultado;
}

function actualizarCurso() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  let raw = JSON.stringify({
      "nombredelcurso": document.getElementById("nombredelcurso").value, // Asegúrate de usar el nombre correcto
  });

  let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
  };
  let codigodelcurso = document.getElementById("codigodelcurso").value; // ID del curso
  fetch(`http://localhost:6500/cursos/${codigodelcurso}`, requestOptions) // Cambia el puerto si es necesario
      .then((response) => response.text())
      .then((result) => respuestaActualizarCurso(result))
      .catch((error) => console.error(error));
}

function cargarCursoDetalle(resultado) {
  let transformado = JSON.parse(resultado);
  var salida = "";
  var elemento = "";
  elemento = "Código: " + transformado.codigodelcurso;
  elemento += "<br>Nombre: " + transformado.nombredelcurso;
  salida += elemento + "<br><br>";
  document.getElementById("rtaLE").innerHTML = salida;
}

function listarCurso() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
  };
  let codigodelcurso = document.getElementById("codigodelcursoLE").value; // ID del curso
  fetch(`http://localhost:6500/cursos/${codigodelcurso}`, requestOptions) // Cambia el puerto si es necesario
      .then((response) => response.text())
      .then((result) => cargarCursoDetalle(result))
      .catch((error) => console.error(error));
}

function cargarRespuestaEliminar(resultado) {
  let transformado = JSON.parse(resultado);
  document.getElementById("rta").innerHTML = transformado.respuesta;
}

function eliminarCurso() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
  };
  let codigodelcurso = document.getElementById("codigodelcurso").value; // ID del curso
  fetch(`http://localhost:6500/cursos/${codigodelcurso}`, requestOptions) // Cambia el puerto si es necesario
      .then((response) => response.text())
      .then((result) => cargarRespuestaEliminar(result))
      .catch((error) => console.error(error));
}

