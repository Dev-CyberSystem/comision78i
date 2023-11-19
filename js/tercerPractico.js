// Tarea

//Crear una función que tome dos números como parámetros y devuelva el número mayor.
const esMayor = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1, "es Mayor");
    } else if (num1 === num2) {
        console.log("Son iguales")
    } else {
        console.log(num2, "Es mayor");
    }
};
esMayor(5, 5); //pasando los numeros por parametro

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
const signo = (num1) => {
    if (num1 > 0) {
        console.log("Positivo");
    } else {
        if (num1 < 0) {
            console.log("Negativo");
        } else {
            console.log("Cero");
        }
    }
}
signo(3);
signo(-9);
signo(0);

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
const paridad = (num1) => num1 % 2 === 0 ? "Par" : "Impar";
console.log(paridad(6));

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const parImpar = () => {
    num1 = prompt("Ingrese un numero: ");
    console.log(paridad(num1));
}
// parImpar();

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
const signoEs = () => {
    num1 = prompt("Ingrese un numero: ");
    signo(num1);
}
// signoEs();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const mayor = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1);
    } else {
        if (num1 < num2) {
            console.log(num2);
        } else {
            console.log("Son iguales");
        }
    }
}
mayor(5, 7);
mayor(9, 1);
mayor(2, 2);

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const contrasenia = () => {
    patronContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    pass = prompt("Ingrese una contrasenia: ");
    if (patronContrasenia.test(pass)) {
        console.log("Contrasenia Valida");
    } else {
        console.log("Contrasenia NO Valida: faltan mayusculas, minusculas o numeros");
    }
}
// contrasenia();

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
const aprobatoria = () => {
    nota = prompt("Ingrese la nota: ");
    resultado = nota >= 70 ? "Aprobado" : "Desaprobado";
    console.log(resultado);
}
// aprobatoria();

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
const esPalindromo = () => {
    cadena = prompt("Ingrese la cadena: ");
    const cadenaNormal = cadena.toLowerCase().replace(/\s/g, '');
    let cadenaAlReve = "";
    for (let index = cadenaNormal.length - 1; 0 <= index; index--) {
        cadenaAlReve += cadenaNormal[index];
    }
    console.log(cadenaNormal);
    console.log(cadenaAlReve);
    if (cadenaNormal == cadenaAlReve) {
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}
// esPalindromo();

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
const esVocal = () => {
    let letra = prompt("Ingrese una letra: ");
    letra = letra.toLowerCase();
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("Es una vocal");
            break;
        default:
            console.log("NO es una vocal");
            break;
    }
}
// esVocal();

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const diaSemana = () => {
    let dia = prompt("Ingrese un numero (1 - 7): ");
    dia = parseInt(dia);
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Numero Incorrecto");
            break;
    }
}
// diaSemana();

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
const esPrimo = () => {
    let numero = prompt("Ingrese un numero: ");
    numero = parseInt(numero);
    let resulatado = true;
    if (numero <= 1) {
        resulatado = false;
    } else {
        for (let index = 2; index < numero; index++) {
            if (numero % index === 0) {
                resulatado = false;
            }
        }
    }
    if (resulatado) {
        console.log("Es Primo");
    } else {
        console.log("NO es Primo");
    }
}
// esPrimo();

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const mayorEdad = () => {
    const edad = prompt("Ingrese su edad: ");
    if (edad >= 18) {
        console.log("ES mayor de edad");
    } else {
        console.log("NO es mayor de edad");
    }
}
// mayorEdad();

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const relacionNumeros = () => {
    let num1 = prompt("Ingrese un numero: ");
    num1 = parseFloat(num1);
    let num2 = prompt("Ingrese otro numero: ");
    num2 = parseFloat(num2);

    if (num1 + num2 > 100) {
        console.log("Suma mayor a 100");
    } else {
        if (num1 + num2 < 100) {
            console.log("Suma menor a 100");
        } else {
            console.log("Suma igual a 100");
        }
    }
}
// relacionNumeros();

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
const elMayor = () => {
    let num1 = parseFloat(prompt("Ingrese un numero: "))
    let num2 = parseFloat(prompt("Ingrese otro numero: "));
    let num3 = parseFloat(prompt("Ingrese otro numero: "));

    if (num1 > num2 && num1 > num3) {
        console.log("Num 1 es el mayor");
    } else {
        if (num2 > num1 && num2 > num3) {
            console.log("Num 2 es el mayor");
        } else {
            console.log("Num 3 es el mayor");
        }
    }
}
// elMayor();

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const esMayuscula = () => {
    let letra = prompt("Ingrese una letra: ");
    letra = letra.charCodeAt(0);
    if (65 <= letra && letra <= 90) { // Codigo ASCII
        console.log("Es una letra mayuscula");
    } else {
        console.log("Es una letra minuscula");
    }
}
// esMayuscula();

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
const divisibleFrase = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
divisibleFrase(9);
divisibleFrase(10);
divisibleFrase(15);
divisibleFrase(7);

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
const numeroPerfecto = () => {
    let numero = prompt("Ingrese un numero: ");
    numero = parseInt(numero);

    let divisores = 0;
    for (let index = 1; index < numero; index++) {
        if (numero % index === 0) {
            divisores += index
        }
    }
    if (divisores === numero) {
        console.log("Es un numero perfecto");
    } else {
        console.log("NO es un numero perfecto");
    }
}
// numeroPerfecto();

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
const factoresPrimos = () => {
    let numero = parseInt(prompt("Ingrese un numero: "));
    if (numero <= 1) {
        console.log("Ingrese un numero valido");
    }
    let factoresPrimos = [];
    let divisor = 2;
    while (numero > 1) {
        while (numero % divisor === 0) {
            factoresPrimos.push(divisor);
            numero /= divisor;
        }
        divisor++;
    }
    console.log(factoresPrimos.join(' * '));
}
// factoresPrimos();

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
const esBisiesto = (anio) => {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true;
    } else {
        return false;
    }
} 
const fechaValida = () => {
    let fecha = prompt("Ingrese una fecha (dd-mm-aaaa): ").split("-");
    for (let index = 0; index < fecha.length; index++) {
        fecha[index] = parseInt(fecha[index]); 
    }
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (esBisiesto(fecha[2])) {
        diasPorMes[1] = 29;
    }

    if (fecha[0] < 1 || fecha[0] > diasPorMes[fecha[1] - 1]) {
        console.log("Fecha no valida");
    } else {
        console.log("Fecha valida");
    }

}
// fechaValida();