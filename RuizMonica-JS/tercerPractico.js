//Crear una función que tome dos números como parámetros y devuelva el número mayor.



const esMayor = (num1, num2) => {
    if (num1 > num2) {
      console.log(num1, "es Mayor");
    } else if (num1 === num2){
      console.log("Son iguales")
    } else {
      console.log(num2, "Es mayor");
    }
  };
  
  esMayor(5, 5); //pasando los numeros por parametro
  
  
  //Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
  const posNegaCero = (val1) => {
    if (val1 > 0){
        console.log("Positivo", val1);
    } else if (val1 < 0){
        console.log("Negativo", val1);
    } else{
        console.log("Cero", val1);
    }
  };
  posNegaCero(4);

  //Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
  const divisible = (num) =>{
    if(num % 2 == 0){
        console.log("El numero es Par" , num);
    }else{
        console.log("El numero es Impar", num);
    }

  };
  divisible(8);

  
  //Crear un programa que pida al usuario un número y luego muestre si es par o impar.
  const parImpar = () => {
    let numero = prompt("Ingrese un mumero para verificar:");
    let verificar = parseInt(numero);

    if(verificar %2 == 0){
        console.log("El numero es Par ", verificar);
    }else{
        console.log("El numero es Impar ", verificar);
    }
  };
   parImpar();
  // Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
  const valores = () => {
    let numero = prompt("Ingrese un mumero para verificar:");
    let verificar = parseInt(numero);

    if(verificar > 0){
        console.log("El numero es Positivo ", verificar);
    }else if(verificar === 0 ){
        console.log("El numero es Cero ", verificar);
    } else{
        console.log("El numero es Impar ", verificar);
    }
  };
   valores();
   
  // Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
  const mayorDeDos = () =>{
    let numero1 = parseInt(prompt("Ingresa el primer número:"));
    let numero2 = parseInt(prompt("Ingresa el segundo número:"));

    if (numero1 > numero2) {
        console.log("El primer número es mayor: " + numero1);
    } else if (numero2 > numero1) {
        console.log("El segundo número es mayor: " + numero2);
    } else {
        console.log("Los números son iguales.");
    }

  }
  mayorDeDos();
  
  // Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
  function validarContrasena(contrasena) {
    const longitudMinima = 8;
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";

    if (contrasena.length < longitudMinima) {
        return false;
    }
    const tieneCaracterEspecial = [...contrasena].some(char => caracteresEspeciales.includes(char));
    return tieneCaracterEspecial;
}

let contrasenaIngresada = prompt("Ingrese una contraseña:");
if (validarContrasena(contrasenaIngresada)) {
    console.log("La contraseña es válida.");
} else {
    console.log("La contraseña no cumple con los requisitos mínimos.");
}

  
  // Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
  const aprobado = ()=>{
    let calificacion = parseFloat(prompt("Ingresa tu calificación:"));

    if (calificacion >= 70) {
      console.log("¡Felicidades! Tu calificación es aprobatoria.");
    } else {
      console.log("Lo siento, tu calificación no es aprobatoria.");
    }
  };
  aprobado();

  
  //Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
  function esPalindromo(cadena) {
    // Eliminar espacios y caracteres no alfabéticos y convertir todo a minúsculas
    cadena = cadena.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    if (cadena === cadena.split('').reverse().join('')) {
        return "Es un palíndromo";
    } else {
        return "No es un palíndromo";
    }
}
let cadena = "Anita lava la tina";
let resultado = esPalindromo(cadena);
console.log(resultado);

  
  // Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
  function esVocal(letra) {
    letra = letra.toLowerCase();

    const vocales = 'aeiou';
    // Verificar si es vocal o consonante
        if (vocales.includes(letra)) {
            return `La letra ${letra} es una vocal.`;
        } else {
            return `La letra ${letra} es una consonante.`;
        }
  }
let letraIngresada = prompt("Ingresa una letra del alfabeto:");
let vocal = esVocal(letraIngresada);
console.log(vocal);

  
  // Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
  function obtenerDiaSemana(numero) {
    const diasSemana = [
        'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
    ];

    if (numero >= 1 && numero <= 7) {
        return diasSemana[numero];
    } else {
        return 'Número inválido. Por favor, ingresa un número del 1 al 7.';
    }
}

let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 7:"));

let diaCorrespondiente = obtenerDiaSemana(numeroIngresado);
console.log(diaCorrespondiente);

  // Crear un programa que pida al usuario un número y luego muestre si es primo o no.
  function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    } else if (numero <= 3) {
        return true;
    } else if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
  }
    let num = parseInt(prompt("Ingresa un número para verificar si es primo:"));
    let esPrimoResultado = esPrimo(num);
    
    if (esPrimoResultado) {
        console.log(`${numeroIngresado} es un número primo.`);
    } else {
        console.log(`${numeroIngresado} no es un número primo.`);
    }

  
  // Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
  const edadMayor = ()=>{
    let edadUsuario = parseInt(prompt("Ingresa tu edad:"));

    if (edadUsuario >= 18) {
      console.log("Eres mayor de edad.");
    } else {
      console.log("Eres menor de edad.");
    }
  }
  edadMayor();
  
  // Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
  const sumaCien = ()=> {
    let primerNumero = parseInt(prompt("Ingresa el primer número:"));
    let segundoNumero = parseInt(prompt("Ingresa el segundo número:"));

    let suma = primerNumero + segundoNumero;

    if (suma > 100) {
      console.log(`La suma de los números es mayor a 100.`);
    } else if (suma < 100) {
      console.log(`La suma de los números es menor a 100.`);
    } else {
      console.log(`La suma de los números es igual a 100.`);
    }
  }
  sumaCien();

  // Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
  const mayorDeTres = () =>{
    let primerNumero = parseInt(prompt("Ingresa el primer número:"));
    let segundoNumero = parseInt(prompt("Ingresa el segundo número:"));
    let tercerNumero = parseInt(prompt("Ingresa el tercer número:"));

    let mayor = primerNumero;

    if (segundoNumero > mayor) {
      mayor = segundoNumero;
    }

    if (tercerNumero > mayor) {
      mayor = tercerNumero;
    }

    console.log(`El número mayor de los tres es: ${mayor}`);
  }
  mayorDeTres();

  // Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
  const mayuMinu = ()=>{
    let letra = prompt("Ingresa una letra:");

    if (letra.length === 1) {
      if (letra >= 'A' && letra <= 'Z') {
          console.log("La letra ingresada es mayúscula.");
      } else if (letra >= 'a' && letra <= 'z') {
          console.log("La letra ingresada es minúscula.");
      } else {
          console.log("La entrada no es una letra.");
      }
    } else {
      console.log("Por favor, ingresa una única letra.");
    }
  }
  mayuMinu();

  //Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
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
// Ejemplos de uso
console.log(fizzBuzz(9)); // Devolverá "Fizz"
console.log(fizzBuzz(25)); // Devolverá "Buzz"
console.log(fizzBuzz(15)); // Devolverá "FizzBuzz"
console.log(fizzBuzz(7)); // Devolverá 7

  
  // Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
  function esNumeroPerfecto(numero) {
    if (numero <= 1) {
        return false;
    }
    let sumaDivisores = 1; // Empezamos con 1, que es divisor de todos los números
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
            if (i !== numero / i) {
                sumaDivisores += numero / i;
            }
        }
    }

    return sumaDivisores === numero;
}

let verificar = parseInt(prompt("Ingresa un número para verificar si es perfecto:"));

if (esNumeroPerfecto(verificar)) {
    alert(`${verificar} es un número perfecto.`);
} else {
    alert(`${verificar} no es un número perfecto.`);
}

  
  // Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
  function descomposicionFactoresPrimos(numero) {
    let factoresPrimos = [];
    let divisor = 2;

    while (numero > 1) {
        while (numero % divisor === 0) {
            factoresPrimos.push(divisor);
            numero /= divisor;
        }
        divisor++;
    }

    return factoresPrimos;
}

let valor = parseInt(prompt("Ingresa un número para obtener su descomposición en factores primos:"));

let factoresPrimos = descomposicionFactoresPrimos(valor);

if (factoresPrimos.length === 0 || valor === 1) {
    console.log("No tiene factores primos o el número ingresado es 1.");
} else {
    console.log(`Los factores primos de ${numeroIngresado} son: ${factoresPrimos.join(', ')}`);
}

  
  // Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
  function esAnioBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
  }
  function esFechaValida(dia, mes, anio) {
    const diasEnMes = [
        31, (esAnioBisiesto(anio) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    if (mes < 1 || mes > 12) {
        return false;
    }

    if (dia < 1 || dia > diasEnMes[mes - 1]) {
        return false;
    }

    return true;
  }

  let diaIngresado = parseInt(prompt("Ingresa el día:"));
  let mesIngresado = parseInt(prompt("Ingresa el mes:"));
  let anioIngresado = parseInt(prompt("Ingresa el año:"));

  if (esFechaValida(diaIngresado, mesIngresado, anioIngresado)) {
    console.log("La fecha ingresada es válida.");
  } else {
    console.log("La fecha ingresada no es válida.");
  }
