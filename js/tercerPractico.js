// Tarea

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

  const determinarSigno = numero => {
    if (numero > 0) {
      console.log (numero, "Positivo");
    } else if (numero < 0) {console.log (numero, "Negativo")
    }
    else {
      console.log (numero, "Cero");
    }
  };
  determinarSigno(5)
  determinarSigno(-4)
  determinarSigno(0)
  
  //Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

  const parImpar = num1 => {
    if (num1 % 2 === 0) {
        console.log(num1, "Par");
    }
    else {
        console.log(num1, "Impar");
    }
  }
parImpar(8)
parImpar(5)

  
  //Crear un programa que pida al usuario un número y luego muestre si es par o impar.

const programa = num1 => {
    num1 = prompt("Ingresar número")
    if (num1 % 2 === 0) {
        console.log(num1, "Par");
    }
    else {
        console.log(num1, "Impar");
    }
}
    programa()
  
  // Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

  const programa2 = num2 => {
    num2 = prompt("Ingresar número 2")
    if (num2 > 0) {
        console.log(num2, "Positivo");
    }
    else if (num2 < 0) {
        console.log(num2, "Negativo");
    }
    else {
        console.log(num2, "Cero");
    }
  }
  programa2()
  
  // Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

  const programa3 = num3 => {
    num3 = prompt("Ingresar número 3")
    num4 = prompt("Ingresar número 4")
    if (num3 > num4) {
        console.log(num3, "Mayor");}

    else {
        console.log(num3, "Mayor");
    }
  }
  programa3()
  // Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

  // Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
  let calificacion = prompt("Ingrese una calificación")
  if (calificacion >= 70) {
    console.log("Aprobatoria")
  }
  else {
    console.log("No Aprobatoria")
  }
  
  //Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

  
  // Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
  
  // Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
  
  // Crear un programa que pida al usuario un número y luego muestre si es primo o no.
  
  // Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

  const edad = parseInt(prompt("Ingresar edad"))
  if (edad >= 18) {
    console.log("Mayor de edad")
  }
  else {
    console.log("Menor de edad")
  }
  edad()
  
  // Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
  
  // Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
  
  // Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
  
  //Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
  
  // Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
  
  // Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

  
  // Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
  