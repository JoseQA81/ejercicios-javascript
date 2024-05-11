//declarar la funcion.
//Funcion sin argumentos. No lleva nada entre los parentesis, significa que no recibe argumentos
//Declaramos la funcion
function decirHola () {
    let saludo = "Hola mundo";
    let parrafo = document.getElementById("funcionesEjemplo1");
    parrafo.innerText = saludo;
}
//Llamar a una funcion (la utilizamos)
decirHola();

//Funcion con argumentos. Recibe parametros, se ponen entre los parentesis
//declaramos la funcion
function suma (num1,num2){

    let resultado = num1 + num2;

    let divFunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = "La suma de " + num1 + " mas " + num2 + " es igual a " + resultado;
    divFunciones.appendChild(parrafoNuevo);
}
//Llama a la funcion suma, con los valores
suma(2,2);
suma(3,3);

//Funcion con argumentos ejemplo 2
//declaramos la funcion agregar nuevo parrafo
function agregarNuevoParrafo (mensaje) {
    let divFunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = mensaje;
    divFunciones.appendChild(parrafoNuevo);
}
//llamamos a la funcion con variables
let mensaje = "Hola que tal";
agregarNuevoParrafo(mensaje);
let nombre = "Reyes";
agregarNuevoParrafo("Hola que tal" + nombre);
agregarNuevoParrafo("Adios me voy");


//-------------PARTE PRINCIPAL -------------------------//
//Llamar a una funcion desde un boton de html con el evento onclick
//Creamos la funcion saludar
//EJEMPLO QUE PODEIS USAR DE REFERENCIA PARA HACER LA HISTORIA DE VER RESPUESTA
function saludar () {
    let parrafo = document.getElementById("funcionesEjemplo2");
    parrafo.innerText = "Hola que tal como estas";
}

//Obtener informacion de un formulario y ejecutar una funcion con el evento onclick
//EJEMPLO QUE PODEIS USAR DE REFERENCIA PARA HACER LA HISTORIA MENSAJE DE BIENVENIDA
//Creamos la funcion imprimir que podra ser usada en las otras funciones
function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function restar(){
    //1. Obtenemos los valores del formulario. Para ello ponemos el id del elemento del formulario y ponemos .value para obtener su valor y guardarlo en una variable
    let num1 = document.getElementById("e3numero1").value;
    let num2 = document.getElementById("e3numero2").value;
    let resta = num1 - num2;
    let mensaje = "La resta de los numeros " + num1 + " y " + num2 + " es igual a " + resta;
    //Usamos la funcion de imprimir que hemos declarado antse
    imprimir(mensaje,"funcionesEjemplo3");
}

//EJEMPLO OBTENER ELEMENTO DE UN SELECT
function mostrarUbicacion () {
    //1. Obtenemos la opcion seleccionada
    let ciudadSeleccionada = document.getElementById("e4ciudades").value;
    let mensaje = "Te encuentras en la ciudad " + ciudadSeleccionada;
    imprimir(mensaje,"e4solucion");
}