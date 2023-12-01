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

//-----------------------------------------------------------

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
  let calificacion = prompt("Ingrese una calificación")
  if (calificacion >= 70) {
    console.log("Aprobatoria")
  }
  else {
    console.log("No Aprobatoria")
  }
  
//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

//--------------------------------------------------------------------

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

  let letra = prompt("Ingrese una letra")
  if (letra >= "a" && letra <= "z") {
    console.log("Vocal")
  }
  else if (letra >= "A" && letra <= "Z") {
    console.log("Vocal")
  }
  else {
    console.log("Consonante")
  }

 // Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
 const programa5 = () => {
  n1 = prompt("Ingresar número 1")
  n2 = prompt("Ingresar número 2")
  if (n1 > n2) {
    console.log(n1, "es mayor a", n2);
    }
    else{
      console.log(n2, "es mayor a", n1);
      }
      }
      programa5();

 // Crear un programa que pida al usuario dos números y luego muestre cuál es el menor de los dos.
 
 const programa6 = () => {
  n3 = prompt("Ingresar número 1");
  n4 = prompt("Ingresar número 2");
  if (n3 < n4) {
    console.log(n3, "es menor a", n4);
    }
    else{
      console.log(n4, "es menor a", n3);
      }
      }
      programa6();
  
// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

  const numeroDia = parseInt(prompt("Ingrese un número del 1 al 7:"));
  switch (numeroDia) {
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
      console.log("Ingrese un número entre 1 y 7");
      break;
  }
  
// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
  
  const esPrimo = numero => {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
};
const num = prompt('ingrese un numero');
if (esPrimo(parseInt(num))) {
  console.log(`${num} es un número primo`);
  } else {
    console.log(`${num} no es un número primo`);
    };

  
// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

  const edad = parseInt(prompt("Ingresar edad"))
  if (edad >= 18) {
    console.log("Mayor de edad")
  }
  else {
    console.log("Menor de edad")
  }
  
 // Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

  const numero1 = parseFloat(prompt("Ingrese el primer número:"));
  const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
  
  const suma = numero1 + numero2;

  if (suma > 100) {
      console.log(`La suma de ${numero1} y ${numero2} es mayor que 100.`);
  } else if (suma < 100) {
      console.log(`La suma de ${numero1} y ${numero2} es menor que 100.`);
  } else {
      console.log(`La suma de ${numero1} y ${numero2} es igual a 100.`);
  }
  
// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
  
  let num1, num2, num3;
  num1 = parseInt(prompt("Ingrese el primero número: "));
  num2 = parseInt(prompt("Ingrese el segundo número: "));
  num3 = parseInt(prompt("Ingrese el tercer número: "));
  if (num1 > num2 && num1 > num3){
    console.log (`${num1} es el mayor`);
    }else if (num2 > num1 && num2 > num3){
      console.log (`${num2} es el mayor`);
      }else{
        console.log (`${num3} es el mayor`);
        }

  
  // Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

    let letras = prompt("Ingresar una letra")
  const letrasMayMin = (letras) =>{
     if(letras === letras.toLowerCase()){
         console.log("Es una letra minúscula")
     }else if(letras === letras.toUpperCase()){
        console.log("Es una letra mayúscula")
     }
   }
   letrasMayMin(letras)
  
//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
  
  const parametro = (num) =>{
    if(num % 4 == 0){
            if(num % 6 == 0){
                console.log("FizzBuzz")
                return
            }
            console.log("Fizz")
        }else if(num % 6 == 0){
            if(num % 4 == 0){
                console.log("FizzBuzz")
                return
            }
            console.log("Buzz")
        }
      }
      parametro(7)
      
// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

  const numPerf = () => {
    let number1 = parseInt(prompt("Ingrese un número"))
    let number2 = 0
    for(let i = 1; i<=10; i++){
      let number1 = Math.pow(2,i-1)*(Math.pow(2,i)-1)
      if (number2 == number2 ){
        console.log("Es perfecto")
        break
      }
    }
  }
  numPerf()
  
// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

  const ingrNumero = parseInt(prompt("Por favor, ingrese un número: "), 10);
const numPrimo = num => {
 for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if(num % i === 0) return false;
 return num > 1;
}

const factoresPrim = num => {
 let factores = [];
 for(let i = 2; i <= num; i++) {
    while(num % i === 0 && numPrimo(i)) {
      factores.push(i);
      num /= i;
    }
 }
 return factores;
}

const factores = factoresPrim(ingrNumero);

console.log(`La descomposición en factores primos de ${ingrNumero} es: ${factores.join(", ")}`);

  
// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

//---------------------------------------------------------------
  