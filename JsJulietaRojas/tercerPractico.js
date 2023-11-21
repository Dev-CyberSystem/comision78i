//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

function verificarNumero(numero) {
    if (isNaN(numero)) {
        return "No es un número válido";
    } else if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.--

console.log(verificarNumer(5)); 
console.log(verificarNumer(-3));
console.log(verificarNumer(0));  
console.log(verificarNumer("Hola")); 

function determinarParOImpar(numer) {
    if (numer % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Ejemplos de uso de la función:
console.log(determinarParOImpar(4)); 
console.log(determinarParOImpar(7));  
console.log(determinarParOImpar(0));  
console.log(determinarParOImpar(-1));  

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.--

// Pedir al usuario que ingrese un número
let numer = parseInt(prompt("Por favor, ingresa un número:"));

// Verificar si el número es par o impar
if (numer % 2 === 0) {
    console.log("El número ingresado es par.");
} else {
    console.log("El número ingresado es impar.");
}


//Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero--
// Pedir al usuario que ingrese un número
let numeroo = parseFloat(prompt("Por favor, ingresa un número:"));

// Verificar si el número es positivo, negativo o cero
if (numeroo > 0) {
    console.log("El número ingresado es positivo.");
} else if (numeroo < 0) {
    console.log("El número ingresado es negativo.");
} else {
    console.log("El número ingresado es cero.");
}


//Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.--

function encontrarMayor() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingresa números válidos.");
    } else {
        if (numero1 > numero2) {
            console.log("El primer número es mayor:", numero1);
        } else if (numero2 > numero1) {
            console.log("El segundo número es mayor:", numero2);
        } else {
            console.log("Ambos números son iguales:", numero1);
        }
    }
}

encontrarMayor();

//Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.--

function validarContraseña(contraseña) {
    // Verificar la longitud mínima
    const longitudMinima = 8;

// La contraseña no cumple con la longitud mínima
    if (contraseña.length < longitudMinima) {
        return false; 
    }

// La contraseña no contiene caracteres especiales
    const expresionCaracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!expresionCaracteresEspeciales.test(contraseña)) {
        return false; 
    }

    return true; // La contraseña cumple con todas las condiciones
}

const contraseñaIngresada = prompt("Ingresa tu contraseña:");
if (validarContraseña(contraseñaIngresada)) {
    console.log("¡La contraseña es válida!");
} else {
    console.log("La contraseña no cumple con los requisitos mínimos.");
}


//Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).--

document.getElementById('calificacionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    let calificacion = parseFloat(document.getElementById('calificacionInput').value);

    // Verificar si la calificación es aprobatoria o no
    if (!isNaN(calificacion)) {
        if (calificacion >= 70) {
            document.getElementById('resultado').innerText = "¡Felicidades! Tu calificación es aprobatoria.";
        } else {
            document.getElementById('resultado').innerText = "Lo siento, tu calificación no es suficiente para aprobar.";
        }
    } else {
        document.getElementById('resultado').innerText = "Por favor, ingresa una calificación válida.";
    }
});


//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".--

function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y quitar los espacios
    let cadenaSinEspacios = cadena.toLowerCase().replace(/ /g, '');

    // Obtener el reverso de la cadena
    let reversoCadena = cadenaSinEspacios.split('').reverse().join('');

    // Verificar si la cadena es igual a su reverso
    if (cadenaSinEspacios === reversoCadena) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}

// Ejemplo de uso:
let resultado = esPalindromo("Anita lava la tina");
console.log(resultado); // Mostrará: "Es un palíndromo"


//Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.--

// Pedir al usuario que ingrese una letra
let letraa = prompt("Por favor, ingresa una letra:").toLowerCase();

// Verificar si es una vocal o una consonante
if (letra.length === 1 && /^[a-z]$/.test(letra)) {
    if (/[aeiou]/.test(letra)) {
        console.log("La letra ingresada es una vocal.");
    } else {
        console.log("La letra ingresada es una consonante.");
    }
} else {
    console.log("Por favor, ingresa una sola letra del alfabeto.");
}

//Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.--

// Pedir al usuario que ingrese un número del 1 al 7
let nume = parseInt(prompt("Por favor, ingresa un número del 1 al 7:"));

// Determinar el día de la semana correspondiente
let diaSemana;
switch (nume) {
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Lunes";
        break;
    case 3:
        diaSemana = "Martes";
        break;
    case 4:
        diaSemana = "Miércoles";
        break;
    case 5:
        diaSemana = "Jueves";
        break;
    case 6:
        diaSemana = "Viernes";
        break;
    case 7:
        diaSemana = "Sábado";
        break;
    default:
        diaSemana = "Número inválido. Por favor, ingresa un número del 1 al 7.";
}

console.log("El número " + numero + " corresponde a " + diaSemana + ".");

//Crear un programa que pida al usuario un número y luego muestre si es primo o no.--

// Pedir al usuario que ingrese un número
let numerooo = parseInt(prompt("Por favor, ingresa un número:"));

// Verificar si el número es primo
let esPrimo = true;

if (numero === 1 || numero === 0) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

// Mostrar si el número es primo o no
if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}

//Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).--

// Pedir al usuario que ingrese su edad
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Verificar si es mayor o menor de edad
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

//Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.--

// Pedir al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2= parseFloat(prompt("Ingresa el segundo número:"));

// Calcular la suma de los números
let suma = numero1 + numero2;

// Comparar la suma con 100
if (suma > 100) {
    console.log("La suma de los números es mayor a 100.");
} else if (suma < 100) {
    console.log("La suma de los números es menor a 100.");
} else {
    console.log("La suma de los números es igual a 100.");
}

//Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.--

// Pedir al usuario que ingrese tres números
let nuro1 = parseFloat(prompt("Ingresa el primer número:"));
let nuro2 = parseFloat(prompt("Ingresa el segundo número:"));
let nuro3 = parseFloat(prompt("Ingresa el tercer número:"));

// Determinar el número mayor
let mayor = nuro1;

if (nuro2 > mayor) {
    mayor = numero2;
}

if (nuro3 > mayor) {
    mayor = numero3;
}

console.log("El número mayor de los tres es: " + mayor);

//Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.--

// Pedir al usuario que ingrese una letra
let letra = prompt("Por favor, ingresa una letra:");

// Verificar si es mayúscula o minúscula
if (letra.length === 1 && letra.match(/[a-zA-Z]/)) {
    if (letra === letra.toUpperCase()) {
        console.log("La letra ingresada es mayúscula.");
    } else {
        console.log("La letra ingresada es minúscula.");
    }
} else {
    console.log("Por favor, ingresa una sola letra del alfabeto.");
}

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.--

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero;
    }
}

// Ejemplo de uso:
console.log(fizzBuzz(9));  // Mostrará: "Fizz"
console.log(fizzBuzz(10)); // Mostrará: "Buzz"
console.log(fizzBuzz(15)); // Mostrará: "FizzBuzz"
console.log(fizzBuzz(7));  // Mostrará: 7


//Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.--

function esNumeroPerfecto(numero) {
    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === numero) {
        return true;
    } else {
        return false;
    }
}

// Solicitar al usuario un número
let numero = parseInt(prompt("Por favor, ingresa un número:"));

// Verificar si el número es perfecto o no
if (esNumeroPerfecto(numero)) {
    console.log("El número " + numero + " es un número perfecto.");
} else {
    console.log("El número " + numero + " no es un número perfecto.");
}

//Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos. --

function descomposicionFactoresPrimos(numero) {
    let factoresPrimos = [];
    let divisor = 2;

    while (numero > 1) {
        if (numero % divisor === 0) {
            factoresPrimos.push(divisor);
            numero /= divisor;
        } else {
            divisor++;
        }
    }

    return factoresPrimos;
}

// Solicitar al usuario un número
let numeroUsuario = parseInt(prompt("Ingresa un número para descomponer en factores primos:"));

// Verificar si el número es válido
if (numeroUsuario <= 1 || isNaN(numeroUsuario)) {
    console.log("Por favor, ingresa un número mayor que 1.");
} else {
    // Obtener los factores primos y mostrar la descomposición
    let factoresPrimos = descomposicionFactoresPrimos(numeroUsuario);
    console.log("La descomposición en factores primos de " + numeroUsuario + " es: " + factoresPrimos.join(', '));
}


//Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.--


function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

function esFechaValida(dia, mes, anio) {
    if (mes < 1 || mes > 12) {
        return false;
    }

    const diasPorMes = [31, 28 + (esBisiesto(anio) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }

    return true;
}

// Pedir al usuario que ingrese una fecha (día, mes y año)
let dia = parseInt(prompt("Ingresa el día:"));
let mes = parseInt(prompt("Ingresa el mes:"));
let anio = parseInt(prompt("Ingresa el año:"));

// Verificar si la fecha es válida
if (esFechaValida(dia, mes, anio)) {
    console.log("La fecha ingresada es válida.");
} else {
    console.log("La fecha ingresada no es válida.");
}
