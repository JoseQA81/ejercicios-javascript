/**1. Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario.
1. Agrega un campo para introducir un numero mayor que 0.
2. Agrega un boton que al pulsarlo muestre la suma de todos los numeros desde el 1 hasta el numero indicado. */
function mostrarSuma() {
    let numero = parseInt(document.getElementById("e1sumanumeros").value); // Obtiene el valor del campo de entrada con el ID e1sumanumeros.
    let suma = 0; //suma: Esta variable se usará para acumular la suma de los números desde 0 hasta el número introducido por el usuario.
    let mensaje = "";

    for (let i = 0; i <= numero; i++) { //let i = 0: Inicializa la variable i a 0. 
        //i <= numero: El bucle continúa mientras i sea 'menor o igual' al número introducido por el usuario.
        suma = suma + i;                //i++: Incrementa i en 1 después de cada iteración.
        //suma = suma + i: En cada iteración del bucle, el valor actual de i se suma a la variable suma.                
        //mensaje += i + " la suma es: " + suma + "\n";  En este mensaje se ve la suma desglosada 
    }
    mensaje += "La suma de los números es: " + suma;
    imprimir(mensaje, "e1buclesresultado");
}//Ejemplo que puede valer al PROYECTO (ver vídeo - parte final)


/**2. Muestra una palabra el numero de veces que indique el usuario.
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacío. 
   A continuacion agrega un campo para introducir el número de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un botón que al pulsarlo muestre la palabra en mayúsculas el número de veces indicado por el usuario.  */
function mostrarPalabra() {
    let palabra = document.getElementById("ejer2palabra").value;
    let numeroVeces = parseInt(document.getElementById("ejer2numeroveces").value);
    let mensaje = "";

    for (let i = 1; i <= numeroVeces; i++) {
        mensaje += i + " " + palabra.toUpperCase() + " ";
    }
    imprimir(mensaje, "e2buclesresultado");
}

/**3. Muestra AMAPOLA o MARGARITA el numero de veces que indique el usuario, segun la palabra introducida:
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. 
   A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre el numero de veces indicado, la palabra AMAPOLA, 
   si la palabra introducida por el usuario empieza por VOCAL, que muestre la palabra MARGARITA en cualquier otro caso.
 */
function mostrarPalabras() {
    let palabra2 = document.getElementById("ejer3palabra").value;
    palabra2 = palabra2.toLowerCase();
    let numeroVeces2 = parseInt(document.getElementById("ejer3numeroveces").value);
    let mensaje = "";

    for (let i = 1; i <= numeroVeces2; i++) {
        //desde el 1 hasta el número introducido (el que introduce el usuario)

        if (palabra2[0] === 'a' || palabra2[0] === 'e' || palabra2[0] === 'i' || palabra2[0] === 'o' || palabra2[0] === 'u') {
            mensaje += i + "AMAPOLA" + " "; //palabra2[0] es la primera letra de la palabra
        }
        else {
            mensaje += i + "MARGARITA" + " ";
        }
    }
    imprimir(mensaje, "e3buclesresultado");
}

/**4. Muestra todos los numeros pares desde el 0 hasta el indicado por el usuario.
1. Agrega un campo para introducir un numero. Este campo no puede estar vacio.
2. Agrega un boton que al pulsarlo muestre todos los numeros pares, desde el 0 hasta el indicado. 
Nota: Un numero es par si el resto de la division entre 2 es 0. Para saber el resto de una división, puedes usar el operador %.
 */
function mostrarNumerosPares() {
    let numero = parseInt(document.getElementById("ejer4numeroS").value);
    let mensaje = "";

    for (let i = 1; i <= numero; i++) {

        if (i % 2 === 0) {
            mensaje += i + " PAR ";
        }

    }
    imprimir(mensaje, "e4buclesresultado");

}


/**5. Muestra todos los nombres de una lista en mayúsculas.
1. Agrega un nuevo campo para agregar nombres a una lista. Debe ser obligatorio y tener minimo 3 carácteres.
2. Agrega un boton que al pulsarlo agrege el nombre introducido en el formulario a una lista y la muestre por pantalla.
3. Agrega un botón que al pulsarlo muestre la lista completa en mayúsculas.
4. Agrega un nuevo botón que al pulsarlo muestre los nombres de la lista que empiecen por la letra A.
 */
let listaDeNombres = [];
let mensaje = "";
let mensajeFinal = "";

function agregarNombre() {
    let nombres = document.getElementById("ejer5nombres").value;
    listaDeNombres.push(nombres);
    imprimir(listaDeNombres, "e5resultadonombre");
    
}

function listaMayusculas() {

    for (let i = 0; i < listaDeNombres.length; i++) {
        let nombres = listaDeNombres[i];
        mensaje += nombres.toUpperCase() + ", ";
    }
    imprimir(mensaje, "e5resultadomayusculas");
}

function mostrarNombresA() {

    for (let i = 0; i < listaDeNombres.length; i++) {
        let nombres = listaDeNombres[i];

        if (nombres[0].toUpperCase() === 'A') {
            mensajeFinal += nombres + ", ";
        }
    }
    imprimir(mensajeFinal, "e5resultadonombresA");

}