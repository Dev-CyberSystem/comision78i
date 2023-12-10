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
  
  esMayor(5, 6);

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const comparar = (numX) => {
    if (numX > 0) {
      console.log("-125 no es Positivo");
    } 
    else if (numX < 0){
      console.log("-125 es Negativo")
    } 
    else  {
      console.log("-125 es distinto de Cero");
    }
  }
  comparar(-125);
  

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

const parImpar = (num1) => {

    if (num1 % 2 === 0) {
      console.log("42 es Par");
    } 
    else {
      console.log("42 no es Impar");
    }
  }
  parImpar(42);

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.

const paroImpar = () => {
    const num1 = prompt("Ingrese un número");
    if (num1 % 2 === 0) {
      console.log(num1 +  " es Par");
    } 
    else {
      console.log(num1 +  " es Impar");
    }
  }
  paroImpar();


// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

const compNum = () => {
    const numX = prompt("Ingrese un número mayor, menor o igual a cero");
    if (numX > 0) {
      console.log(numX + " es Positivo");
    } 
    else if (numX < 0){
      console.log(numX + " es Negativo")
    } 
    else  {
      console.log(numX + " es igual a Cero");
    }
  }
  compNum();

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

const numMay = () => {
    const numA = prompt("Ingrese un número");
    const numB = prompt("Ingrese otro número");
    if (numA > numB) {
      console.log(numA + " es mayor que " + numB);
    } 
    else if (numA < numB){
      console.log(numB + " es mayor que " + numA)
    } 
    else  {
      console.log(numA +" y " + numB + " son iguales");
    }
  }
  numMay();


// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

const contraseña = () => {
  const contraseña = parseInt(prompt("Ingrese una contraseña de 8 caracteres y un símbolo"));
  const carEsp = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/\-]/;
  if (contraseña.length < 4 + carEsp.length < 2 ) {
    console.log(contraseña + carEsp.length + "La contraseña es válida");
  } else {
    console.log(contraseña + "La contraseña es no es válida");
  }
}
  contraseña ();

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

const calificacion = () => {
  const calif = prompt("Ingrese una calificacion");
  if (calif >= 70) {
    console.log("La calificacion " + calif + " esta aprobada");
  } 
  else  {
    console.log(calif  + " no está aprobada");
  }
}
calificacion();


//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

const verificar = () => {
  const cadena1 = "amor y roma"
  const cadena2 = cadena1.split('').reverse().join('');
  if (cadena1 === cadena2) {
    console.log(cadena1 + " es un palíndromo");
  } 
  else  {
    console.log(" no es un palíndromo");
  }
}
verificar();

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

const vocCons = ()  => {
  let letras = prompt("Ingrese una letra");
  if (letras === "a"  || letras === "e" || letras === "i" || letras === "o" || letras === "u") {
    console.log(letras + " ,es una vocal");
  }
  else {
    console.log(letras + " ,es una consonante");
  }

}
vocCons();


// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

let numDia = prompt("Ingrese un numero del 1 al 7").toLocaleUpperCase().trim()
numDia = parseInt(numDia);
switch (numDia) {
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
console.log("Número no válido. Ingresa un número del 1 al 7.");
break;
}

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const numPrimo = () => {
  let numP = prompt("Ingrese un número");
  if (numP >= 1) 
  if (numP % 1 === numP && numP % numP === 1) {
    console.log("Es un número primo");
  } 
  else {
    console.log("No es un número primo");
  }
}
numPrimo();


// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

const mayEdad = () => {
  const numE = prompt("Ingrese su edad");
  if (numE >= 18) {
    console.log(" Es mayor de  edad");
  } 
  else  {
    console.log(" Es menor de edad");
  }
}
mayEdad();


// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

const sumaNum = () => {
  let numM1 = parseInt(prompt("Ingrese un número"));
  let numM2 = parseInt(prompt("Ingrese otro número"));
  let resultado = numM1 + numM2;
  if (resultado > 100) {
    console.log(" es mayor a 100");
  } else if (resultado === 100){
    console.log(" es igual a 100");
  } else {
    console.log(" es menor a 100");
  }
}
sumaNum();

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

const nuMay = () => {
  const nuMA = parseInt(prompt("Ingrese un número"));
  const nuMB = parseInt(prompt("Ingrese otro número"));
  const nuMC = parseInt(prompt("Ingrese otro número"));
  if (nuMA > nuMB && nuMA > nuMC) {
    console.log(nuMA + " es mayor que " + nuMB + " y " + nuMC);
  } 
  else if (nuMB > nuMA && nuMB > nuMC) {
    console.log(nuMB + " es mayor que " + nuMA + " y " + nuMC)
  } 
  else  {
    console.log(nuMC + " es mayor que " + nuMB + " y " + nuMA);
  }
}
nuMay();


// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

const mayMin = ()  => {
  let letraUs = prompt("Ingrese una letra");
  if (letraUs === letraUs.toUpperCase()) {
    console.log(letraUs + " ,es MAYÚSCULA");
  }
  else {
    console.log(letraUs + " ,es minúscula");
  }
}
mayMin();


//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

const numDiv = (numDiv1) => {
  if (numDiv1 % 5 === 0 && numDiv1 % 3 === 0) {
    console.log(numDiv1 + " es divisible en 3 y en 5 " + " FizzBuzz")
  }
  else if (numDiv1 % 3 === 0) {
    console.log(numDiv1 + " es divisible en 3" + " Fizz");
  } 
  else if (numDiv1 % 5 === 0) {
    console.log(numDiv1 + " es divisible en 5" + " Buzz");
  } 
  
  else {
    console.log(numDiv1 +" no es divisible en 3 ni en 5")
}
}
numDiv(15);

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

const numPerf = (num) => {
  let sumDiv = 0;
  for (let i = 1 ; i < num ; i++) {
      if (num % i === 0) {
          sumDiv += i;
      }
  } 
  if (sumDiv === num) {
      return true;
  } else {
      return false;
  }
};
let numIng = parseInt(prompt("Ingresa un número:"));
if (numPerf(numIng)) {
  console.log(numIng + " es un número perfecto");
} else {
  console.log( numIng + " no es un número perfecto");
}


// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

const descFacPrimos = (numero) => {
  let factoresPrimos = [];
  let divisor = 2;

  while (numero > 1) {
    switch (true) {
      case numero % divisor === 0:
        factoresPrimos.push(divisor);
        numero /= divisor;
        break;
      default:
        divisor++;
    }
  }
  return factoresPrimos;
}
const numeroIngresado = parseInt(prompt("Ingrese un número"));
if (isNaN(numeroIngresado) || numeroIngresado <= 1) {
  console.log("Por favor, ingrese un número entero positivo mayor que 1.");
} else {
  const factoresPrimos = descFacPrimos(numeroIngresado);
  console.log(`La descomposición en factores primos de ${numeroIngresado} es: ${factoresPrimos.join(' * ')}`);
}


// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

const fechaIng = () => {
  const dia = prompt("Ingrese el día de su nacimiento");
  const mes = prompt("Ingrese el mes de su nacimiento");
  const año = prompt("Ingrese el año de su nacimiento") ;
  if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && año >= 1 && año <= 2023) {
    console.log(dia + "/"  + mes + "/" + año + " Es una fecha valida");
  } 
  else  {
    console.log(dia + "/"  + mes + "/" + año  + " no es una fecha valida");
  }
}
fechaIng();


