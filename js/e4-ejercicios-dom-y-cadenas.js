/*
EJERCICIO 1
Crea una variable con la frase "Hola que tal, bienvenida a QA", y muestrala junto con:

Su longitud 

La posición de la palabra QA

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Crea una variable con tu nombre, y modifica la frase para que diga "Hola" seguido de tu nombre

Crea una nueva palabra, con la misma frase quitando la palabra "que tal".
*/

let fraseBienvenidaE1 = "Hola que tal, bienvenido/a a QA";
let longitudE1 = fraseBienvenidaE1.length;
let posicionPalabraQaE1 = fraseBienvenidaE1.indexOf("QA");
let primeraLetraE1 = fraseBienvenidaE1[0];
let ultimaLetraE1 = fraseBienvenidaE1[longitudE1 - 1];
let fraseMayuscula = fraseBienvenidaE1.toUpperCase();
let fraseMinuscula = fraseBienvenidaE1.toLowerCase();
let miNombre1 = "José Andrés";
let welcomeMensaje = fraseBienvenidaE1.replace("que tal, bienvenida a QA", miNombre1);
let mensajeBienvenidaSinQueTal = fraseBienvenidaE1.replace("que tal", miNombre1);

let textoParrafo = document.getElementById("e1longitud");
textoParrafo.innerText = "La longitud de la frase " + fraseBienvenidaE1 + " es: " + longitudE1;

textoParrafo = document.getElementById("e1posicionQA");
textoParrafo.innerText = "La posición de la palabra QA es: " + posicionPalabraQaE1;

textoParrafo = document.getElementById("e1letraPrimera");
textoParrafo.innerText = "La letra primera de la frase " + fraseBienvenidaE1 + " es: " + primeraLetraE1;

textoParrafo = document.getElementById("e1letraUltima");
textoParrafo.innerText = "la última letra de la frase " + fraseBienvenidaE1 + " es: " + ultimaLetraE1;

textoParrafo = document.getElementById("e1fraseMayuscula");
textoParrafo.innerText = "Muestra toda la frase: " + fraseBienvenidaE1 + " en mayúscula: " + fraseMayuscula;

textoParrafo = document.getElementById("e1fraseMinuscula");
textoParrafo.innerText = "Muestra toda la: " + fraseBienvenidaE1 + " en: " + fraseMinuscula;

textoParrafo = document.getElementById("e1fraseNombre");
textoParrafo.innerText = "La frase con el nombre es: " + welcomeMensaje;

textoParrafo = document.getElementById("e1fraseSinQueTal");
textoParrafo.innerText = "Creo la misma frase quitando la palabra 'que tal' y quedaría así: " + mensajeBienvenidaSinQueTal;


//OPCION 2 PARA IMPRIMIR (HECHO POR REYES)
//IMPORTANTE, ESTE MODO VA A AGREGAR EL TEXTO SIEMPRE AL FINAL, EL ANTERIOR VA A ESTAR DONDE TU ELIJAS PONERLO EN EL HTML
let divEjercicios = document.getElementById("contenidoEjercicios");
let nuevoParrafo2;

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase sin que tal es " + mensajeBienvenidaSinQueTal;
divEjercicios.appendChild(nuevoParrafo2);

nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerText = "La frase con el nombre es " + welcomeMensaje;
divEjercicios.appendChild(nuevoParrafo2);

/*
Crea una variable con una frase en la que te presentes y muestrala junto con:

Su longitud

La posición de tu nombre

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Muestra la frase cambiando tu nombre por otro que elijas.

Crea una nueva palabra, con la misma frase quitando tu nombre.
*/
let frasePresentacion = "Hola, mi nombre es José Andrés y quiero ser un gran QA";
let longitudE2 = frasePresentacion.length;
let posicionNombre = frasePresentacion.indexOf("José Andrés");
let primeraLetraE2 = frasePresentacion[0];
let ultimaLetraE2 = frasePresentacion[longitudE2 - 1];
let fraseMayusculaE2 = frasePresentacion.toUpperCase();
let fraseMinusculaE2 = frasePresentacion.toLowerCase();
let otroNombre = "Álex";
let nuevaPalabra5 = "María Jesús";
let welcomeMensaje2 = frasePresentacion.replace("José Andrés", otroNombre);
let welcomeMensaje3 = frasePresentacion.replace("José Andrés", nuevaPalabra5);



let e2Imprimir = document.getElementById("e2longitud");
e2Imprimir.innerText = "La longitud de la frase de presentación es: " + frasePresentacion + " es: " + longitudE2 + " carácteres ";

e2Imprimir = document.getElementById("e2posicionNombre");
e2Imprimir.innerText = "La posición de mi nombre es: " + posicionNombre;

e2Imprimir = document.getElementById("e2letraPrimera");
e2Imprimir.innerText = "la primera letra de la frase de presentación: " + frasePresentacion + " es: " + primeraLetraE2;

e2Imprimir = document.getElementById("e2letraUltima");
e2Imprimir.innerText = "La última letra de la frase de presentación: " + frasePresentacion + " es " + ultimaLetraE2;

e2Imprimir = document.getElementById("e2fraseMayuscula");
e2Imprimir.innerText = "La frase de presentación en mayúscula: " + fraseMayusculaE2;

e2Imprimir = document.getElementById("e2fraseMinuscula");
e2Imprimir.innerText = "La frase de presentación en minúscula: " + fraseMinusculaE2;

e2Imprimir = document.getElementById("e2otroNombre");
e2Imprimir.innerText = "La frase de presentación con otro nombre es: " + welcomeMensaje2;

e2Imprimir = document.getElementById("e2palabraNueva");
e2Imprimir.innerText = "La frase de presentación con otro nombre es: " + welcomeMensaje3;

//Crea una variable con tu nombre completo y muestralo por pantalla. A continuación, quita los espacios de la variable y muestralo por pantalla.

let nombreConEspacios = "José Andrés Lorca Gálvez";
let quitarEspacios = nombreConEspacios.replace(/\s/g, "");

let e3Imprimir = document.getElementById("e3nombre");
e3Imprimir.innerText = "Mi nombre sin espacios es: " + quitarEspacios + " y con espacios " + nombreConEspacios;

//Crea una variable con una palabra en minuscula y muestralo por pantalla. Cambia la primera letra a mayuscula y muestrala por pantalla.

let palabraMinuscula = "supercalifrajilisticoespialidoso";
let letraPrimera = palabraMinuscula[0].toUpperCase();
let restoDeLaPalabra = palabraMinuscula.slice(1);
let palabraConMayuscula = letraPrimera + restoDeLaPalabra;

let e4Imprimir = document.getElementById("e4minuscula");
e4Imprimir.innerText = "La palabra es minúsculas es: " + palabraMinuscula + " y con la primera letra en mayúscula: " + palabraConMayuscula;

//Esta es la versión de CHATGPT que me ha simplificado el código:
/*charAt() es un método en JavaScript que se utiliza para obtener el carácter en una posición específica dentro de una cadena. 
Toma un índice como argumento y devuelve el carácter en esa posición dentro de la cadena.*/

let palabraConMinuscula = "queremosserlosmejoresqas";
let palabraConUnaMayuscula = palabraConMinuscula.charAt(0).toUpperCase() + palabraConMinuscula.slice(1);

let e4V2Imprimir = document.getElementById("e4V2minuscula");
e4V2Imprimir.innerText = "La palabra en minúsculas es: " + palabraConMinuscula + ", y con la primera letra en mayúscula: " + palabraConUnaMayuscula;

//Crea una cadena con el texto Hola Mundo y muestralo por pantalla. Reemplaza la palabra Hola por Adios y muestralo por pantalla.

let saludoMundo = "Hola Mundo!";
let adiosMundo = saludoMundo.replace("Hola", "Adiós");

let e5Imprimir = document.getElementById("e5Mundo");
e5Imprimir.innerText = "El texto original es: " + saludoMundo + " y el nuevo saludo es: " + adiosMundo;