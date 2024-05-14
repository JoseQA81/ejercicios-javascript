//EJERCICIOS
//5. FORMULARIOS, FUNCIONES Y EVENTOS.

//1. Crea un formulario para introducir nombre, ciudad y fecha de nacimiento. 
//1- Agrega validación con Boostrap. Todos los campos son obligatorios. El nombre y la ciudad debe tener entre 3 y 30 caracteres. La fecha de nacimiento tiene que estar entre 1900 y 2024. 
//2- Agrega un boton que al hacer click llame a una función que muestre un mensaje de bienvenida con los datos introducidos.

function mostrarMensaje() {
    let nombre = document.getElementById("ejercicio1Nombre").value;
    let ciudad = document.getElementById("ejercicio1Ciudad").value;
    let fechaNacimiento = document.getElementById("e1fecha").value;

    let mensaje = "¡Bienvenido/a, " + nombre + "! Eres de " + ciudad + " y naciste el " + fechaNacimiento + ".";
    document.getElementById("e1bienvenida").innerText = mensaje;
    //Con "alert(mensaje);" en vez de debajo del botón, el mensaje se muestra en un cuadro de diálogo.
}

//2. Crea un formulario para introducir dos numeros. 
//1- Agrega validación con Boostrap. Todos los campos son obligatorios. Solo admite numeros de cualquier tipo.
//2- Agrega un boton que al hacer click llame a una función que muestre un mensaje con el resultado de la suma, la resta, la multiplicación y la división de esos dos números.

function calcularOperaciones() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let resultadoSumar = numero1 + numero2;
    let resultadoRestar = numero1 - numero2;
    let resultadoMultiplicar = numero1 * numero2;
    let resultadoDividir = numero1 / numero2;

    //Para cuadro diálogo alert("Suma: " + resultadoSuma + "\nResta: " + resultadoResta + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir);
    let mensaje = "La suma: " + resultadoSumar + "\nResta: " + resultadoRestar + "\nMultiplicación: " + resultadoMultiplicar + "\nresultadoDividir: " + resultadoDividir;
    document.getElementById("e2resultadOperaciones").innerText = mensaje;
}
//"\nResta: ": La secuencia de escape \n representa un salto de línea en el mensaje. 
//Por lo tanto, esto coloca "Resta: " en una nueva línea en el mensaje emergente.

//parseFloat: he utilizado parseFloat para convertir el valor obtenido de los campos de entrada HTML (que están en formato de texto)
// en números decimales que puedas utilizar en cálculos matemáticos. Esto es útil porque cuando obtienes el valor de un campo de entrada
// en HTML, JavaScript lo trata como una cadena de texto, incluso si el usuario ha ingresado un número.
// Entonces, al utilizar parseFloat, conviertes esas cadenas de texto en valores numéricos que puedes
// sumar, restar, multiplicar o dividir según sea necesario en tu código.

//3. Crea un formulario para convertir monedas. El usuario debe introducir una catidad en euros. 
//1. Agrega validación con boostrap, el campo es obligatorio, debe ser un número positivo.
//2. Agrega un boton que al hacer click llame a una función que muestre un mensaje con la cantidad en dólares y en libras.

function convertirMonedas() {
    //Obtener la cantidad en €
    let cantidadEuros = parseFloat(document.getElementById("ejercicio3").value);

    //Verificar si la cantidad en un número positivo - //isNaN: La función isNaN intenta convertir el valor pasado como argumento a un número.
    // Si la conversión tiene éxito, devuelve false. Si la conversión falla y el valor no se puede interpretar como un número válido, devuelve true.
    if (isNaN(cantidadEuros) || cantidadEuros < 0) {
        //Mostrar mensaje de error si la cantidad no es válida
        mensajeConversion("Ingresa una cantidad válida en €.", " ", " ");
    } else {
        //Conversión de dólares a libras
        let cantidadDolares = cantidadEuros * 1.12; // 1€ equivale a 1.12 USD
        let cantidadLibras = cantidadEuros * 0.85; // 1€ equivale a 0.85 GBP 
        //Resultado de la conversión
        mensajeConversion("", cantidadDolares.toFixed(2) + " dólares ", cantidadLibras.toFixed(2) + " libras ");
        //Las comillas vacías "" indican que no hay mensaje de error en esta llamada específica a la función mensajeConversion().
        //.toFixed(2):Es un método de JavaScript que convierte un número en una cadena, manteniendo un número específico de decimales.
        //En este caso, convierte precioProducto a una cadena con 2 decimales.
        //Ejemplo:
        //Si precioProducto es 1.234, precioProducto.toFixed(2) devuelve "1.23".
        //Esto asegura que el precio se muestre con dos decimales, que es un formato común para precios.
    }
}

function mensajeConversion(error, dolares, libras) {
    let mensaje = "";
    if (error !== "") {
        mensaje = `<div class="alert alert-danger">${error}</div>`; //Si hay un mensaje de error, esta línea establece el contenido de mensaje
        // como un div de alerta de Bootstrap con una clase "alert-danger", que muestra el mensaje de error al usuario
    } else {
        mensaje = `<div class="alert alert-success">Cantidad en Dólares: ${dolares}<br>Cantidad en Libras: ${libras}</div>`;
    }
    document.getElementById("e3conversionResultado").innerHTML = mensaje;
}
//La condición error !== "" se evalúa como verdadera si la variable error no es una cadena vacía. En otras palabras, este condicional verifica
//si hay un mensaje de error. Si error tiene contenido (no es una cadena vacía), el bloque de código dentro del if se ejecutará, lo que significa
//que hay un mensaje de error y se manejará en consecuencia. Si error está vacío (es una cadena vacía), el bloque if no se ejecutará,
//lo que indica que no hay error y el flujo del programa continuará según lo previsto.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 4 - Crea un formulario para calcular precio total de un producto.
//1. El usuario debe introducir el nombre del producto, el precio y la cantidad. Agrega validación Boostrap. Todos los campos son obligatorios. 
//El nombre debe tener entre 3 y 20 caracteres. El precio no puede ser negativo. La cantidad no puede ser negativa.

function calculaPrecioTotal() {
    let nombreProducto = document.getElementById("e4Producto").value;
    let precioProducto = parseFloat(document.getElementById("e4ProductoPrecio").value);
    let cantidadProducto = parseInt(document.getElementById("e4ProductoCantidad").value);

    //Validar que los valores sean correctos
    if (nombreProducto.length >= 3 && nombreProducto.length <= 20 && !isNaN(precioProducto) && precioProducto >= 0 && !isNaN(cantidadProducto) && cantidadProducto >= 0) {
        //Calcular precio total
        let precioTotal = precioProducto * cantidadProducto;
        //Mostrar resultado
        document.getElementById("e4calculaPrecioBoton").innerText = `Producto: ${nombreProducto}\nCantidad: ${cantidadProducto}\nPrecio unidad: ${precioProducto.toFixed(2)} €\nPrecio Total: ${precioTotal.toFixed(2)} €`;
    } else {
        // Mostrar un mensaje de error si los valores no son válidos
        document.getElementById("e4calculaPrecioBoton").innerText = "Por favor, introduce valores válidos";
    }
}
//Template Literals y ${} en JavaScript
//Los template literals son una forma de crear cadenas de texto en JavaScript que permite incluir variables y expresiones dentro de las cadenas
//de manera más sencilla y legible. Se delimitan con backticks (`) en lugar de comillas simples (') o dobles (").
//Dentro de un template literal, ${} se usa para insertar variables o expresiones directamente en la cadena.
//Esto se llama interpolación de variables

/*Uso de ${}
Dentro de un template literal, ${} se usa para insertar variables o expresiones directamente en la cadena. 
Esto se llama interpolación de variables.

Ejemplo Básico
Supongamos que tenemos dos variables:

let nombre = "Juan";
let edad = 30;

Con template literals y ${}, podemos crear una cadena que incluya estos valores de manera sencilla:

let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

Sin template literals, tendrías que hacer algo como esto:

let mensaje = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años."; */
