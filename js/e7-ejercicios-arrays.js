let listAlumnos = ["José Andrés", "María Jesús", "Álex", "Reyes", "Alicia", "Rebeca", "Rocío", "Camila", "Samanta", "Sandra"];

/*EJERCICIO 1: Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos.*/
function mostrarListado() {
    mensaje = "La lista de alumnos es: " + listAlumnos;
    imprimir(mensaje, "ejer1listadoalumnos");
}

/*EJERCICIO 2: Muestra el nombre del alumno de la posición que elijas. Para ello:
Agrega un campo para elegir el alumno que quieren mostrar, no puede estar vacio y debe ser entre 1 y 10.
Agrega un boton mostrar alumno, que muestre el nombre del alumno elegido.*/
function alumnoElegido() {
    let posicion = parseInt(document.getElementById("ejer2posicion").value);
    let alumnoSeleccionado = listAlumnos[posicion - 1];
    let mensaje = "El alumno seleccionado es: " + alumnoSeleccionado;
    imprimir(mensaje, "ejer2resultado");
}

/*EJERCICIO 3: Agrega un botón mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre.*/
function mostrarAlumnosOrdenados() {
    listAlumnos.sort();
    mostrarListado();
}

/*EJERCICIO 4: Agrega una nueva opcion para agregar un nuevo alumno. Para ello:
Agrega un campo para introducir el nombre del alumno. No puede estar vacío y debe tener máximo 30 carácteres.
Agrega un boton agregar, que al pulsarlo agrege al nuevo alumno a la lista y muestre la lista de alumnos actualizada.*/
function nuevoAlumno() {
    let nuevoNombre = document.getElementById("ejer4elementoagregar").value;
    listAlumnos.push(nuevoNombre);
    mostrarListado();
}

/*EJERCICIO 5: Agrega una opción para eliminar un alumno de una posición elegida.
Agrega un campo para introducir la posición del alumno a eliminar. Debe ser un número entre 1 y 500.
Agrega un boton eliminar, que al pulsarlo, elimine el alumno de la posición introducida y muestre la lista de alumnos actualizada. 
Agrega una comprobación para mostrar un mensaje de error si la posición introducida es mayor a la longitud total de la lista*/
function elegirEliminarPosicion() {
    let posicion = parseInt(document.getElementById("e5posicionelegida").value);
    let listado = posicion - 1;
    let mensaje = "";
    mostrarListado();

    if (posicion < 1 || posicion > listAlumnos.length) {
        mensaje = "Error, la posición introducida es mayor a la longitud total de la lista";
    }
    else {
        listAlumnos.splice(posicion, 1);
        mensaje = "Alumno eliminado, la lista actualizada es: " + listAlumnos.join(", "); //El método join se usa para convertir todos los elementos de un array en una sola cadena de texto.
    }
    imprimir(mensaje, "ejer5resultadoeliminar");
}//No me elimina en la posición que debiera y no me muestra el listado con "mostrarListado();"

/*EJERCICIO 6: Agrega una opción para buscar un alumno. Para ello:
Agrega un campo para introducir el nombre del alumno a buscar.
Agrega un botón buscar, que al pulsarlo muestre un mensaje con todos los alumnos que contengan el nombre introducido, 
sin distinguir entre mayúsculas y minúsculas.*/

function buscarAlumnos() {
    let nombreAlumno = document.getElementById("ejer6buscar").value.toLowerCase();
    let mensaje = "";
    if (listAlumnos.includes(nombreAlumno)) {
        mensaje = "El alumno " + nombreAlumno + " está en la lista";
    }
    else {
        mensaje = "El alumno " + nombreAlumno + " NO está en la lista";
    }
    imprimir(mensaje, "ejer6resultadobuscar");

}//Siempre me imprime que el nombre no está en la lista. I give up!