//VARIABLES GLOBALES: ESTAN FUERA DE LA FUNCION, Y PUEDE USARSE DENTRO DE CUALQUIER FUNCION QUE ESTE EN EL MISMO FICHERO JS
let listaCompra = ["tomates", "huevos", "queso", "fresas", "zanahorias", "atun"];


function imprimir(mensaje, id) {
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}
//EJEMPLO 1: CREAR UN ARRAY
//El array puede tener tanto texto, como números. Cada elemento va separado por una coma.
//El texto debe estar entre comillas, y los numeros sin comillas.
function mostrarLista() {
    let listaCompra = ["tomates", "huevos", "queso", "fresas", "zanahorias", 1, 8, "atun"];
    mensaje = "La lista de la compra es " + listaCompra;
    imprimir(mensaje, "e1listaresultado");
}

//EJEMPLO 2: MOSTRAR INFORMACION DE LA LISTA
function mostrarInfoLista() {
    let primerProducto = listaCompra[0]; //MOSTRAR PRIMER ELMENTO DE LA LISTA
    let longitudLista = listaCompra.length; //MOSTRAR SU LONGITUD
    let ultimoProducto = listaCompra[longitudLista - 1]; //MOSTRAR EL ULTIMO ELEMENTO
    let mensaje = "La lista de la compra es " + listaCompra + " el primer elemento de la lista es " + primerProducto + " el ultimo elemento de la lista es " + ultimoProducto + " la longitud de la lista es " + longitudLista;
    imprimir(mensaje, "e2listainfo");
}

//EJEMPLO 3: CAMBIAR VALOR DE UN ELEMENTO DE LA LISTA
//Se modifica el elemento de la posicion que le indiques. Recuerda que la posicion de la lista empieza en 0 y no en 1.
function modificarLista(){
    let posicionAModificar = parseInt(document.getElementById("e3posicion").value);
    let nuevoValor = document.getElementById("e3nuevovalor").value;
    listaCompra[posicionAModificar-1] = nuevoValor;
    mostrarLista();
}