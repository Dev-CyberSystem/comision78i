//Tarea 03 - ejercicios 13/11/2023

/*1-Crear una función que tome un número como parámetro y devuelva "Positivo" 
si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.*/
function positivo (numero){
    if(numero>0){
        console.log("Positivo");
    }else if(numero<0){
        console.log("Es negativo");
    }else {
        console.log("El numero es neutro");
    }
}
positivo(23);

/*2-Crear una función que tome un número como parámetro y devuelva "Par" 
si es divisible por 2 o "Impar" si no lo es. */ 
function numeroPar(num){
    if(numero%2==0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}
numeroPar(26);

//3-Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function calculoProgram(){
    let pideNumero = prompt("Ingrese un numero");
    let numeroCalculo = parseFloat(pideNumero);

    if(numeroCalculo%2==0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}
calculoProgram();

// 4- Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function calculaSigno(){
    let numeroIngresado = prompt("Ingresa un numero");
    let numero = parseInt(numeroIngresado);

    if(numero>0){
        console.log("Positivo");
    }else if(numero<0){
        console.log("Negativo");
    }else{
        console.log("Es cero");
    }
}
calculaSigno();

//5-Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function pideMayor(){
    let num1 = prompt("Ingresa un numero");
    let numero1 = parseInt(num1);

    let num2 = prompt("Ingresa un numero");
    let numero2 = parseInt(num2);

    if(numero1>numero2){
        console.log("Num1 es mayor que Num2");
    }else if(numero2>numero1){
        console.log("Num2 es mayor que Num1");
    }else{
        console.log("Los numeros son iguales");
    }
}
pideMayor();

/*6- Crear un programa que pida al usuario una contraseña 
y valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.*/
function contrasenia(){
    let password = prompt('Ingresa una contraseña: Debe contener número, mayúscula y minúscula, debe ser de al menos 8 caracteres').trim();
    if(password.length<8){
        console.log("Contraseña muy corta")
    }else if(!/[a-z]/.test(password)){
        console.log('La contraseña debe tener al menos una minúscula');
    }else if(!/[A-Z]/.test(password)){
        console.log('La contraseña debe tener al menos una mayúscula');
    }else if(!/\d/.test(password)){
        console.log('La contraseña debe tener al menos un dígito');
    }else{
        console.log('contraseña creada con exito')
    }      
}
contrasenia();

/**7-Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70)*/
function calificacion(){
    let notaCC = prompt("Ingrese su nota");
    let nota = parseInt(notaCC);

    if(nota >= 70){
        console.log("Curso aprobado");
    }else{
        console.log("Curso no aprobado");
    }
}
calificacion();

/**8-Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" LA cadena es igual al revés, 
 * de lo contrario, devolver "No es un palíndromo". */
function esPalindromo(cadena) {

    //primero eliminamos los espacios y caracteres no alfabéticos y convertimos la cadena a minúsculas
    const regex = /[\W_]/g; // Expresión regular para encontrar caracteres no alfabéticos
    const procesoStr = cadena.toLowerCase().replace(regex, ''); //pasamos a minuscula la cadena
  
    // Comparamos la cadena con su reverso para determinar si es un palíndromo
    const reversoStr = procesoStr.split('').reverse().join(''); //cadena al reves
    if (procesoStr === reversoStr) { //si cadena es igual a alreves
      return "Es un palíndromo";
    } else {
      return "No es un palíndromo";
    }
  }
  
  let cadena1 = ("Anita lava la tina")
  let cadena2 = ("buenos dias")
  // Ejemplo de uso
  console.log(esPalindromo(cadena1)); // Salida: Es un palíndromo
  console.log(esPalindromo(cadena2)); // Salida: No es un palíndromo

  /**9-Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante. */
  function esVocalConsonante(letra) {
    const esVocal = /[aeiouAEIOU]/; // Expresión regular para verificar vocales
  
    // Verificamos si la entrada es una letra
    if (letra.length === 1 && letra.match(/[a-zA-Z]/)) {
      if (esVocal.test(letra)) {
        return "Es una vocal";
      } else {
        return "Es una consonante";
      }
    } else {
      return "Por favor, ingresa una sola letra válida.";
    }
  }
  
  // Solicitar al usuario ingresar una letra
  const letraIngresada = prompt("Ingresa una letra:");
  
  // Verificar si es una vocal o una consonante y mostrar el resultado
  const resultado = esVocalConsonante(letraIngresada);
  console.log(resultado);


  /**10-Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente. */
  
  function obtenerDiaSemana(numero) {
    let diaSemana = '';
  
    switch (numero) {
      case 1:
        diaSemana = "Lunes";
        break;
      case 2:
        diaSemana = "Martes";
        break;
      case 3:
        diaSemana = "Miércoles";
        break;
      case 4:
        diaSemana = "Jueves";
        break;
      case 5:
        diaSemana = "Viernes";
        break;
      case 6:
        diaSemana = "Sábado";
        break;
      case 7:
        diaSemana = "Domingo";
        break;
      default:
        diaSemana = "Número inválido. Por favor, ingresa un número del 1 al 7.";
    }
  
    return diaSemana;
  }
  
  // Solicitar al usuario un número del 1 al 7
  const numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 7 para obtener el día de la semana:"));
  
  // Obtener el día de la semana correspondiente y mostrarlo
  const diaCorrespondiente = obtenerDiaSemana(numeroIngresado);
  console.log(diaCorrespondiente);
  

  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    } else if (numero === 2) {
      return true;
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  // 11-Solicitar al usuario un número y calcular si esprimo
  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    } else if (numero === 2) {
      return true;
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
      return true;
    }
  }
  
  // Solicitar al usuario un número
  const numeroIngresa = parseInt(prompt("Ingresa un número para verificar si es primo o no:"));
  
  // Verificar si el número es primo y mostrar el resultado
  const resultadoD = esPrimo(numeroIngresa);
  
  if (resultadoD) {
    console.log(`${numeroIngresa} es un número primo.`);
  } else {
    console.log(`${numeroIngresa} no es un número primo.`);
  }
  esPrimo(7);

  //12- Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
  function calculaEdad() {
    const edad = parseInt(prompt("Ingresa tu edad"));
  
    if (isNaN(edad)) {
      console.log("Por favor, ingresa un número válido para la edad.");
    } else {
      if (edad >= 18) {
        console.log("Eres mayor de edad.");
      } else {
        console.log("Eres menor de edad.");
      }
    }
  }
 calculaEdad();

 //13- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
 function comparaSuma() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  
    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Por favor, ingresa números válidos.");
    } else {
      const suma = numero1 + numero2;
  
      if (suma > 100) {
        console.log(`La suma de los números es mayor a 100.`);
      } else if (suma < 100) {
        console.log(`La suma de los números es menor a 100.`);
      } else {
        console.log(`La suma de los números es igual a 100.`);
      }
    }
  }
comparaSuma();

//14-Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
function encontrarMayor() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    const numero3 = parseFloat(prompt("Ingresa el tercer número:"));
  
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
      console.log("Por favor, ingresa números válidos.");
    } else {
      let mayor = numero1;
  
      if (numero2 > mayor) {
        mayor = numero2;
      }
  
      if (numero3 > mayor) {
        mayor = numero3;
      }
  
      console.log(`El número mayor de los tres es: ${mayor}`);
    }
  }
encontrarMayor();


  
  