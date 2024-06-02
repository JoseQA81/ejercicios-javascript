let listAlumnos = ["José Andrés ", " María Jesús ", " Álex ", " Reyes ", " Alicia ", " Rebeca ", " Rocío ", " Camila ", " Samanta ", " Sandra"];

/*EJERCICIO 1: Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos.*/
function mostrarListado() {
mensaje = "La lista de alumnos es: " + listAlumnos;
imprimir(mensaje,"ejer1listadoalumnos");
}

/*EJERCICIO 2: Muestra el nombre del alumno de la posición que elijas. Para ello:
Agrega un campo para elegir el alumno que quieren mostrar, no puede estar vacio y debe ser entre 1 y 10.
Agrega un boton mostrar alumno, que muestre el nombre del alumno elegido.*/
function alumnoElegido() {
    let posicion = parseInt(document.getElementById("ejer2posicion").value);
    let alumnoSeleccionado = listAlumnos[posicion -1];
    let mensaje = "El alumno seleccionado es: " + alumnoSeleccionado;
    imprimir(mensaje,"ejer2resultado");
}

/*EJERCICIO 3: Agrega un botón mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre.*/
function mostrarAlumnosOrdenados() {
    listAlumnos.sort();
    mostrarListado();
}

/*EJERCICIO 4: Agrega una nueva opcion para agregar un nuevo alumno. Para ello:
Agrega un campo para introducir el nombre del alumno. No puede estar vacio y debe tener maximo 30 caracteres.
Agrega un boton agregar, que al pulsarlo agrege al nuevo alumno a la lista y muestre la lista de alumnos actualizada.*/
function nuevoAlumno() {
    let nuevoNombre = document.getElementById("ejer4elementoagregar").value;
    listAlumnos.push(nuevoNombre);
    mostrarListado();
}
