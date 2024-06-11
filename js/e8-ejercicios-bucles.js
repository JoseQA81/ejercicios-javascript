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

/**6. Crea un programa para sumar todos los números de una lista.
1. Agrega un nuevo campo para agregar notas a una lista. Este campo debe ser numérico, y acepta números del 1 al 10 con decimales.
2. Agrega un botón agregar, que al pulsarlo agrege la nota introducida a la lista y la muestre.
3. Agrega un botón que al pulsarlo muestre la suma total de todos los números de la lista, o 0 si está la lista vacía. 
4. Agrega un botón que muestre la nota media de la lista.
5. Agrega un botón para indicar si el usuario ha aprobado o no. El usuario está aprobado si su nota media es igual o mayor a 5.
 */
let notas = [];

function agregarNotas() {
    let mensaje = "";
    let numero = parseFloat(document.getElementById("ejer6numeroslista").value);

    if (!isNaN(numero) && numero >= 1 && numero <= 10) {
        notas.push(numero);

        mensaje = "Nota agregada: " + numero;
        document.getElementById("ejer6numeroslista").value = "";
    }
    else {
        mensaje = "Introduce un número válido entre 1 y 10";
    }
    imprimir(mensaje, "ejer6agregarnota");
}

function agregarYmostrarNotas() {
    let mensaje = "Notas: " + notas.join(", ");
    imprimir(mensaje, "ejer6mostraragregarnota");
}

function sumaTotalNumeros() {
    let numero = parseFloat(document.getElementById("ejer6numeroslista").value);
    let sumaTotal = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaTotal += notas[i]; /**notas[i] accede al elemento en la posición i del array notas. 
                                    En cada iteración del bucle, 'i' se incrementa para acceder al siguiente elemento en el array.*/
    }
    mensaje += "La suma de los números es: " + sumaTotal;
    imprimir(mensaje, "e6sumatotalresultado");
}

function notaMediaLista() {
    let mensaje = "";
    let sumaTotal = 0;
    let cantidadNotas = notas.length;

    for (let i = 0; i < cantidadNotas; i++) {
        sumaTotal += notas[i];
    }
    let media = sumaTotal / cantidadNotas;
    media = media.toFixed(1); // Con toFixed limitamos el número de decimales y entre paréntesis indicamos cuantos decimales queremos.

    mensaje = "La nota media es: " + media;
    imprimir(mensaje, "e6notamediaresultado");
}

function mostrarSiAprobado() {
    let mensaje = "";
    let sumaTotal = 0;
    let cantidadNotas = notas.length;

    for (let i = 0; i < cantidadNotas; i++) {
        sumaTotal += notas[i];
    }
    let media = sumaTotal / cantidadNotas;
    media = media.toFixed(1);

    let resultado = media >= 5 ? "¡Aprobado!" : "No aprobado, estudia más: "; /**es una forma abreviada de escribir una expresión condicional */
    mensaje = "El estudiante está: " + resultado + " con una nota media de: " + media;

    imprimir(mensaje, "e6resultadoaprobado");
}
/**Si media es mayor o igual a 5, entonces la condición media >= 5 se evalúa como verdadera, y se asigna el valor "Aprobado" a la variable 
 * resultado. De lo contrario, si media es menor que 5, la condición se evalúa como falsa y se asigna el valor 
 * "No aprobado" a la variable resultado. */

/**let resultado;
if (media >= 5) {
    resultado = "Aprobado";
} else {
    resultado = "No aprobado";
} */ // Operación hecha con condicionales.