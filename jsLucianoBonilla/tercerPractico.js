//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
function positivo(num) {
    if (num > 0) {
        console.log("Positivo")
    }else if (num == 0) {
        console.log("Cero")
    }else{
        console.log("Negativo")
    }
}

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
function par(num) {
    if (num % 2 == 0) {
        console.log("Par")
    }else{
        console.log("Impar")
    }
}

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
// let num = prompt("Ingrese un numero")
// console.log("El numero ingresado es: ")
// par(parseInt(num))

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
// let num = prompt("Ingrese el primer numero")
// positivo(num)

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
// let contra = prompt("Ingrese su contraseña")
// if (contra.length > 7 && contra.includes('h')) {
//     console.log("Ingresando..")
// }else{
//     console.log("Contraseña incorrecta")
// }

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
// let nota = prompt("Ingrese la nota")
// if (nota >= 70) {
//     console.log("Aprobado")
// }else{
//     console.log("Desaprobado")
// }

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
function esPalindromo(cadena) {
    const cadenaFormateada = cadena.toLowerCase().replace(/ /g, '');
    const cadenaAlReves = cadenaFormateada.split('').reverse().join('');
    if (cadenaFormateada === cadenaAlReves) {
      return "Es un palíndromo";
    } else {
      return "No es un palíndromo";
    }
  }
//   console.log(esPalindromo("Neuquen")); 
//   console.log(esPalindromo("Hola mundo")); 

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
// let char = prompt("Ingrese una letra")
// switch (char) {
//     case 'a':
//         console.log("Es una vocal")
//         break;
//     case 'e':
//         console.log("Es una vocal")  
//     break;
//     case 'i':
//         console.log("Es una vocal")
//     break;
//     case 'o':
//         console.log("Es una vocal")
//     break;
//     case 'u':
//         console.log("Es una vocal")
//     break;
//     default:
//         console.log("Es una consonante/numero/caracterEspecial")
//         break;
// }


// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// const numeroIngresado = prompt("Ingresa un número del 1 al 7:");
// const numero = parseInt(numeroIngresado);
// switch (numero) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Lunes");
//     break;
//   case 3:
//     console.log("Martes");
//     break;
//   case 4:
//     console.log("Miércoles");
//     break;
//   case 5:
//     console.log("Jueves");
//     break;
//   case 6:
//     console.log("Viernes");
//     break;
//   case 7:
//     console.log("Sábado");
//     break;
//   default:
//     console.log("Número no válido. Ingresa un número del 1 al 7.");
//     break;
// }

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
function esPrimo(numero) {
    // Caso especial: 0 y 1 no son primos
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false; 
      }
    }
    return true;
}
//   const numeroIngresado = prompt("Ingresa un número:");
//   const numero = parseInt(numeroIngresado);
//   if (esPrimo(numero)) {
//     console.log(numero + " es un número primo.");
//   } else {
//     console.log(numero + " no es un número primo.");
//   }
  
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
// let edadIngresada = prompt("Ingrese su edad")
// let edad = parseInt(edadIngresada)
// if (edad >= 18) {
//     console.log("Es mayor de edad")
// }else{
//     console.log("Es menor de edad")
// }


// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
// const primerNumero = prompt("Ingresa el primer número:");
// const segundoNumero = prompt("Ingresa el segundo número:");
// const numero1 = parseFloat(primerNumero);
// const numero2 = parseFloat(segundoNumero);
// const suma = numero1 + numero2;
// if (suma > 100) {
//   console.log("La suma es mayor a 100.");
// } else if (suma < 100) {
//   console.log("La suma es menor a 100.");
// } else {
//   console.log("La suma es igual a 100.");
// }

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
// const primerNumero = prompt("Ingresa el primer número:");
// const segundoNumero = prompt("Ingresa el segundo número:");
// const tercerNumero = prompt("Ingresa el tercer número:");
// const numero1 = parseFloat(primerNumero);
// const numero2 = parseFloat(segundoNumero);
// const numero3 = parseFloat(tercerNumero);
// let mayor;
// if (numero1 >= numero2 && numero1 >= numero3) {
//   mayor = numero1;
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//   mayor = numero2;
// } else {
//   mayor = numero3;
// }
// console.log("El mayor de los tres números es: " + mayor);

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
// Pedir al usuario que ingrese una letra
// const letraIngresada = prompt("Ingresa una letra:");
// if (letraIngresada.length === 1) {
//   const codigoAscii = letraIngresada.charCodeAt(0);
//   if (codigoAscii >= 65 && codigoAscii <= 90) {
//     console.log("La letra ingresada es mayúscula.");
//   } else if (codigoAscii >= 97 && codigoAscii <= 122) {
//     console.log("La letra ingresada es minúscula.");
//   } else {
//     console.log("No has ingresado una letra.");
//   }
// } else {
//   console.log("ingresa solo una letra.");
// }

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      return "FizzBuzz"
    } else if (numero % 3 === 0) {
      return "Fizz"
    } else if (numero % 5 === 0) {
      return "Buzz"
    } else {
      return numero
    }
  }
//   console.log(fizzBuzz(9))
//   console.log(fizzBuzz(10))
//   console.log(fizzBuzz(15))
//   console.log(fizzBuzz(7))
  

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
function esNumeroPerfecto(numero) {
    let sumaDivisores = 0
    for (let i = 1; i <= numero / 2; i++) {
      if (numero % i === 0) {
        sumaDivisores += i
      }
    }
    return sumaDivisores === numero
  }

//   const numeroIngresado = prompt("Ingresa un número:")
//   const numero = parseInt(numeroIngresado);
//   if (esNumeroPerfecto(numero)) {
//     console.log(numero + " es un número perfecto.")
//   } else {
//     console.log(numero + " no es un número perfecto.")
//   }


// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
function descomponerEnFactoresPrimos(numero) {
    let factoresPrimos = [];
    // Dividir por 2 mientras sea divisible
    while (numero % 2 === 0) {
      factoresPrimos.push(2);
      numero /= 2;
    }
    // Probar con los siguientes números primos
    for (let i = 3; i <= numero; i += 2) {
      while (numero % i === 0) {
        factoresPrimos.push(i);
        numero /= i;
      }
    }
    // Si el número restante después de las divisiones es mayor que 2, es un factor primo
    if (numero > 2) {
      factoresPrimos.push(numero);
    }
  
    return factoresPrimos;
  }

//   const numeroIngresado = prompt("Ingresa un número:");
//   const numero = parseInt(numeroIngresado);
//   if (numero > 1) {
//     const factoresPrimos = descomponerEnFactoresPrimos(numero);
//     console.log("La descomposición en factores primos de " + numero + " es: " + factoresPrimos.join(' x '));
//   } else {
//     console.log("Por favor, ingresa un número positivo mayor que 1.");
//   }
  

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
function esFechaValida(dia, mes, anio) {
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    const diasPorMes = [31, esBisiesto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes >= 1 && mes <= 12) {
      if (dia >= 1 && dia <= diasPorMes[mes - 1]) {
        return true;
      }
    }
  
    return false;
  }
  
//   const diaIngresado = parseInt(prompt("Ingresa el día:"));
//   const mesIngresado = parseInt(prompt("Ingresa el mes:"));
//   const anioIngresado = parseInt(prompt("Ingresa el año:"));
//   if (esFechaValida(diaIngresado, mesIngresado, anioIngresado)) {
//     console.log("La fecha ingresada es válida.");
//   } else {
//     console.log("La fecha ingresada no es válida.");
//   }
  
