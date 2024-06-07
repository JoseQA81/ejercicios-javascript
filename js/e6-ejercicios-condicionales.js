//EJERCICIO 1 - Crea un formulario para que el usuario introduzca su edad y vea un mensaje indicando si es mayor de edad o no.
function introducirEdad() {
    let edad = parseInt(document.getElementById("e1edad").value);
    let mensaje = "";

    if (edad >= 18) {
        mensaje = "Eres mayor de edad";
    }
    else {
        mensaje = "Eres menor de edad"
    }
    imprimir(mensaje, "e1resultadoEdad");
}

/*EJERCICIO 2 - Crea un formulario que indique cual es el mayor de dos numeros.
            Agrega dos elementos al formulario que reciban dos numeros enteros. Este campo no puede estar vacio.
            Agrega un boton que al hacer click llame a una funcion que indique cual de los dos numeros es el mayor. */
function introducirNumeros() {
    const numero1 = parseInt(document.getElementById("e2numero1").value);
    const numero2 = parseInt(document.getElementById("e2numero2").value);
    let mensaje = "";

    if (numero1 > numero2) {
        mensaje = "El número mayor es: " + numero1;
    }
    else if (numero1 < numero2) {
        mensaje = "El número mayor es: " + numero2;
    }
    else {
        mensaje = "Los números son iguales";
    }
    imprimir(mensaje, "e2resultadoNumeros");
}
/*
 3. Crea un formulario para que el usuario introduzca su nota y vea si esta aprobado o suspenso.
Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio y debe ser entre 0 y 10.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje suspenso si la nota es menor que 5, y aprobado sino.
 */ // HE AÑADIDO EL OPERADOR LÓGICO AND && PARA AÑADIR LA CONDICIÓN EMPOLLÓN/NA.
function introducirNotas() {
    let nota = parseFloat(document.getElementById("ejer3notas").value);
    let mensaje = "";

    if (nota >= 5 && nota <= 9) {
        mensaje = "Has sacado un " + nota + " , estás aprobado.";
    }
    else if (nota === 10) {
        mensaje = "Eres un/a empollón/empollona";
    }

    else {
        mensaje = "Has sacado un " + nota + " , estás suspenso, estudia más."
    }
    imprimir(mensaje, "ejer3resultadoNotas");
}

/*EJERCICIO 4 - Crea un formulario para que el usuario introduzca su nombre y le diga si es un nombre largo o corto.
Agrega un elemento al formulario para introducir un nombre. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es un nombre largo
si tiene más de 10 caracteres, o es un nombre corto si tiene menos de 10.
 */
function nombreCortoLargo() {
    let nombre = document.getElementById("ejer4cadenaNombre").value;
    let mensaje = "";

    if (nombre.length >= 10) {
        mensaje = "El " + nombre + " es largo, pues tiene más de 10 carácteres";
    }
    else {
        mensaje = "El " + nombre + " es corto, pues tiene menos de 10 carácteres";
    }
    imprimir(mensaje, "ejer4resultado");
}

/*EJERCICIO 5 - Crea un formulario para ver la estacion del año segun el mes introducido.
Agrega un elemento select al formulario para seleccionar un mes. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre la estación del año: PRIMAVERA, VERANO, OTOÑO o INVIERNO
 según el mes que haya seleccionado. Por ejemplo, si selecciona JUNIO, debe aparecer el mensaje VERANO.
 */
function estacionMes() {
    let mes = document.getElementById("ejer5estacion").value;
    let mensaje = "";

    if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
        mensaje = "Has seleccionado " + mes + " quiere decir que es INVIERNO";
    }
    else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
        mensaje = "Has seleccionado " + mes + " quiere decir que es PRIMAVERA";
    }
    else if (mes === "Junio" || mes === "Julio" + mes === "Agosto" || mes === "Septiembre") {
        mensaje = "Has seleccionado " + mensaje + " quiere decir que es VERANO";
    }
    else if (mes === "Octubre" || mes === "Noviembre") {
        mensaje = "Has seleccionado " + mes + " quiere decir que es OTOÑO";
    }
    imprimir(mensaje, "ejer5resultado");
}

/*EJERCICIO 6 - Crea una calculadora.
Agrega un formulario donde el usuario pueda introducir dos numeros y seleccionar la operacion suma, resta, multiplicacion o division. 
Los campos no pueden estar vacios.
Agrega un boton que al hacer click llame a una funcion que muestre el resultado de la operación seleccionada.
 */

function calculadoraNumeros() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    if (operacion === "sumar") {
        resultado = numero1 + numero2;
        mensaje = "La suma de " + numero1 + " más " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "restar") {
        resultado = numero1 - numero2;
        mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
        mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
    }
    else if (operacion === "dividir") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
        }
        else {
            mensaje = "No se puede dividir entre 0";
        }
    }

    imprimir(mensaje, "e6calculadoraresultado");
}//La operación (numero2 !== 0) numero2 no es igual a 0, no es mío, es sugerencia de ChatGpt

//VERSION EJERCICIO 6 CON SWITCH
function calculadoraNumerosSwitch() {
    let numero1 = parseFloat(document.getElementById("e6calculadora").value);
    let numero2 = parseFloat(document.getElementById("e6calculadora2").value);
    let operacion = document.getElementById("e6operacion").value;
    let resultado = 0;
    let mensaje = "";

    switch (operacion) {
        case "sumar":
            resultado = numero1 + numero2;
            mensaje = mensaje = "La suma de " + numero1 + " más " + numero2 + " es igual a: " + resultado;
            break;
        case "restar":
            resultado = numero1 - numero2;
            mensaje = "La resta de " + numero1 + " menos " + numero2 + " es igual a: " + resultado;
        case "multiplicar":
            resultado = numero1 * numero2;
            mensaje = "La multiplicación de " + numero1 + " por " + numero2 + " es igual a: " + resultado;
        case "dividir":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                mensaje = "La división de " + numero1 + " entre " + numero2 + " es igual a: " + resultado;
            }
            else {
                mensaje = "No se puede dividir entre 0";
            }
            break;
    }
    imprimir(mensaje, "e6calculadoraresultado");

}

/*EJERCICIO 7 - Crea un formulario que muestre el precio final segun el producto y la forma de pago elegida.
Agrega un formulario donde el usuario pueda elegir entre los siguientes productos: 
1. Camiseta 10 euros, 2. Sudadera 20 euros, 3. Bufanda 5 euros, este campo es obligatorio y solo puede elegir un producto. 
Incluye también un elemento donde pueda introducir la cantidad, que es tambien obligatorio y debe ser mayor a 0.
Agrega un boton comprar que al hacer click muestre el precio total del producto elegido teniendo en cuenta la cantidad. 
Por ejemplo si elige 2 camisetas, el precio final seria 20 euros.
 */
function mostrarPrecioTotalPago() {
    let producto = parseInt(document.getElementById("ejer7productos").value);
    let cantidad = parseInt(document.getElementById("ejer7cantidad").value);
    let precioFinal = 0;
    let mensaje = "";

    if (producto && cantidad > 0) {
        precioFinal = producto * cantidad;
        mensaje = "El precio total es de: " + precioFinal + " € ";
    }
    else {
        mensaje = "Por favor, selecciona producto y cantidad válidos";
    }
    imprimir(mensaje, "ejer7resultadopago");
}

/*EJERCICIO 8 - Crea un formulario calcule el precio total de un hotel segun la habitacion y el numero de noches elegidas.
Agrega un formulario donde el usuario pueda elegir el tipo de habitacion: 
Suite: 100 euros, habitacion doble: 70 euros. Habitacion individual: 50 euros. 
Este campo es obligatorio. Otro campo para introducir el numero de noches que debe ser mayor a 0.
Agrega un boton que muestre el precio total. Si el usuario se queda por mas de 5 noches, se le aplica un descuento a la estancia del 20%.
 */

function CuantasNoches() {
    let habitacion = document.getElementById("ejer8habitacion").value;
    let numeroNoches = parseInt(document.getElementById("ejer8cantidadNoches").value);
    let precioPorNoche = 0;
    let precioFinal = 0;
    let mensaje = "";

    if (habitacion === "suite") {
        precioPorNoche = 100;
    }
    else if (habitacion === "doble") {
        precioPorNoche = 70;
    }
    else if (habitacion === "individual") {
        precioPorNoche = 50;
    }

    precioFinal = numeroNoches * precioPorNoche;

    if (numeroNoches > 5) {
        let descuento = (precioFinal * 20) / 100;
        precioFinal = precioFinal - descuento; // Aplicando el 20% de descuento
    }

    mensaje = "El precio total es de: " + precioFinal + " € ";


    imprimir(mensaje, "ejer8resultadonoches");
}

/*EJERCICIO 9 - Crea un formulario calcule el precio total del alquiler de un coche.
Agrega un formulario donde el usuario pueda elegir el tipo de coche: Deluxe: 100 euros, Standard: 70 euros. Basic: 50 euros. 
Este campo es obligatorio. El usuario tambien debe poder elegir el numero de dias, este campo es obligatorio y debe ser mayor a 0. 
El usuario debe introducir tambien su año de nacimiento, este campo es obligatorio. 
Y debe elegir el seguro: todo riesgo 20 euros por dia. Basico 5 euros por día.
Agrega un botón que muestre el precio total. Teniendo en cuenta las siguientes reglas:
El usuario debe ser mayor de 25 años, sino mostrara un mensaje indicando que no puede alquilar el coche.
Si el coche se alquila por mas de 7 dias, se aplica un descuento del 10% al alquiler.
Si el usuario ha elegido el seguro basico, debe mostrar ademas del precio final, un mensaje indicando que debe dejar un deposito de 500 euros.
*/
function obtenerCochePrecio() {
    let coche = document.getElementById("ejer9tipocoche").value;
    let cochePrecio = 0;

    if (coche === "deluxe") {
        cochePrecio = 100;
    } else if (coche === "Standard") {
        cochePrecio = 70;
    } else if (coche === "basic") {
        cochePrecio = 50;
    }
    else {
        cochePrecio = 0;
    }
    return cochePrecio;
}

function obtenerSeguroPrecio() {
    let seguro = document.getElementById("ejer9seguro").value;
    let seguroPrecio = 0;

    if (seguro === "todoriesgo") {
        seguroPrecio = 20;
    }

    else {
        seguroPrecio = 5;
    }
    return seguroPrecio;
}

function precioAlquilerCoche() {
    let numeroDias = parseInt(document.getElementById("ejer9numerodias").value);
    let fechaNacimiento = parseInt(document.getElementById("ejer9nacimiento").value);
    let fechActual = 2024;

    let edad = fechActual - fechaNacimiento;
    let cochePrecio = 0;
    let seguroPrecio = 0;
    let totalPrecio = 0;
    let mensaje = "";

    if (edad < 25) {
        mensaje = "No es mayor de 25, no puede alquilar coche";
    }
    else {
        cochePrecio = obtenerCochePrecio();
        seguroPrecio = obtenerSeguroPrecio();
        totalPrecio = (numeroDias * cochePrecio) + (numeroDias * seguroPrecio);

        if (numeroDias > 7) {
            let descuento = totalPrecio * 10 / 100; // Descuento si se alquila más de 7 días
            totalPrecio = totalPrecio - descuento;
        }

        let seguroSeleccionado = document.getElementById("ejer9seguro").value;
        if (seguroSeleccionado === "basico") {
            let depositoSeguro = 500;
            mensaje = "El precio total es de: " + totalPrecio + " como ha elegido el seguro básico, debe de dejar un depósito de: " + depositoSeguro;
        }
        else {
            mensaje = "El precio total es de: " + totalPrecio + " y no es necesario ningún depósito";
        }
    }
    imprimir(mensaje, "ejer9resultadocoches");
}

/*EJERCICIO 10 - Crea un programa para mostrar el resultado final.
1. Agrega un nuevo campo para que el usuario introduzca un numero del 1 al 10. Este campo es obligatorio.
2. Agrega un boton adivinar.
- El usuario tendrá 3 intentos.
- Si el numero introducido es igual al ganador (el ganador será el numero 3), mostrará un mensaje diciendo "ha ganado".
- Si el numero introducido no es igual al ganador, mostrará un mensaje diciendo "ha perdido, vuelva a intentarlo", 
y restará uno al número de intentos.
- Si el número de intentos es igual a 0, mostrará un mensaje diciendo, "lo siento no puede jugar más, le quedan 0 intentos".
*/
let intentos = 3;

function adivinar() {
    let numeroElegido = parseInt(document.getElementById("ejer10numero").value);
    let numeroGanador = 3;
    let mensaje = "";

    if (intentos > 0) {

        if (numeroElegido === numeroGanador) {
            mensaje = "¡Has ganado!";
        }
        else {
            intentos--; // --: Es el operador de decremento, que reduce el valor de la variable a su izquierda en 1.
            mensaje = "Ha perdido, vuelve a intentarlo, te quedan: " + intentos + " intentos.";
        }

    }
    else {
        mensaje = "Has perdido, no te quedan más intentos";
    }

    imprimir(mensaje, "ejer10resultado");
}