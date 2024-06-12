let mascota = {
    nombre: "Amelí",
    tipo: "gato",
    edad: 18,
    ciudadesDondeHaVivido: ["Totana", "Málaga", "Madrid"]

}

//Lista mascotas
let mascotas = [];


//imprimir
function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Creamos un objeto mascota
function mostrarMascota() {
    let mensaje = "El nombre de la mascota es: " + mascota.nombre + " es un: " + mascota.tipo + " su edad es: " + mascota.edad + " y ha vivido en: " + mascota.ciudadesDondeHaVivido + " y su propietario es: " + mascota.propietario;
    imprimir(mensaje, "e1objetos");
}

//Muestro la información elegida del objeto mascota
function mostrarPropiedadMascota() {
    let propiedadAmostrar = document.getElementById("e2infomascota").value;

    let mensaje = propiedadAmostrar + ": " + mascota[propiedadAmostrar];
    imprimir(mensaje, "e2objetos");
}

//cambiar elementos de un objeto - cambiar nombre
function cambiarNombreMascota() {
    let nuevoNombre = document.getElementById("e3nombremascota").value;
    mascota.nombre = nuevoNombre;
    //mascota.tipo = nuevoNombre; para cambiar el tipo, habría que borrar la línea de encima y dejar esta
    mostrarMascota();
}

//agregar nuevas propiedades a un objeto
function agregarPropietario() {
    let nombrePropietario = document.getElementById("e4nuevoPropietario").value;
    mascota["propietario"] = nombrePropietario;
    mostrarMascota();
}

//Imprimir un array de objetos - (IMPRIMIR LA LISTA DE ESTUDIANTES)
function imprimirListaMascotas() {
    let mensaje = "";

    for (i = 0; i < mascotas.length; i++) {
        mensaje += "Mascota número: " + i;
        mensaje += "Nombre: " + mascotas[i].nombre; //nombre estudiante
        mensaje += "Edad: " + mascotas[i].edad; //puntuación estudiante
        mensaje += "Tipo: " + mascotas[i].tipo;
    }
    imprimir(mensaje, "e5objetos");
}

//Agregar una nueva mascota a la lista
function agregarNuevaMascota() {
    let miMascota = {}; //lista estudiantes
    miMascota.nombre = document.getElementById("e5nombremascota").value; //nombre del estudiate
    miMascota.edad = parseInt(document.getElementById("e5edadmascota").value); //puntuación del estudiante
    miMascota.tipo = document.getElementById("e5tipomascota").value;

    mascotas.push(miMascota);
    imprimirListaMascotas();
}




