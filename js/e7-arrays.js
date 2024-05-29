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
function modificarLista() {
    let posicionAModificar = parseInt(document.getElementById("e3posicion").value);
    let nuevoValor = document.getElementById("e3nuevovalor").value;
    listaCompra[posicionAModificar - 1] = nuevoValor;
    mostrarLista();
}

//EJEMPLO 4: AGREGAR ELEMENTO A UNA LISTA. SE AGREGA SIEMPRE AL FINAL DE LISTA
//Se agrega con 'push' y se agrega al final de la lista. 
//Si quieres agregarlo al principio de la lista usa 'unshift en lugar de 'push'
function agregar() {
    let nuevoProducto = document.getElementById("e4elementonuevolista").value;
    listaCompra.push(nuevoProducto);
    mostrarLista(); //Llamamos a mostrarLista para que se actualice la lista
}

//EJEMPLO 5: ELIMINAR ELEMENTO DE LA LISTA. SE ELIMINA EL ULTIMO ELEMENTO.
//pop elimina el ultimo elemento.
//si quieres eliminar el primero puedes usar 'shift' en lugar de 'pop'
function eliminarUltimoElemento() {
    let elementoEliminado = listaCompra.pop();
    let mensaje = "El elemento eliminado es: " + elementoEliminado;
    imprimir(mensaje, "e5elementoEliminado");
    mostrarLista();
}

//EJEMPLO 6: ELIMINAR UN ELEMENTO DE LA LISTA EN UNA POSICION CONCRETA
//splice (posicion ,número de elementos a eliminar) recordar que la posicion empieza en 0.
function eliminarPosicionElegida() {
    let posicion = parseInt(document.getElementById("e6posicion").value);
    listaCompra.splice(posicion - 1, 1);
    let mensaje = "El elemento borrado es: " + posicion;
    imprimir(mensaje, "e6elementoBorrado");
    mostrarLista();
}

//EJEMPLO 7: ORDENAR LA LISTA DE FORMA ALFABETICA.
//Importante que todas esten en mayusculas o minusculas para que el orden sea correcto porque usa el orden assci y no el alfabético.
//.sort() de la a a la z, y .sort().resverse() de la z a la a
//arr.sort((a, b) => a - b); Ordenar de forma ascendente un array de numeros. Descendente arr.sort((a, b) => a - b).reverse
function ordenarLista() {
    listaCompra.sort().reverse();
    mostrarLista();
}

//EJEMPLO 8: OBTENER LA POSICION DE UN ELEMENTO DE LA LISTA
//DA LA POSICION INDEXOF de un elemento de la lista, empezando por 0. Si no lo encuentra devuelve la posicion -1
function verPosicionElemento() {
    let elemento = document.getElementById("e8elementoabuscar").value;
    let posicionElemento = listaCompra.indexOf(elemento);
    let mensaje = "";

    if (posicionElemento === -1) {
        mensaje = "El elemento no se encuentra en la lista";
    }
    else {
        mensaje = "El elemento " + elemento + " está en la posición con índice: " + posicionElemento;
    }
    imprimir(mensaje,"e8resultado");
}