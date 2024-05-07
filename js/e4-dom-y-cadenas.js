//JAVASCRIPT DOM. OBTENER ELEMENTOS DE LA PAGINA POR SU ID
//Obtener el elemento html con id ejemplo
let parrafoEjemplo = document.getElementById("ejemplo");
//Modificar el texto del elemento html con id ejemplo
parrafoEjemplo.innerText = "Hola Bootcamp QA";

//Obtener el elemento html con id ejemploTitulo
let tituloEjemplo = document.getElementById("ejemploTitulo");
let miNombre = "José Andrés";
let miEdad = "42";
tituloEjemplo.innerText = "Hola, mi nombre es " + miNombre + " y mi edad es " + miEdad + " años";

//Obtener el ejemplo html con id ejemplo2 y agregar un texto con etiquetas html
let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.innerHTML = "<b>Ejemplo 2 en negrita</b>";

//Crear un nuevo párrafo dentro del div con id contenido
let divContenido = document.getElementById("contenido");
let nuevoTitulo = document.createElement("h3");
nuevoTitulo.innerText = "Ejemplo Crear Elementos desde JavaScript";
divContenido.appendChild(nuevoTitulo);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Hola soy un nuevo párrafo creado";
divContenido.appendChild(nuevoParrafo);

//Obtener el atributo del elemento a con id ejemplo 3 y agregarle una url
let ejemplo3 = document.getElementById("ejemplo3");
let paginaWeb = "https://bootcampqa.com";
ejemplo3.href = paginaWeb;

//Obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

//CADENAS O STRINGS EN JAVASCRIPT
//Escapar caracteres especiales en una cadena se hace con \
let cadenaEjemplo = "Hola mi nombre es  \"Jose\" que tal estás?";
let ejemplo5 = document.getElementById("ejemplo5");
ejemplo5.innerText = cadenaEjemplo;

//Contar carácteres de una string
let ejemploContar = "Bienvenidos al Bootcamp QA";
let totalLetrasCadenaEjemplo = ejemploContar.length;

let ejemplo6 = document.getElementById("ejemplo6");
ejemplo6.innerText = "La cadena " + ejemploContar + " tiene un total de " + totalLetrasCadenaEjemplo + " carácteres";

//Obtener la letra en la posición que elijas de la cadena
let primeraLetra = ejemploContar [0]; //La primera siempre empieza en 0
let ultimaLetra = ejemploContar [ejemploContar.length - 1]; //El total de letras de la cadena, menos uno porque empieza en 0
let ejemplo7 = document.getElementById("ejemplo7");
ejemplo7.innerText = "La primera letra de la palabra " + " es " + primeraLetra + " y la última letra es " + ultimaLetra;

//Cambiar la cadena todo a mayusculas o minusculas
let cadenaMayusculas = ejemploContar.toLocaleUpperCase();
let cadenaMinusculas = ejemploContar.toLocaleLowerCase();

let ejemplo8 = document.getElementById("ejemplo8");
ejemplo8.innerText = "La cadena " + ejemploContar + " mayúsculas: " + cadenaMayusculas + " minúsculas: " + cadenaMinusculas;

//sustituir texto de una cadena
//Sustituir una palabra por otra
let nuevaCadena = ejemploContar.replace("Bootcamp QA","Mi Web");
let ejemplo9 = document.getElementById("ejemplo9");
ejemplo9.innerText = "Antes de reemplazar " + ejemploContar + " después de reemplazar " + nuevaCadena;
//Sustituir una palabra por una variable
let mensajeBienvenida = "Bienvenido estudiante";
let nombreEstudiante = "José Andrés";
let nuevoMensajeBienvenida = mensajeBienvenida.replace("estudiante", nombreEstudiante);
let ejemplo10 = document.getElementById("ejemplo10");
ejemplo10.innerText = "Antes de reemplazar " + mensajeBienvenida + " después de reemplazar " + nuevoMensajeBienvenida;

//EJERCICIO 4 - CADENAS (TEXTOS)
//Crea una variable con la frase Hola que tal, bienvenida a QA, y muestrala junto con:
//Creo la variable
let fraseEjercicio4 = "Hola que tal, bienvenido/a a QA";

//Mostrar la frase
let ejercicio4 = document.getElementById("ejercicio4");
ejercicio4.innerText = "Muestro la frase: " + fraseEjercicio4;

//Su longitud
let longitudFrase = fraseEjercicio4.length;
ejercicio4.innerText = "La frase " + fraseEjercicio4 + " tiene una longitud " + longitudFrase + " carácteres ";

//La posición de la palabra QA
let posicionQa = fraseEjercicio4.indexOf("QA");
let elementoPosicionQa = document.getElementById("QAposicion");
elementoPosicionQa.innerText = "La posición de la palabra QA es la número " + posicionQa;

//La primera letra de la frase
primeraLetra = fraseEjercicio4[0];
let posicionLetra1 = document.getElementById("posicionLetra1");
posicionLetra1.innerText = "La primera letra de la frase: " + fraseEjercicio4 + " es: " + primeraLetra;

//La última letra de la frase
ultimaLetra = fraseEjercicio4[fraseEjercicio4.length - 1];
let ultimaLetraPosicion = document.getElementById("ultimaLetraPosicion");
ultimaLetraPosicion.innerText = "La última letra de la frase: " + fraseEjercicio4 + " es: " + ultimaLetra;

//Crea una variable nueva extrayendo la palabra "Hola" de la cadena.
let extraerHola = fraseEjercicio4.slice(-27);
let palabraHola = document.getElementById("extraerHola");
palabraHola.innerText = "Extrayendo la palabra 'HOLA' " + extraerHola;

//Crea una variable nueva extrayendo la palabra QA de la cadena.
let extraerQa = fraseEjercicio4.substring(0,28);
let palabraQa = document.getElementById("extraerQa");
palabraQa.innerText = "Extrayendo la palabra 'QA' " + extraerQa;

//Crea una variable con la palabra bienvenida.
let bienvenida = "bienvenida";

//Muestra la frase completa en mayúscula.
let cadenaBienvenida = bienvenida.toUpperCase();
let palabraBienvenida = document.getElementById("bienvenida");
palabraBienvenida.innerText = "Voy a mostrar la frase " + cadenaBienvenida + " en mayúscula ";

//Muestra la frase completa en minúscula
cadenaBienvenida = bienvenida.toLocaleLowerCase();
palabraBienvenida = document.getElementById("bienvenida");
palabraBienvenida.innerText = "Voy a mostrar la frase " + cadenaBienvenida + " en minúscula ";

//Cambia la palabra bienvenida, por bienvenido
let nuevaPalabra = "bienvenido";
let mensajeNuevoBienvenida = nuevaPalabra.replace("bienvenida",nuevaPalabra);
let nuevaEntrada = document.getElementById("nuevaEntrada");
nuevaEntrada.innerText = "Voy a cambiar la palabra bienvenida por su masculino: " + mensajeNuevoBienvenida;


