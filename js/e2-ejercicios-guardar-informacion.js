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

document.write("</br> EJERCICIO  2 - DECLARAR VARIABLES SOBRE INFORMACIÓN PELÍCULA FAVORITA </br>");

let movieTitle = 'John Wick';
let director = 'Chad Stahelski';
let movieYear = 2014;
let genre = 'Action. Thriller - Crime. Revenge';
let duration = '101 min';
let hasAwards = true;
document.write('<br>');
document.write('The movie title is:' + movieTitle + '<br>');
document.write('The director of the movie is:' + director + '<br>');
document.write('The year of the film is:' + movieYear + '<br>');
document.write('The film genre is:'+genre+'<br>');
document.write('The duration is:' + duration + '<br>');
document.write('Does the movie have any award?:' + hasAwards + '<br>');

document.write("</br> EJERCICIO  2.1 - CAMBIA EL VALOR DEL TÍTULO Y GÉNERO DE LA PELÍCULA </br>");

movieTitle = 'Naruto Shippuden';
director = 'Hayato Date';
movieYear = 2002;
genre = 'shonen';
duration = '21 min per episode';
hasAwards;
document.write('<br>');
document.write('The movie title is:' + movieTitle + '<br>');
document.write('The director of the movie is:' + director + '<br>');
document.write('The year of the film is:' + movieYear + '<br>');
document.write('The film genre is:'+genre+'<br>');
document.write('The duration is:' + duration + '<br>');
document.write('Does the movie have any award?:' + hasAwards + '<br>');

document.write("</br> EJERCICIO  3 - DECLARAR VARIABLES SOBRE UNA CANCIÓN </br>");

let songTitle = 'Sweet Child o Mine';
let artist = "Guns N'Roses";
let album = 'Appetite For Destruction';
let releaseYear = 1987;
let minDuration = 5.6;
let hasVideoclip = true;
document.write('<br>');
document.write('The title of the song is:' + songTitle + '<br>');
document.write('The name of the artist is:' + artist + '<br>');
document.write('The name of the of the album is:' + album + '<br>');
document.write('What is the year of release?:' + releaseYear + '<br>');
document.write('How long is the song?:' + minDuration + '<br>');
document.write('Does the song a videoclip?:' + hasVideoclip + '<br>');

document.write("</br> EJERCICIO  3.1 - CAMBIAR LOS VALORES POR OTRA CANCIÓN </br>");

songTitle = 'Su culo es miel';
artist ='Extermoduro';
album = 'Canciones Prohibidas';
releaseYear = 1998;
minDuration = 5.6;
hasVideoclip = false;
document.write('<br>');
document.write('The title of the song is:' + songTitle + '<br>');
document.write('The name of the artist is:' + artist + '<br>');
document.write('The name of the of the album is:' + album + '<br>');
document.write('What is the year of release?:' + releaseYear + '<br>');
document.write('How long is the song?:' + minDuration + '<br>');
document.write('Does the song a videoclip?:' + hasVideoclip + '<br>');

document.write("</br> EJERCICIO  4 - DECLARAR VARIABLES PARA UN LIBRO </br>");

let bookTitle = 'The House On Mango Street';
let author = 'Sandra Cisneros';
let literaryGenre = 'Novel';
let publicationYear = 1984;
let pagesNumber = 144;
let movie = false;
document.write('<br>');
document.write('The book title is:' + bookTitle + '<br>');
document.write('Who is the author?:' + author + '<br>');
document.write('What is the literary genre :' + literaryGenre + '<br>');
document.write('What is the year of release?:' + publicationYear + '<br>');
document.write('How many pages the book has?:' + pagesNumber + '<br>');
document.write('Is there a movie adaption of the book?:' + movie + '<br>');

document.write("</br> EJERCICIO  4.1 - DECLARAR VARIABLES PARA UN LIBRO DE OTRA PERSONA </br>");

bookTitle = '100 Años de soledad';
author = 'Gabriel García Márquez';
literaryGenre = 'Novel';
publicationYear = 1967;
pagesNumber = 471;
movie;
document.write('<br>');
document.write('The book title is:' + bookTitle + '<br>');
document.write('Who is the author?:' + author + '<br>');
document.write('What is the literary genre :' + literaryGenre + '<br>');
document.write('What is the year of release?:' + publicationYear + '<br>');
document.write('How many pages the book has?:' + pagesNumber + '<br>');
document.write('Is there a movie adaption of the book?:' + movie + '<br>');

document.write("</br> EJERCICIO  5 - DECLARAR VARIABLES PARA UN DEPORTE </br>");

let sport = 'Fútbol';
let origin = 'Britania';
let popularity = 10;
let equipmentRequired = 'Soccer ball, goalposts, soccer field or stadium, gear (boots, shirt, shorts, goalkeeper gloves, people)';
let teamSport = true;
let outdoor = true;
document.write('<br>');
document.write('Sport Name:' + sport + '<br>');
document.write('Place of origin:' + origin + '<br>');
document.write('Is this sport popular? Mention it on a scale of 1 to 10:' + popularity + '<br>');
document.write('What is the required equipment?:' + equipmentRequired + '<br>');
document.write('Is that sport a team sport?:' + teamSport + '<br>');
document.write('Is it practiced outdoor?:' + outdoor + '<br>');

document.write("</br> EJERCICIO  5.1 - CAMBIAR VARIABLES PARA MOSTRAR EL DEPORTE NATACUÓN.</br>");

sport = 'Swimming';
origin = 'London , 1837';
popularity = 7;
equipmentRequired = 'Sea or swimming pool and swimming cap';
teamSport = false;
depende;
document.write('<br>');
document.write('Sport Name:' + sport + '<br>');
document.write('Place of origin:' + origin + '<br>');
document.write('Is this sport popular? Mention it on a scale of 1 to 10:' + popularity + '<br>');
document.write('What is the required equipment?:' + equipmentRequired + '<br>');
document.write('Is that sport a team sport?:' + teamSport + '<br>');
document.write('Is it practiced outdoor):' + depende + '<br>');

document.write("</br> EJERCICIO  6 - DECLARAR VARIABLES PARA VIAJES. DESTINO DE VIAJE FAVORITO</br>");

let destination = 'Kyoto';
let country = 'Japón';
let predominantClimate = 'Damp';
let population = 1465000;
let touristAttraction = `
Fushimi Inari-Taisha (Santuario principal al dios Inari),
Templo del Pabellón de Oro (Kinkaku-ji),
Kiyomizu-dera (Templo del agua pura),
el mercado del distrito de Nishiki,
Eikan-do (templo con unos jardines perfectos), Castillo Nijo
    `;

console.log(touristAttraction); //DE MOMENTO NO ME HACE LOS SALTOS DE LÍNEA CON (``) NI CON: console.log(touristAttraction);

let coastalDestination = false;
let urbanDestination = true;
document.write('<br>');
document.write('Nombre del destino:' + destination + '<br>');
document.write('Nombre país:' + country + '<br>');
document.write('¿Cuál es el clima predominante?:' + predominantClimate + '<br>');
document.write('¿Cuál es su población?:' + population + '<br>');
document.write('Principales atracciones turísticas:' + touristAttraction + '<br>');
document.write('¿Es un destino costero?:' + coastalDestination + '<br>');
document.write('Es un destino urbano?:' + urbanDestination + '<br>');

document.write("</br> EJERCICIO  6.1 - CAMBIAR VARIABLES CON DESTINO MÁLAGA</br>");

destination = 'Málaga';
country = 'España';
predominantClimate = 'Soleado';
population = 579076;
touristAttraction = 'Fortaleza de la Alcazaba, Catedral de Málaga, Castillo de Gibralfaro, Puerto de Málaga, Calle Larios, Plaza de la Constitución, \ Teatro Romano, Mirador del Gibralfaro, Basílica de Santa María de la Victoria, Iglesia de los Mártires.';
document.write('<br>');
document.write('Nombre del destino:' + destination + '<br>');
document.write('Nombre país:' + country + '<br>');
document.write('¿Cuál es el clima predominante?:' + predominantClimate + '<br>');
document.write('¿Cuál es su población?:' + population + '<br>');
document.write('Principales atracciones turísticas:' + touristAttraction + '<br>');
document.write('¿Es un destino costero?:' + coastalDestination + '<br>');
document.write('Es un destino urbano?:' + urbanDestination + '<br>');

document.write('</br> EJERCICIO  7 - CONSTANTES</br>');

const NUMEROMESESYEAR = 12;
document.write('The year has 12 months: ' + NUMEROMESESYEAR + ' meses');
document.write('<br>');

const NUMBERWEEKDAYS = 7;
document.write('The week has seven days: ' + NUMBERWEEKDAYS + ' days');
document.write('</br>');

let populationMyCity = 32329;
document.write('Population of my city: ' + populationMyCity + ' people');
document.write('<br>');

let singerAge = 61;
document.write('The age of my favourite singer is: ' + singerAge + ' years old');
document.write('<br>');

const YEARSEASONS = 4;
document.write('There are four seasons: ' + YEARSEASONS + ' seasons');
document.write('<br>');

let myCity = 'Totana';
document.write('The name of my city is: ' + myCity + ', en la Región de Murcia');
document.write('<br>');

const DAYHOURS = 24;
document.write('The day has twenty-four hours: ' + DAYHOURS + ' hours');
document.write('<br>');

let petrolPrice = 'Muy cara';
document.write('The price of petrol is: ' + petrolPrice);
document.write('<br>');

let bookRead = 18;
document.write('I have read eighteen books: ' + bookRead + ' books');
document.write('<br>');
