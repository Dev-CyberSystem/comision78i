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
  
  // Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
  
  // Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
  
  //Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
  
  // Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
  
  // Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
  
  // Crear un programa que pida al usuario un número y luego muestre si es primo o no.
  
  // Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
  
  // Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
  
  // Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
  
  // Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
  
  //Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
  
  // Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
  
  // Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
  
  // Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.