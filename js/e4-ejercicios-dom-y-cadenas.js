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
let ultimaLetraE1 = fraseBienvenidaE1[longitudE1 -1];
let fraseMayuscula = fraseBienvenidaE1.toUpperCase();
let fraseMinuscula = fraseBienvenidaE1.toLowerCase();
let miNombre1 = "José Andrés";
let welcomeMensaje = fraseBienvenidaE1.replace("que tal, bienvenida a QA" , miNombre1);
let mensajeBienvenidaSinQueTal = fraseBienvenidaE1.replace("que tal" , miNombre1);

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
