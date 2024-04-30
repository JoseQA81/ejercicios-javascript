//1. DECLARAR UNA VARIABLE
//Nombre de variable recomendado en minuscula
let variable;
//Nombre de variable si tiene espacio, usar camelCase, que es la primera palabra minuscula y la siguiente mayuscula sin espacios
let miVariable;
//Podeis usar guiones para separar los espacios pero es mas recomendable camelCase.
let mi_variable;
//Los nombres de las variables no pueden comenzar por un numero 2Nombre
//Los nombres de las variables pueden tener un numero siempre y cuando no empiece por el
let variable2;

//2.INICIAR UNA VARIABLE
//Primero declarar la variable y luego iniciarla.
document.write("EJEMPLO 1: INICIAR UNA VARIABLE CIUDAD </br>");

let ciudad;
ciudad = "Madrid";
document.write("La variable ciudad tiene el valor: " + ciudad);

//Declarar la variable e iniciarla a la vez
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad = 33;
//cambiamos el valor de la variable edad
edad = 42;
document.write("La variable edad tiene el valor: " + edad);


//TIPOS DE VARIABLES
//NUMERO ENTERO O CON DECIMALES. LOS DECIMALES VAN CON PUNTO. Y SIEMPRE SIN COMILLAS LOS NUMEROS.
document.write("</br> EJEMPLO 3: CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es:" + numero);
document.write("</br>");
document.write("El numero con decimales es "+ numeroDecimales);
//CADENAS. Pueden usarse comillas simples o dobles. No las mezcles, usa solo una de ellas. Cuidado con caracteres especiales, no pueden ir comillas del mismo tipo dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARIABLE DE TIPO TEXTO - STRING </br>");
let saludo = "Hola que tal?";
let despedida = 'Adios me voy';
let numeroEnTexto = "33";
document.write("La variable de texto saludo es: "+ saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
//BOOLEANOS. true o false. En minuscula y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARIABLE DE TIPO BOOLEANO </br>");
let estaSoleado = true;
let esDeDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es de dia es:" + esDeDia);

//EJERCICIOS PARA PRACTICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>");
document.write("</br> EJERCICIO 1 - DECLARAR VARIABLES SOBRE INFORMACIÓN DE PERSONAS </br>")

let apelativo;
apelativo = 'José Andrés';
document.write('1- My name is: ' + apelativo);
document.write("</br>");

let surname;
surname = 'Lorca Gálvez';
document.write('2- My surname is:' + surname);
document.write("</br>");

let age = 42;
document.write('3- My age is:' + age);
document.write("</br>");

let height = '1.75cm';
document.write('4- My height is:' + height);
document.write("</br>");

let city;
city = 'Totana';
document.write('5- I live in:' + city);
document.write("</br>");

let beachYes = true;
let beachNo = false;
document.write('6- Do you like to go to the beach?' + beachYes);
document.write("</br>");

let mountainYes = true;
let mountainNo = false;
document.write('7- Do you like the mountains?' + mountainYes);
document.write("</br>");

let meGusta = true;
let noMeGusta = false;
let depende = 'a veces';
document.write('8- Do you like chocolate?' + depende);
document.write("</br>");

let petYes = true;
let petNo = false;
document.write('9- Do you have a pet?' + false);
document.write("</br>");
//CAMBIAR VALORES POR ALGUIEN QUE CONOZCO
document.write("</br> CAMBIAR VALORES PERSONA </br>");

apelativo = 'María Jesús';
surname = 'Lorenzo Mateo';
age = 37;
height = '1.65cm';
city = 'Murcia';
beachNo;
mountainNo;
meGusta = 'true';
document.write("</br>");
document.write('1.1- Her name is: ' + apelativo + '<br>');
document.write('2.2- Her surname is:' + surname + '<br>');
document.write('3.3- Her age is:' + age + '<br>');
document.write('4.4- Her height is:' + height + '<br>');
document.write('5.5- Where she lives is:' + city + '<br>');
document.write('6.6- Does she like the beach?:' + beachNo + '<br>');
document.write('7.7- Does she like the mountain?:' + mountainNo + '<br>');
document.write('8.8- Does she like chocolate?:' + meGusta + '<br>');
document.write('9.9- Does she have a pet?:' + petYes + '<br>');

document.write("</br> EJERCICIO  2 - DECLARAR VARIABLES SOBRE INFORMACIÓN PELÍCULA FAVORITA </br>")

let movieTitle = 'John Wick';
let director = 'Chad Stahelski';
let movieYear = 2014;
let genre = 'Action. Thriller - Crime. Revenge';
let duration = '101 min';
let awardsYes = true;
let awardsNo = false;
document.write('<br>');
document.write('The movie title is:' + movieTitle + '<br>');
document.write('The director of the movie is:' + director + '<br>');
document.write('The year of the film is:' + movieYear + '<br>');
document.write('The film genre is:'+genre+'<br>');
document.write('The duration is:' + duration + '<br>');
document.write('Does the movie have any award?:' + awardsYes + '<br>');

document.write("</br> EJERCICIO  2.1 - CAMBIA EL VALOR DEL TÍTULO Y GÉNERO DE LA PELÍCULA </br>")

movieTitle = 'Naruto Shippuden';
director = 'Hayato Date';
movieYear = 2002;
genre = 'shonen';
duration = '21 min per episode';
awardsYes;
document.write('<br>');
document.write('The movie title is:' + movieTitle + '<br>');
document.write('The director of the movie is:' + director + '<br>');
document.write('The year of the film is:' + movieYear + '<br>');
document.write('The film genre is:'+genre+'<br>');
document.write('The duration is:' + duration + '<br>');
document.write('Does the movie have any award?:' + awardsYes + '<br>');

document.write("</br> EJERCICIO  3 - DECLARAR VARIABLES SOBRE UNA CANCIÓN </br>")

let songTitle = 'Sweet Child o Mine';
let artist = "Guns N'Roses";
let album = 'Appetite For Destruction';
let releaseYear = 1987;
let minDuration = '5:56 min';
let videoclipYes = true;
let videoclipNo = false;
document.write('<br>');
document.write('The title of the song is:' + songTitle + '<br>');
document.write('The name of the artist is:' + artist + '<br>');
document.write('The name of the of the album is:' + album + '<br>');
document.write('What is the year of release?:' + releaseYear + '<br>');
document.write('How long is the song?:' + minDuration + '<br>');
document.write('Does the song a videoclip?:' + videoclipYes + '<br>');

document.write("</br> EJERCICIO  3.1 - CAMBIAR LOS VALORES POR OTRA CANCIÓN </br>")

songTitle = 'Su culo es miel';
artist ='Extermoduro';
album = 'Canciones Prohibidas';
releaseYear = 1998;
minDuration = '5:58 min';
videoclipNo;
document.write('<br>');
document.write('The title of the song is:' + songTitle + '<br>');
document.write('The name of the artist is:' + artist + '<br>');
document.write('The name of the of the album is:' + album + '<br>');
document.write('What is the year of release?:' + releaseYear + '<br>');
document.write('How long is the song?:' + minDuration + '<br>');
document.write('Does the song a videoclip?:' + videoclipNo + '<br>');

document.write("</br> EJERCICIO  4 - DECLARAR VARIABLES PARA UN LIBRO </br>")

let bookTitle = 'The House On Mango Street';
let author = 'Sandra Cisneros';
let literaryGenre = 'Novel';
let publicationYear = 1984;
let pagesNumber = 144;
let movieYes = true;
let movieNo = false;
document.write('<br>');
document.write('The book title is:' + bookTitle + '<br>');
document.write('Who is the author?:' + author + '<br>');
document.write('What is the literary genre :' + literaryGenre + '<br>');
document.write('What is the year of release?:' + publicationYear + '<br>');
document.write('How many pages the book has?:' + pagesNumber + '<br>');
document.write('Is there a movie adaption of the book?:' + movieNo + '<br>');

document.write("</br> EJERCICIO  4.1 - DECLARAR VARIABLES PARA UN LIBRO DE OTRA PERSONA </br>")

bookTitle = '100 Años de soledad';
author = 'Gabriel García Márquez';
literaryGenre = 'Novel';
publicationYear = 1967;
pagesNumber = 471;
mountainNo;
document.write('<br>');
document.write('The book title is:' + bookTitle + '<br>');
document.write('Who is the author?:' + author + '<br>');
document.write('What is the literary genre :' + literaryGenre + '<br>');
document.write('What is the year of release?:' + publicationYear + '<br>');
document.write('How many pages the book has?:' + pagesNumber + '<br>');
document.write('Is there a movie adaption of the book?:' + movieNo + '<br>');

document.write("</br> EJERCICIO  5 - DECLARAR VARIABLES PARA UN DEPORTE </br>")

let sport = 'Fútbol';
let origin = 'Britania';
let popularity = 10;
let equipmentRequired = 'Soccer ball, goalposts, soccer field or stadium, gear (boots, shirt, shorts, goalkeeper gloves, people)';
let teamSportYes = true;
let teamSportNo = false;
let outdoorYes = true;
let outdoorNo = false;
document.write('<br>');
document.write('Sport Name:' + sport + '<br>');
document.write('Place of origin:' + origin + '<br>');
document.write('Is this sport popular? Mention it on a scale of 1 to 10:' + popularity + '<br>');
document.write('What is the required equipment?:' + equipmentRequired + '<br>');
document.write('Is that sport a team sport?:' + teamSportYes + '<br>');
document.write('Is it practiced outdoor?:' + outdoorYes + '<br>');

document.write("</br> EJERCICIO  5.1 - CAMBIAR VARIABLES PARA MOSTRAR EL DEPORTE NATACUÓN.</br>")

sport = 'Swimming';
origin = 'London , 1837';
popularity = 7;
equipmentRequired = 'Sea or swimming pool and swimming cap';
teamSportNo;
depende;
document.write('<br>');
document.write('Sport Name:' + sport + '<br>');
document.write('Place of origin:' + origin + '<br>');
document.write('Is this sport popular? Mention it on a scale of 1 to 10:' + popularity + '<br>');
document.write('What is the required equipment?:' + equipmentRequired + '<br>');
document.write('Is that sport a team sport?:' + teamSportNo + '<br>');
document.write('Is it practiced outdoor):' + depende + '<br>');

document.write("</br> EJERCICIO  6 - DECLARAR VARIABLES PARA VIAJES. DESTINO DE VIAJE FAVORITO</br>")

let destination = 'Kioto';
let country = 'Japón';
let predominantClimate = 'Damp';
let population = '1.465.000 ';
let touristAttraction = 'Fushimi Inari-Taisha (Santuario principal al dios Inari), Templo del Pabellón de Oro (Kinkaku-ji), Kiyomizu-dera (Templo del agua pura), \ el mercado del distrito de Nishiki, Eikan-do (templo con unos jardines perfectos), Castillo Nijo';
let coastalDestination = true;
let coastalDestinationNo = false;
let urbanDestination = true;
let urbanDestinationNo = false;
document.write('<br>');
document.write('Nombre del destino:' + destination + '<br>');
document.write('Nombre país:' + country + '<br>');
document.write('¿Cuál es el clima predominante?:' + predominantClimate + '<br>');
document.write('¿Cuál es su población?:' + population + '<br>');
document.write('Principales atracciones turísticas:' + touristAttraction + '<br>');
document.write('¿Es un destino costero?:' + coastalDestination + '<br>');
document.write('Es un destino urbano?:' + depende + '<br>');

document.write("</br> EJERCICIO  6.1 - CAMBIAR VARIABLES CON DESTINO MÁLAGA</br>")

