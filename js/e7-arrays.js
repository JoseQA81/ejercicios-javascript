function imprimir(mensaje,id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}
//EJEMPLO 1: CREAR UN ARRAY
//El array puede tener tanto texto, como números. Cada elemento va separado por una coma.
//El texto debe estar entre comillas, y los numeros sin comillas.
function mostrarLista() {
    let listaCompra = ["tomates","huevos","queso", "fresas", "zanahorias",1,8,"atun"];
    mensaje = "La lista de la compra es " + listaCompra;
    imprimir(mensaje,"e1listaresultado");
}

//EJEMPLO 2: MOSTRAR INFORMACION DE LA LISTA

function mostrarInfoLista () {
    let listaCompra = ["tomates","huevos","queso", "fresas", "zanahorias",1,8,"atun"];
    let primerProducto = listaCompra[0]; //MOSTRAR PRIMER ELMENTO DE LA LISTA
    let longitudLista = listaCompra.length; //MOSTRAR SU LONGITUD
    let ultimoProducto = listaCompra[longitudLista - 1]; //MOSTRAR EL ULTIMO ELEMENTO
    let mensaje = "La lista de la compra es " + listaCompra + " el primer elemento de la lista es " + primerProducto + " el ultimo elemento de la lista es " + ultimoProducto + " la longitud de la lista es " + longitudLista;
    imprimir(mensaje,"e2listainfo");
}