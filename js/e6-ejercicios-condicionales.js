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
    imprimir(mensaje,"e6calculadoraresultado");

}

