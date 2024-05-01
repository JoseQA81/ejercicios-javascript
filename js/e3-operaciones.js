//SUMAR DOS NÚMEROS
//SUMAR PRECIO TOMATES Y MANZANAS
let precioTomates = 2.5;
let precioManzanas = 1.5;
let precioTotal;

precioTotal = precioTomates + precioManzanas;
document.write('Sumar 2 números: la suma del precio de los tomates' + precioTomates);
document.write('Más el precio de las manzanas' + precioManzanas);
document.write('es el total:' + precioTotal);
document.write('<br>');

//RESTAR 2 NÚMEROS
//Restarle a los tomates el descuento

let descuento = 1;
let precioTomatesDescuento;

precioTomatesDescuento = precioTomates - descuento;
document.write("Restar dos numeros: La resta del precio de los tomates tomates " + precioTomates);
document.write(" menos el descuento " + descuento);
document.write(" seria: " + precioTomatesDescuento);
document.write("<br/>");

//MULTIPLICAR DOS NUMEROS
//Calcular el precio de 5 kilos de manzanas.
let kilosManzanas = 5;
let precioMultiplicacion;

precioMultiplicacion = kilosManzanas * precioManzanas;
document.write("Multiplicar dos numeros: El precio total de " + kilosManzanas + " kilos de manzanas ");
document.write(" a un precio de " + precioManzanas);
document.write(" seria en total: " + precioMultiplicacion);
document.write("<br/>");

//DIVIDIR DOS NUMEROS
//Calcular la mitad del precio de las manzanas.
let mitad = 2;
let mitadPrecio = precioManzanas / mitad;

document.write("Dividir dos numeros: El resultado de dividir el precio de las manzanas " + precioManzanas );
document.write(" entre " + mitad);
document.write(" seria en total: " + mitadPrecio);
document.write("<br/>");

//COMBINAR VARIAS OPERACIONES
//Usar parentesis en las operaciones que querais hacer primero.
let notaExamen1 = 5.6;
let notaExamen2 = 8.2;
let notaExamen3 = 6.5;
let totalExamenes = 3;
let notaMedia;

notaMedia = (notaExamen1 + notaExamen2 + notaExamen3)/totalExamenes;
document.write("Combinar varias operaciones: La media de los examenes " + notaExamen1 + " " + notaExamen2 + " " + notaExamen3 );
document.write(" seria en total: " + notaMedia);
document.write("<br/>");

//OPERADORES INCREMENTO Y DECREMENTO
//++ suma uno cada vez que se usa, y el -- resta uno cada vez que se usa.
let numeroIntentos = 5;
document.write("El numero de intentos es " + numeroIntentos);
document.write("<br/>");
numeroIntentos++;
numeroIntentos++;
document.write("El numero de intentos incrementado es " + numeroIntentos);
document.write("<br/>");
numeroIntentos--;
document.write("El numero de intentos decrementado es " + numeroIntentos);
document.write("<br/>");