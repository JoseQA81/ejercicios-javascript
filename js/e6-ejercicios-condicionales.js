//EJERCICIO 1 - Crea un formulario para que el usuario introduzca su edad y vea un mensaje indicando si es mayor de edad o no.
function introducirEdad(){
    let edad = parseInt(document.getElementById("e1edad").value);
    let mensaje = "";

    if(edad >= 18){
        mensaje = "Eres mayor de edad";
    }
    else{
        mensaje = "Eres menor de edad"
    }
    imprimir(mensaje,"e1resultadoEdad");
}

/*EJERCICIO 2 - Crea un formulario que indique cual es el mayor de dos numeros.
            Agrega dos elementos al formulario que reciban dos numeros enteros. Este campo no puede estar vacio.
            Agrega un boton que al hacer click llame a una funcion que indique cual de los dos numeros es el mayor. */
            function introducirNumeros(){
                const numero1 = parseInt(document.getElementById("e2numero1").value);
                const numero2 = parseInt(document.getElementById("e2numero2").value);
                let mensaje = "";

                if(numero1 > numero2) {
                    mensaje = "El número mayor es: " + numero1;
                }
                else if (numero1 < numero2) {
                    mensaje = "El número mayor es: " + numero2;
                }
                else {
                    mensaje = "Los números son iguales";
                }
                imprimir(mensaje,"e2resultadoNumeros");
            }
            