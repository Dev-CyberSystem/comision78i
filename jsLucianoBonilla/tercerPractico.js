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
  
// SEGUNDA PARTE
// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// Pedir al usuario que ingrese un número del 1 al 12
// const numeroMes = parseInt(prompt("Ingresa un número del 1 al 12 para obtener el nombre del mes:"))
// if (numeroMes >= 1 && numeroMes <= 12) {
//   const nombresMeses = [
//     "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//   ]
//   const nombreMes = nombresMeses[numeroMes - 1]
//   console.log("El mes correspondiente al número " + numeroMes + " es: " + nombreMes)
// } else {
//   console.log("Por favor, ingresa un número del 1 al 12.")
// }


// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// const numDia = parseInt(prompt("Ingresa un número del 1 al 7 para obtener el dia de la semana:"))
// if (numDia >= 1 && numDia < 8) {
//   const diasSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
//   const dia = diasSemana[numDia - 1]
//   console.log("El dia ingresado es: " + dia)
// }else
// {
//  console.log("Por favor, ingresa un número del 1 al 7.")
// }



// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// const caracter = prompt("Ingresa un carácter:");
// const esVocal = "aeiouAEIOU".includes(caracter);
// const esConsonante = /^[a-zA-Z]$/.test(caracter) && !esVocal;
// if (esVocal) {
//   console.log("El carácter ingresado es una vocal.");
// } else if (esConsonante) {
//   console.log("El carácter ingresado es una consonante.");
// } else {
//   console.log("Por favor, ingresa un carácter válido.");
// }

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// Pedir al usuario que ingrese un número del 1 al 5
// const numeroDia = parseInt(prompt("Ingresa un número del 1 al 5 para obtener el nombre del día de la semana:"))
// if (numeroDia >= 1 && numeroDia <= 5) {
//   const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
//   const nombreDia = nombresDias[numeroDia - 1]
//   console.log("El día de la semana correspondiente al número " + numeroDia + " es: " + nombreDia)
// } else {
//   console.log("Por favor, ingresa un número del 1 al 5.")
// }

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// const letra = prompt("Ingresa una letra:")
// if (letra.length === 1) {
//   const codigoAscii = letra.charCodeAt(0)

//   if (codigoAscii >= 65 && codigoAscii <= 90) {
//     console.log("La letra ingresada es mayúscula.")
//   } else if (codigoAscii >= 97 && codigoAscii <= 122) {
//     console.log("La letra ingresada es minúscula.")
//   } else {
//     console.log("No has ingresado una letra.")
//   }
// } else {
//   console.log("Por favor, ingresa solo una letra.")
// }

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// Pedir al usuario que ingrese una nota del 0 al 10
// const nota = parseInt(prompt("Ingresa tu nota (del 0 al 10):"));
// if (nota >= 0 && nota <= 10) {
//   let calificacion;
//   if (nota < 5) {
//     calificacion = "Suspenso";
//   } else if (nota < 7) {
//     calificacion = "Aprobado";
//   } else if (nota < 9) {
//     calificacion = "Notable";
//   } else {
//     calificacion = "Sobresaliente";
//   }
//   console.log("Tu calificación es: " + calificacion);
// } else {
//   console.log("Por favor, ingresa una nota válida del 0 al 10.");
// }


// Imprimir los números pares del 2 al 20 en la consola.
// for (let i = 0; i <= 10; i++) {
//    console.log(i*2)
// }


// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// const inputString = prompt("Ingresa una palabra o frase:");
// for (let i = 0; i < inputString.length; i++) {
//   const letra = inputString[i].toUpperCase();
//   console.log(letra);
// }


// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// const num = prompt("Ingrese un numero mayor que 1")
// if (num > 1) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i)
//   }
// }else{
//   console.log("Ingrese un numero valido")
// }


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// const cadenaNum = prompt("Ingrese una serie de numeros separados por una coma")
// let separada = cadenaNum.split(",")
// let mayor = 0
// for (let i = 0; i < separada.length; i++) {
//   if (separada[i] > mayor) {
//      mayor = separada[i]
//   }
// }
// console.log("El numero mayor es: " + mayor)


// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// const palabra = prompt("Ingrese una palabra")
// console.log(esPalindromo(palabra))

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// const cadenaNum = prompt("Ingrese una serie de numeros separados por una coma")
// let separada = cadenaNum.split(",")
// let suma = 0
// for (let i = 0; i < separada.length; i++) {
//   if (parseInt(separada[i]) % 2 == 0) {
//      suma += parseInt(separada[i])
//   }
// }
// console.log("suma de pares es: " + suma)


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// const cadenaNum = prompt("Ingrese una serie de numeros separados por una coma")
// let separada = cadenaNum.split(",")
// let cant = 0
// for (let i = 0; i < separada.length; i++) {
//   if (parseInt(separada[i]) < 0) {
//      cant++
//   }
// }
// console.log("cant de negativos es: " + cant)


// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// const numeroIngresado = parseInt(prompt("Ingresa un número:"));
// if (numeroIngresado > 0) {
//   for (let i = 1; i <= numeroIngresado; i += 2) {
//     console.log(i);
//   }
// } else {
//   console.log("Por favor, ingresa un número válido mayor que 0.");
// }


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// const cadenaNum = prompt("Ingrese una serie de numeros separados por una coma")
// let separada = cadenaNum.split(",")
// let menor = 1000000000
// for (let i = 0; i < separada.length; i++) {
//   if (separada[i] < menor) {
//      menor = separada[i]
//   }
// }
// console.log("El numero menor es: " + menor)


// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let intentos = 0;
// let adivinanzaCorrecta = false;
// while (!adivinanzaCorrecta) {
//   intentos++;
//   const intentoUsuario = parseInt(prompt("Intenta adivinar el número (entre 1 y 100):"));
//   if (intentoUsuario >= 1 && intentoUsuario <= 100) {
//     if (intentoUsuario === numeroAleatorio) {
//       adivinanzaCorrecta = true;
//       console.log("¡Adivinaste el número! Cantidad de intentos: " + intentos);
//     } else {
//       console.log("Intento incorrecto. Sigue intentando.");
//     }
//   } else {
//     console.log("Por favor, ingresa un número válido entre 1 y 100.");
//   }
// }


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// const cadenaNum = prompt("Ingrese una serie de numeros separados por una coma")
// let separada = cadenaNum.split(",")
// let cant = 0
// for (let i = 0; i < separada.length; i++) {
//   if (parseInt(separada[i]) % 2 == 0) {
//      cant++
//   }
// }
// console.log("cant de pares es: " + cant)


// Dado un array de números, escribir una función que retorne el número más grande del array.
function encontrarNumeroMasGrande(array) {
  if (array.length === 0) {
    return undefined
  }
  let maximo = array[0]; 
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximo) {
      maximo = array[i]
    }
  }
  return maximo
}
// const numeros = [3, 7, 1, 9, 5, 2, 8];
// const resultado = encontrarNumeroMasGrande(numeros)
// console.log("El número más grande es: " + resultado)


// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
function filtrarNumerosPares(array) {
  return array.filter(numero => numero % 2 === 0)
}
// const numeros = [3, 7, 1, 9, 5, 2, 8]
// const numerosPares = filtrarNumerosPares(numeros)
// console.log("Números pares del array original: " + numerosPares)


// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
function sumarNumerosManual(array) {
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    suma += array[i]
  }
  return suma
}
// const numeros = [3, 7, 1, 9, 5, 2, 8]
// const sumaTotal = sumarNumerosManual(numeros)
// console.log("La suma de todos los números es: " + sumaTotal)


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
function convertirAMayusculasManual(arrayDeStrings) {
  let resultado = []
  for (let i = 0; i < arrayDeStrings.length; i++) {
    let stringEnMayusculas = arrayDeStrings[i].toUpperCase();
    resultado.push(stringEnMayusculas)
  }
  return resultado
}
// const strings = ["hola", "mundo", "javascript"];
// const stringsMayusculas = convertirAMayusculasManual(strings);
// console.log("Strings en mayúsculas: " + stringsMayusculas);


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
function filtrarMayoresQueXManual(array, X) {
  let resultado = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > X) {
      resultado.push(array[i])
    }
  }
  return resultado
}
// const numeros = [3, 7, 1, 9, 5, 2, 8];
// const X = 5;
// const numerosMayoresQueX = filtrarMayoresQueXManual(numeros, X);
// console.log("Números mayores que " + X + ": " + numerosMayoresQueX);


// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
function sumarYFiltrar(array) {
  let sumaTotal = 0
  let numerosGrandes = []
  for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i]

    if (array[i] > 10) {
      numerosGrandes.push(array[i])
    }
  }
  return { sumaTotal, numerosGrandes }
}
// const numeros = [3, 7, 11, 9, 5, 2, 8];
// const resultado = sumarYFiltrar(numeros);
// console.log("La suma total es: " + resultado.sumaTotal);
// console.log("Números mayores que 10: " + resultado.numerosGrandes);



// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
function filtrarStringsMasLargos(arrayDeStrings) {
  let resultado = []
  for (let i = 0; i < arrayDeStrings.length; i++) {
    if (arrayDeStrings[i].length > 5) {
      resultado.push(arrayDeStrings[i])
    }
  }
  return resultado
}
// const strings = ["hola", "mundo", "javascript", "programacion"];
// const stringsMasLargos = filtrarStringsMasLargos(strings);
// console.log("Strings con más de 5 caracteres: " + stringsMasLargos);


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
function filtrarStringsMasLargosQueEmpiezanConA(arrayDeStrings) {
  let resultado = []
  for (let i = 0; i < arrayDeStrings.length; i++) {
    const stringActual = arrayDeStrings[i]
    if (stringActual.length > 5 && stringActual.charAt(0).toLowerCase() === 'a') {
      resultado.push(stringActual)
    }
  }
  return resultado
}
// const strings = ["hola", "mundo", "javascript", "programacion", "Acerca", "Arriba"]
// const stringsFiltrados = filtrarStringsMasLargosQueEmpiezanConA(strings)
// console.log("Strings con más de 5 caracteres que empiezan con 'a': " + stringsFiltrados)


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
function filtrarYLimitarManual(array, X) {
  let numerosMayoresQueX = []
  let contador = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > X) {
      numerosMayoresQueX.push(array[i])
      contador++

      if (contador === 3) {
        break 
      }
    }
  }

  return numerosMayoresQueX
}
// const numeros = [3, 7, 11, 9, 5, 2, 8];
// const X = 5;
// const resultado = filtrarYLimitarManual(numeros, X);
// console.log("Números mayores que " + X + " (limitados a 3): " + resultado);



// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
function sumarUnoAArrayOriginal(array) {
  let resultado = []
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] + 1)
  }
  return resultado
}
// const numeros = [3, 7, 11, 9, 5, 2, 8]
// const resultado = sumarUnoAArrayOriginal(numeros)
// console.log("Array original sumándole 1 a cada número: " + resultado)


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
function quitarUltimoElemento(array) {
  let resultado = []
  for (let i = 0; i < array.length - 1; i++) {
    resultado.push(array[i])
  }
  return resultado
}
// const numeros = [3, 7, 11, 9, 5, 2, 8]
// const resultado = quitarUltimoElemento(numeros)
// console.log("Array original sin el último número: " + resultado)



// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
function quitarPrimerYUltimoElemento(array) {
  if (array.length < 3) {
    // Si el array tiene menos de 3 elementos, no se puede quita el primero y el último
    return []
  }

  let resultado = []
  for (let i = 1; i < array.length - 1; i++) {
    resultado.push(array[i])
  }
  return resultado
}
// const numeros = [3, 7, 11, 9, 5, 2, 8]
// const resultado = quitarPrimerYUltimoElemento(numeros)
// console.log("Array original sin el primero y el último: " + resultado)



// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
function quitarElementoEnPosicionX(array, X) {
  if (X < 0 || X >= array.length) {
    // Si la posición X está fuera del rango del array, devuelve el array original
    return array
  }
  let resultado = []
  for (let i = 0; i < array.length; i++) {
    if (i !== X) {
      resultado.push(array[i])
    }
  }

  return resultado
}
// const numeros = [3, 7, 11, 9, 5, 2, 8]
// const posicionX = 2
// const resultado = quitarElementoEnPosicionX(numeros, posicionX)
// console.log("Array original sin el elemento en la posición " + posicionX + ": " + resultado)
