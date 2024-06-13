/**1. Crea un nuevo objeto, llamado viaje, que contenga las siguientes propiedades: destino, precio, duracion en dias y lista de ciudades 
 * a visitar. Agrega un boton a tu pagina, llamado mostrar info de viaje, que muestre toda la informacion del viaje. */
let viaje = {
    destino: "Irlanda",
    precio: 150,
    duracion: 15,
    ciudades: ["Dublín", "Galway", "Cork"],
    viajeros: []
};

function mostrarInfoViaje() {
    let mensaje = "Nos vamos de viaje a: " + viaje.destino + ". Con un precio de: " + viaje.precio + "€" + ". Duración: " + viaje.duracion + " días" + " y visitaremos: " + viaje.ciudades + ". Descripción: " + viaje.descripcion;
    imprimir(mensaje, "ejer1objetosviaje");
}

/**2. Agrega a un formulario para modificar el viaje anterior. Para ello agrega un select donde el usuario pueda elegir la propiedad a modificar 
 * (destino, precio, duracion, lista de ciudades) y un campo donde pueda introducir el nuevo valor. 
 * Agrega un boton modificar viaje, que actualice el objeto anterior con la nueva informacion y lo muestre por pantalla. */
function propiedadViajeCambiar() {
    let nuevaInfo = document.getElementById("e2objetosviajepropiedades").value;
    let nuevoValor = document.getElementById("e2obnuevovalor").value;

    if (nuevaInfo === "precio" || nuevaInfo === "duracion") {
        viaje[nuevaInfo] = parseInt(nuevoValor); /**Precio y duración son valores numéricos, por eso añadimos 'parseInt'. 
        viaje[nuevaInfo] permite acceder y modificar una propiedad del objeto viaje utilizando el valor contenido en la variable
         nuevaInfo como nombre de la propiedad*/
    }
    else if (nuevaInfo === "ciudades") {
        viaje[nuevaInfo] = nuevoValor.split(",");
    }
    else {
        viaje[nuevaInfo] = nuevoValor;
    }
    mostrarInfoViaje();
}

/**3. Agrega un formulario en el que el usuario pueda introducir una descripción del viaje. 
 * Agrega un botón que al pulsarlo agrege la descripción introducida al objeto viaje y muestre la información del viaje actualizada. */
function agregarDescripcion() {
    let nuevaDescripcion = document.getElementById("e3nuevadescrip").value; /**Agregar estudiantes nombre y puntuación para (proyecto): 
                                                                            estudiante.nombre y estudiante.puntuacion*/
    viaje.descripcion = nuevaDescripcion;
    mostrarInfoViaje();
}

/**4. Agrega un formulario para agregar viajeros del viaje, puede agregar todos los que quiera a una lista. Para ello crea un formulario 
 * en el que introduzca el nombre del viajero, seleccione el tipo (adulto o niño), y seleccione los descuentos: 
 * estudiante, jubilado o ninguno. Cuando el usuario pulse el boton agregar, se mostrará la lista con toda la información 
 * de los viajeros agregados.  */
function agregarViajero() {
    let viajero = document.getElementById("e4nombreViajero").value;
    let tipoViajero = document.getElementById("e4tipoViajero").value;
    let descuento = document.getElementById("e4descuentoViajero").value;

    let nuevoViajero = {
        nombre: nombre,
        tipo: tipo,
        descuento: descuento
    };
    viaje.viajeros.push(nuevoViajero);
    mostrarViajeros();
}