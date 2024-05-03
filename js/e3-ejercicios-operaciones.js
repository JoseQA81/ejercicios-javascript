//ESTE FICHERO ES PARA HACER LOS EJERCICIOS DEL TAMA 3 - OPERACIONES

document.write("</br> EJERCICIO  3 - OPERACIONES - CREAR VARIABLES PARA GUARDAR EL NOMBRE DE LOS PRODUCTOS CON SUS PRECIOS</br>");

let applePrice = 2.5;
let precioPeras = 1.5;
let precioPlatanos = 1.8;
let totalPrecio;

document.write('<h2>Productos y precios por kilo:</h2>');

totalPrecio = applePrice + precioPeras;
document.write('Voy a sumar el total de dos frutas, precio manzanas ' + applePrice);
document.write(' más el precio de las peras ' + precioPeras);
document.write(' total: ' + totalPrecio);
document.write('<br>');

totalPrecio = precioPlatanos + precioPeras;
document.write('Voy a sumar el total de dos frutas, precio plátanos ' + precioPlatanos);
document.write(' más el precio de las peras ' + precioPeras);
document.write(' total: ' + totalPrecio);
document.write('<br>');

totalPrecio = precioPeras + precioPeras;
document.write('Voy a sumar 2 kilos peras ' + precioPeras);
document.write(' más el precio de las peras otra vez ' + precioPeras);
document.write(' total: ' + totalPrecio);
document.write('<br>');

//MULTIPLICAR
document.write("</br> Calcular el precio de 3 kilos de plátanos:</br>");
let kilosPlatanos = 3;
let multiplicacionPrecio;

multiplicacionPrecio = kilosPlatanos * precioPlatanos;
document.write('Calcular precio kilos de pátanos multiplicando: El precio total de ' + kilosPlatanos + ' kilos de pátanos');
document.write(' a un precio de ' + precioPlatanos);
document.write(' total: ' + multiplicacionPrecio);
document.write('<br>');

document.write("</br> Calcular el precio total de 2 kilos de manzanas y 3 kilos de peras:</br>");

let kilosManzanas1 = 2;
let kilosPeras = 3;

let precioTotalManzanas = kilosManzanas1 * applePrice;
let precioTotalPeras = kilosPeras * precioPeras;
totalPrecio = precioTotalManzanas + precioTotalPeras;

document.write('El precio total de ' + kilosManzanas1 + ' kilos de manzanas es: ' + precioTotalManzanas + '<br>');
document.write('El precio total de ' + kilosPeras + ' kilos de peras es: ' + precioTotalPeras + '<br>');
document.write('El precio total de la compra es: ' + totalPrecio + '<br>');
document.write('<br>');

document.write("</br> Calcular el precio total de 1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana :</br>");

kilosPlatanos = 1.5;
kilosPeras = 2;
kilosManzanas1 = 3;
let precioTotalPlatanos = kilosPlatanos * precioPlatanos;
precioTotalPeras = kilosPeras * precioPeras;
precioTotalManzanas = kilosManzanas1 * applePrice;

totalPrecio = precioTotalPlatanos + precioTotalPeras + precioTotalManzanas;
document.write('El precio total de ' + kilosPlatanos + ' kilos de plátanos es: ' + precioTotalPlatanos + '<br>');
document.write('El precio total de ' + kilosPeras + ' kilos de peras es: ' + precioTotalPeras + '<br>');
document.write('El precio total de ' + kilosManzanas1 + ' kilos de manzanas es: ' + precioTotalManzanas + '<br>');

document.write("</br> Calcular el precio de 2,5 kilos de peras, 3,5 kilos de platano :</br>");

kilosPeras = 2.5;
kilosPlatanos = 3.5;

precioTotalPeras = kilosPeras * precioPeras;
precioTotalPlatanos = kilosPlatanos * precioPlatanos;
totalPrecio = precioTotalPeras + precioTotalPlatanos;

document.write('El precio total de ' + kilosPeras + ' kilos de peras es: ' + precioTotalPeras + '<br>');
document.write('El precio total de ' + kilosPlatanos + ' kilos de plátanos es: ' + precioTotalPlatanos + '<br>');
document.write('El precio total de la compra es: ' + totalPrecio + '<br>');
document.write('<br>');

document.write("</br> EJERCICIO 1- Crea variables para guardar las notas de un alumno: 7.5, 10.5, 8, 9.5, 7 y muestra su nota media. :</br>");

let examenNotas1 = 7.5;
let examenNotas2 = 10.5;
let examenNotas3 = 8;
let examenNotas4 = 9.5;
let examenNotas5 = 7;
let totalExamenes1 = 5;
let notaMedia1;

notaMedia1 = (examenNotas1 + examenNotas2 + examenNotas3 + examenNotas4 + examenNotas5) / totalExamenes1;
document.write('Voy a combinar varias operaciones: La media de los exámenes es: ' + examenNotas1 + '-' + examenNotas2 + '-' + examenNotas3 + '-' + examenNotas4 + '-' + examenNotas5);
document.write(" seria en total: " + notaMedia1);
document.write("<br/>");

document.write("</br> EJERCICIO 2- Calcula el área de un cuadrado con lado de longitud 5 cm:</br>");

let areaCuadrado = 5;
let multiplicacionArea = areaCuadrado * areaCuadrado;

document.write('El área de un cuadrado es lado por lado. El área del cuadrado es: ' + multiplicacionArea + 'centímetros');
document.write('<br>');

document.write("</br> EJERCICIO 3- Encuentra el área de un rectángulo con dimensiones de 8 cm de largo y 6 cm de ancho.:</br>");

let baseRectangulo = 8;
let alturaRectangulo = 6;
multiplicacionArea = baseRectangulo * alturaRectangulo;

document.write('Para calcular el área de un rectángulo en la base por la altura: ' + multiplicacionArea + ' centímetros' + '<br>');

document.write("</br> EJERCICIO 4- Determina el área de un triángulo con base de 10 metros y altura de 8 metros.:</br>");
let baseTriangulo = 10;
let alturaTriangulo = 8;
multiplicacionArea = (baseTriangulo * alturaTriangulo) / 2;

document.write('Para calcular el área de un triángulo en la base por la altura partido dos: ' + multiplicacionArea + ' centímetros' + '<br>');

document.write("</br> EJERCICIO 5- Calcula el área de un círculo con radio de 4 centímetros:</br>");

let radioCirculo = 4;
const numeroPi = 3.14;
multiplicacionArea = (radioCirculo * radioCirculo * numeroPi)

document.write('El área de un círculo es PI multiplicado por el radio al cuadrado: ' + multiplicacionArea + ' centímetros' + '<br>');

document.write("</br> EJERCICIO 6- Encuentra el área de un trapecio con bases de longitudes 6 cm y 10 cm, y altura de 8 cm:</br>");

let baseTrapecio = 6;
let baseTrapecio2 = 10;
let alturaTrapecio = 8;
let areaTrapecio;

areaTrapecio = alturaTrapecio * ((baseTrapecio + baseTrapecio2) / 2);
document.write('El área de un trapecio es sumar las bases, por la altura, entre dos: ' + areaTrapecio + ' centímetros' + '<br>');

document.write("</br> EJERCICIO 7- Determina el área de un rombo con diagonales de longitudes 12 cm y 16 cm:</br>");

let diagonalMayor = 16;
let diagonalMenor = 12;
multiplicacionArea = (diagonalMayor * diagonalMenor) / 2;

document.write('El área del rombo es igual a diagonal mayor por diagonal menor, dividido por dos: ' + multiplicacionArea + ' centímetros' + '<br>');

document.write("</br> EJERCICIO 8- Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros:</br>");
//VOY A USAR LAS VARIABLES DEL RECTÁNGULO PARA CALCULAR EL PARALELOGRAMO YA QUE ES LA MISMA FÓRMULA Y PARA ESO SE CREAN LAS VARIABLES
baseRectangulo = 7;
alturaRectangulo = 9;
multiplicacionArea = baseRectangulo * alturaRectangulo;

document.write('Para calcular el área de un paralelogramo en la base por la altura: ' + multiplicacionArea + ' centímetros' + '<br>');

document.write("</br> EJERCICIO 10- Encuentra el área de un pentágono regular con lado de 6 centímetros:</br>");

