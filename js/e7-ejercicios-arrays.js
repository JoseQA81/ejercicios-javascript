let listAlumnos = ["Jose", "MJ", "Alex", "Reyes", "Alicia", "Rebeca", "Rocío", "Camila", "Samanta", "Sandra"];

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
    let posicionLista = posicion - 1; //como la lista empieza en 0, le restamos 1. Que quiere decir que el 1, corresponde a la posicion 0
    let mensaje = "";


    if (posicion < 1 || posicion > listAlumnos.length) {
        mensaje = "Error, la posición introducida es mayor a la longitud total de la lista";
    }
    else {
        listAlumnos.splice(posicionLista, 1);
        mensaje = "Alumno eliminado, la lista actualizada es: " + listAlumnos.join(", "); //El método join se usa para convertir todos los elementos de un array en una sola cadena de texto.
        mostrarListado();
    }
    imprimir(mensaje, "ejer5resultadoeliminar");
}

/**EJERCICIO 6: Agrega una opción para buscar un alumno. Para ello:
Agrega un campo para introducir el nombre del alumno a buscar.
Agrega un botón buscar, que al pulsarlo muestre un mensaje con todos los alumnos que contengan el nombre introducido.*/

function buscarAlumnos() {
    let nombreAlumno = document.getElementById("ejer6buscar").value;
    let indice = listAlumnos.indexOf(nombreAlumno);
    let mensaje = "";

    if (indice !== -1) {
        mensaje = "El alumno " + nombreAlumno + " está en la lista con los nombres: " + listAlumnos[indice] + " en la posición " + (indice + 1);
    }
    else {
        mensaje = "El alumno NO está en la lista";
    }
    imprimir(mensaje, "ejer6resultadobuscar");

}