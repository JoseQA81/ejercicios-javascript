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
    imprimir(mensaje, "e2resultadOperaciones"); //He impreso con la función "imprimir" previamente definida
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

/*function convertirMonedas() {
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
//lo que indica que no hay error y el flujo del programa continuará según lo previsto. */

function convertirMonedas() {
    let num1euros = parseFloat(document.getElementById("ejercicio3").value);
    let cantidadDolares = 1.12;
    let cantidadLibras = 0.85;
    let dolarestotales = num1euros * cantidadDolares;
    let librastotales = num1euros * cantidadLibras;

    let mensaje = "La cantidad de euros " + num1euros + " equivale a  " + librastotales.toFixed(2) + " libras y a  " + dolarestotales.toFixed(2) + " dolares";

    imprimir(mensaje, "e3conversionResultado");
}

//.toFixed(2):Es un método de JavaScript que convierte un número en una cadena, manteniendo un número específico de decimales.
//En este caso, convierte precioProducto a una cadena con 2 decimales.
//Ejemplo:
//Si precioProducto es 1.234, precioProducto.toFixed(2) devuelve "1.23".

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 4 - Crea un formulario para calcular precio total de un producto.
//1. El usuario debe introducir el nombre del producto, el precio y la cantidad. Agrega validación Boostrap. Todos los campos son obligatorios. 
//El nombre debe tener entre 3 y 20 caracteres. El precio no puede ser negativo. La cantidad no puede ser negativa.
//EJERCICIO CON CONDICIONALES (TODAVÍA NO LAS HABÍA EXPLICADO):

/*function calculaPrecioTotal() {
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
} */

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

// EJEMPLO SIN CONDICIONES Ejercicio 4
function calcularPrecioTotal() {
    let nombreProducto = document.getElementById("e4Producto").value;
    let productoPrecio = parseFloat(document.getElementById("e4ProductoPrecio").value);
    let cantidadProducto = parseInt(document.getElementById("e4ProductoCantidad").value);

    let resultado = productoPrecio * cantidadProducto;
    let mensaje = "El producto " + nombreProducto + " cuesta: " + productoPrecio + "\n" + " Cantidad " + cantidadProducto + "\n" + " Tiene un precio total de: " + resultado;

    imprimir(mensaje, "e4calculaPrecioBoton");
}

//EJERCICIO 5
function seleccionaCamiseta() {
    let colorCamiseta = camisetaColor = document.getElementById("colorCamiseta").value;
    let tallaCamiseta = camisetaTalla = document.getElementById("tallaCamiseta").value;

    let mensaje = "RESULTADO\nLa camiseta es de color: " + colorCamiseta + " y talla: " + tallaCamiseta;
    imprimir(mensaje, "e5resultadoFormularios");
}

//EJERCICIO 6
/*
Crea un formulario para introducir la edad del usuario.
La edad debe ser un numero positivo y es obligatorio. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la edad en dias, la edad en minutos y la edad en segundos.

*/
function calcularEdad() {
    let edad = parseInt(document.getElementById("e6Edad").value);

    const DIASYEAR = 365;
    const DIAHORAS = 24;
    const MINUTOSHORA = 60;
    const SEGUNDOSHORA = 3600;
    let dias = edad * DIASYEAR;
    let minutos = dias * DIAHORAS * MINUTOSHORA;
    let segundos = minutos * SEGUNDOSHORA;

    let mensaje = " Si tienes " + edad + " años " + " habrás vivido " + dias + " días, " + minutos + "minutos " + " y " + segundos + " segundos. ";
    imprimir(mensaje, "e6resultado");
}

//EJERCICIO 7
/* Crea un formulario para mostrar información sobre un texto.</h3>
        1. Crea un elemento textArea que reciba un texto de longitud entre 10 y 100 caracteres. Debe ser obligatorio.
            Agrega validación Boostrap.</p>
        2. Agrega un boton que al hacer click llame a una función que muestre un mensaje con el texto completo en
            mayusculas, la primera letra del texto, la última letra y su longitud */

function mostrarTexto() {
    const TEXTO = document.getElementById("e7texto").value;
    const E7RESULTADOTEXTO = document.getElementById("e7resultadoTexto");

    const TEXTOMAYUSCULA = TEXTO.toUpperCase();
    const PRIMERALETRA = TEXTO.charAt(0);
    const ULTIMALETRA = TEXTO.charAt(TEXTO.length - 1);
    const LONGITUDTEXTO = TEXTO.length;


    const MENSAJE = " Texto en mayúscula: " + TEXTOMAYUSCULA + " \nLa primera letra: " + PRIMERALETRA + " \nSu última letra: " + ULTIMALETRA + " \nunto con su longitud: " + LONGITUDTEXTO;
    imprimir(MENSAJE, "e7resultadoTexto");
}

//EJERCICIO 8
/* Crea un formulario para calcular la nota media.</h3>
1. Agrega 3 elementos que reciban numeros entre 0 y 10 y que no pueden estar vacío. Agrega validación
            Boostrap.
2. Agrega un boton que al hacer click llame a una función que muestre un mensaje con la media de los tres números. */

function notaMedia() {
    const PRIMERANOTA = parseFloat(document.getElementById("e8nota1").value);
    const SEGUNDANOTA = parseFloat(document.getElementById("e8nota2").value);
    const TERCERANOTA = parseFloat(document.getElementById("e8nota3").value);

    const NOTAMEDIA = (PRIMERANOTA + SEGUNDANOTA + TERCERANOTA) / 3;
    const RESULTADOMEDIA = document.getElementById("e8resultadoNotaMedia");

    const mensaje = "Nota primer examen: " + PRIMERANOTA + " \nNota segundo examen: " + SEGUNDANOTA + " \nNota tercer examen: " + TERCERANOTA + " \nDa una nota media de: " + NOTAMEDIA.toFixed(1);
    imprimir(mensaje, "e8resultadoNotaMedia");
} /*Preguntar por qué si en html he limitado el número de decimales con "step="0.1", por qué he tenido que agregar
 al final del mensaje toFixed(1) para que me limitase bien los decimales.
  */

//EJERCICIO 9
/* Crea un formulario para que el usuario pueda seleccionar una cantidad de camisetas, que puede
           ser vacio, 1,2 o 3, una cantidad de zapatos también entre vacio, 1,2 o 3 y una cantidad de sombreros, que
           puede ser vacio, 1,2, o 3.
1. Agrega 1 elemento para seleccionar la cantidad de cada producto. El elemento select puede estar vacio.
2. Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre de cada
           producto y su cantidad. Si ha dejado vacio, no mostrará nada en su cantidad. */

function seleccionaCantidad() {
    const cantidadCamisetas = document.getElementById("e9cantidadCamisetas").value || "0";
    const cantidadZapatos = document.getElementById("e9cantidadZapatos").value || "0";
    const cantidadSombreros = document.getElementById("e9cantidadSombreros").value || "0";

    const mensaje = "Cantidad Camisetas: " + cantidadCamisetas + " \nCantidad Zapatos: " + cantidadZapatos + " \nCantidad Sombreros: " + cantidadSombreros;
    imprimir(mensaje, "e9resultadoCantidad");
}

//EJERCICIO 10
/* Crea un formulario para que el usuario pueda introducir el nombre de su mascota, y seleccionar el tipo: perro, gato, tortuga, pájaro.
1. Agrega 1 elemento agregar el nombre de la mascota y el tipo. 
Ambos pueden estar vacíos (el usuario puede no tener mascota, o no ser de ninguno de esos tipos)
2. Agrega un boton que al hacer click llame a una función que muestre un mensaje con los datos de la mascota, es decir, nombre y tipo.  */

function nombreMascota() {
    const NOMBREMASCOTA = document.getElementById("e10nombreMascota").value || "No tengo mascota";
    const TIPOMASCOTA = document.getElementById("e10tipoMascota").value || "No tengo mascota";

    const mensaje = "El nombre de la mascota es: " + NOMBREMASCOTA + "\nEl tipo de mascota es: " + TIPOMASCOTA;
    imprimir(mensaje, "e10resultadoMascota");
}