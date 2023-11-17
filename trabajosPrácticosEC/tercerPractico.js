//Crear una función que tome dos números como parámetros y devuelva el número mayor.

const esMayor = (num1, num2) => {
    if (num1 > num2) {
      console.log(num1, "es Mayor");
    } else if (num1 === num2){
      console.log("Son iguales")
    } else {
      console.log(num2, "Es mayor");
    }
  }; esMayor(5, 5);

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const PositivoONegativo = (num3) => {
    if (num3 > 0) {
        console.log("Este número es positivo");
    } else if (num3 === 0) {
        console.log("Este número es igual a cero");
    } else {
        console.log("Este número es negativo");
    }
}; PositivoONegativo (0);

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

const Divisible = (num4) => {
    if (num4 % 2 === 0) {
        console.log("Es PAR");
} else {
    console.log("IMPAR"); 
}
}; Divisible (24);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

/*const ParOImpar = () => {
    let num5 = prompt("Ingresa el primer número")
    num5 = parseFloat(num5)
    if (num5 % 2 === 0) {
        console.log("Es par");}
        else {
            console.log("Es impar")
        }
}; ParOImpar (num5)*/

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

/*const PositivoNegativoOCero =() => {
    let num6 = prompt("Ingresa un número, bro")
    num6 = parseFloat(num6)
    if (num6 > 0) {
        console.log("Positivo"); }
        else if (num6 === 0) {
            console.log("Es igual a cero");
        } else { console.log("Negativo");
}}; PositivoNegativoOCero ();
*/

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

/* const ElMayor =() => {
    let num7 = prompt("Ingresa el primer número")
    num7 = parseFloat(num7)
    let num8 = prompt("Ingresa el segundo número")
    num8 = parseFloat(num8)
    let nums = [num7 , num8]
    let numMax = math.mathMax(...nums)
    console.log(numMax)
}; ElMayor (); */

/* const ElMayor =() => {
    let num7 = prompt("Ingresa el primer número");
    num7 = parseFloat(num7);
    let num8 = prompt("Ingresa el segundo número");
    num8 = parseFloat(num8);
    if (num7 > num8) {
        console.log("El primer número es el mayor");}
        else { console.log("El segundo es el mayor") }
    }; ElMayor (); */

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

/* const Contrasena = () => {
    let password = prompt("Inserte su contraseña jeje");
    let caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/
    if (password.length > 8 ) {
        console.log("La contraseña es muy larga, pa")
    }
    else if (caracteresEspeciales.test(password)) {
       console.log("La constraseña tiene carácteres que no Messirven")
    }
    else {
        console.log("Messirve tu contraseña")}
}; Contrasena (); */

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

/* const Calificacion = () => {
    let score = prompt("Pon una calificacion(?");
    score = parseFloat(score);
    if (score >= 70) {
        console.log("Aprueba")}
    else {
        console.log("No apruebas, bro")
    } }; Calificacion(); */

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

/* function palindromo (cadena) {
    let array = cadena.split("");
    let reverse = array.reverse();
    return cadena == reverse.join("") ? "Si es una palíndromo" : "No es una palíndromo"
} console.log(palindromo("bob")) */

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

/*  const Vocal = () => {
    let letra = prompt("Pon una letra");
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("Es una vocal");
    }
    else {
        console.log("Es una consonante");
        }
    }; Vocal ();  */


// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.


/* let dia = prompt("Ingresar un numero 1-7")
  const diaSemana = (dia) => {
    if(dia == 1){
       console.log("Lunes")
    }else if(dia == 2){
        console.log("Martes")
    }else if(dia == 3){
        console.log("Miercoles")
    }
    else if(dia == 4){
        console.log("Jueves")
    }
     else if(dia == 5){
         console.log("Viernes")
     }
     else if(dia == 6){
        console.log("Sabado")
     }
     else if(dia == 7){
        console.log("Domingo")
    }
 }
 diaSemana(dia) */

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

/* const esPrimo = () => {
    let numIngresado = prompt("Ingresa un número!!!");
    numIngresado = parseFloat(numIngresado);
    if (numIngresado % 2 === 0) {
        console.log("No es un número primo ya que es par")}
    else if (numIngresado % numIngresado === 0 ) {
        console.log("Es un número primo")
    } else (numIngresado === 2); {
        console.log("Es un número primo también gg");}
}; esPrimo(); */
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

/* const edadUsuario = () => {
    let edadMia = prompt("Pon tu edad aquí");
    edadMia = parseFloat(edadMia);
    if (edadMia >= 18) {
        console.log("Sos mayor de edad y entras a GITANA");  
    } else {
        console.log("No entras a GITANA ya que sos menor de edad");
    }
}; edadUsuario (); */

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

/* const dosNumeros= () => {
    let num1 = prompt("Pon el PRIMER número aquí");
    num1 = parseFloat(num1);
    let num2 = prompt("Pon el SEGUUUNDO númeoro aquí");
    num2 = parseFloat(num2);
    if (num1 + num2 > 100) {
        console.log("Es mayor a 100");
    } else if (num1 + num2 === 100) {
        console.log("Es igual a 100");
    } else {
        console.log("Es menor a 100")
    }
}; dosNumeros (); */


// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

/* const tresNumeros = () => {
    let num1 = prompt("Primero");
    num1 = parseFloat(num1);
    let num2 = prompt("Segundo");
    num2 = parseFloat(num2);
    let num3 = prompt("Tercero");
    if (num1 > num2 && num1 > num3) {
        console.log("El primer número es el mayor");
    } else if (num2 > num1 && num2 > num3) {
        console.log("El segundo es el mayor");
    } else if (num3 > num1 && num3 > num2) {
        console.log("El tercero es el mayor");
    } else {
        console.log("Hay números iguales");
    }
}; tresNumeros (); */

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

/* const letrasMayusOMinus = () => {
    let letra = prompt("Ingresa una letra");
    if (letra >= "A" && letra <= "Z") {
        console.log("Es una letra mayúscula");
    }
    else if (letra >= "a" && letra <= "z") {
        console.log("Es una letra minúscula");
    }
    else {
        console.log("No es una letra lo que pusiste bro");
    }
}; letrasMayusOMinus (); */

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

const palabrasRaras = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz")
    } else if (numero % 5 === 0) {
        console.log("Buzz")
    } else if (numero % 3) {
        console.log("Fizz")}
        else {
            console.log(numero)
        }
}; palabrasRaras (30); 

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

/* const numeroPerfecto = (numero) => {
    let sumaDivisores = 0;
    for (let i = 1 ; i < numero ; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    } 
    if (sumaDivisores === numero) {
        return true;
    } else {
        return false;
    }
};
let numeroUsuario = prompt("Ingresa un número:");
numeroUsuario = parseInt(numeroUsuario);

if (numeroPerfecto(numeroUsuario)) {
    console.log(numeroUsuario + "es un número perfecto");
} else {
    console.log( numeroUsuario + "no es un número perfecto");
} *//*ME AYUDÉ CON CHAT GPT Y GOOGLE PARA HACER ESTE*/

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.



// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.



//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const posiNegaCero = (num) => {
    if (num >  0) {
        console.log("Positivo")
    } else if (num === 0) {
        console.log("Es iguak a cero") 
} else {
    console.log("Negativo")
}
}; posiNegaCero(-5);