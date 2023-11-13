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
  esMayor(5, 5); 
  
  
  //Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

  const tipoDeNum = (numero) => {
    if (numero > 0) {
        console.log("Positivo")
    } else if (numero === 0) {
        console.log("Cero")
    } else {
        console.log("Negativo")
    }
  }
  tipoDeNum(10)
  
  //Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

  const parOImpar = (numerito) => {
    if (numerito % 2 === 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }
  }
  parOImpar(6)
  
  //Crear un programa que pida al usuario un número y luego muestre si es par o impar.

  const numeroParOImpar = (numerin) => {
    if (numerin % 2 === 0) {
        console.log("Es Par")
    } else {
        console.log("Es Impar")
    }
  }
  let numeroIngresado = parseInt(prompt ("Ingresa un Numero para comprobar si es par o impar"))
  numeroParOImpar(numeroIngresado)

  // Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

  const numPositivoONegativo = (num) => {
    if (num > 0) {
        console.log("Positivo")
    } else if (num === 0) {
        console.log("Cero")
    } else {
        console.log("Negativo")
    }
  }
  let numeroAIngrear = parseInt(prompt("Ingresa un Numero para comprobar si es positivo, negativo o cero"))
  numPositivoONegativo(numeroAIngrear)
  
  // Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

  const numeroMayor = (num1, num2) => {
    if (num1 > num2) {
      console.log("El número mayor es " + num1);
    } else if (num1 === num2){
      console.log("Ambos numeros son iguales")
    } else {
      console.log("El número mayor es " + num2);
    }
  };
  let numAIngresar1 = parseInt(prompt("Ingresa un numero para comparar"))
  let numAIngresar2 = parseInt(prompt("Ingresa otro numero para comparar con el anterior y sacar cuál es el mayor"))
  numeroMayor(numAIngresar1, numAIngresar2)
  
  // Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

  const contraseñaDelUsuario = (contraseña) => {
    let caracteresEspeciales = /[!@#]/
    if (contraseña.length < 10) {
        alert("Error! Tu contraseña debe tener mínimo 10 caracteres")
    } else if (!caracteresEspeciales.test(contraseña)) {
        alert("Error! Tu contraseña debe contener alguno de los caracteres especiales (!@#)")
    } else {
        alert("Contraseña guardada correctamente!")
    }
  }
  contraseñaDelUsuario(prompt("Ingresa una contraseña \nDebe contener mínimo 10 caracteres y por lo menos un caracter especial (!@#)"))

  
  // Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

  const estaAprobado = (nota) => {
    if (nota >= 70) {
        document.write ("Tu nota es " + nota + " Felicidades! Aprobaste")
    } else {
        document.write ("Tu nota es " + nota + " No alcanzaste la nota minima para aprobar (70)")
    }
  }
  estaAprobado (prompt("Ingresa tu nota"))
  
  // Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

  const esPalindromo = (cadena) => {
    let cadenaMinuscula = cadena.toLowerCase()
    let cadenaInvertida = cadenaMinuscula.split("").reverse().join("")
    if (cadenaMinuscula === cadenaInvertida) {
        console.log ("Es un palindromo")
    } else {
        console.log ("No es un palindromo")
    }
  }
  esPalindromo ("Somos") //Funciona con una sola palabra, no me quedó claro si el ejercicio pedia ingresar una palabra o varias
  
  // Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

  const vocalOConsonante = (letra) => {
    letra = letra.toLowerCase()
    if (/^[aeiou]$/.test(letra)) {
        console.log("Es una vocal")
    } else {
        console.log("Es una consonante")
    }
  }
  vocalOConsonante (prompt("Ingresa una letra"))
  
  // Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

  const numeroDiaDeLaSemana = (numero) => {
    numero = parseInt(numero)
    if (numero === 1) {
        console.log("Lunes")
    } else if (numero === 2) {
        console.log("Martes")
    } else if (numero === 3) {
        console.log("Miercoles")
    } else if (numero === 4) {
        console.log("Jueves")
    } else if (numero === 5) {
        console.log("Viernes")
    } else if (numero === 6) {
        console.log("Sábado")
    } else if (numero === 7) {
        console.log("Domingo") //jajajajajaajajajajja no le muestren a un bostero esta parte 
    } else {
        console.log("No introduciste un numero válido")
    }
  }
  numeroDiaDeLaSemana(prompt("Ingresa un número del 1 al 7"))
  
  // Crear un programa que pida al usuario un número y luego muestre si es primo o no.
  
  // Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

  const mayorDeEdad = (edad) => {
    edad = parseInt(edad)
    if (edad >= 18) {
        console.log("Eres mayor de edad")
    } else {
        console.log("Eres menor de edad")
    }
  }
  mayorDeEdad(prompt("Ingresa tu edad"))
  
  // Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

  const sumaTotal = (numero1, numero2) => {
    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)
    let resultado = numero1 + numero2
    if (resultado > 100) {
        console.log("El resultado de tu suma es " + resultado + " Por ende, es mayor a 100")
    } else if (resultado === 100) {
        console.log("El resultado de tu suma es " + resultado + " Por ende, es igual a 100")
    } else {
        console.log("El resultado de tu suma es " + resultado + " Por ende, es menor a 100")
    }
  }
  sumaTotal(prompt("Ingresa el primer numero para sumar"), prompt("Ingresa otro numero para sumar con el anterior"))
  
  // Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

  const mayorDeTres = (numerito1, numerito2, numerito3) => {
    numerito1 = parseInt(numerito1)
    numerito2 = parseInt(numerito2)
    numerito3 = parseInt(numerito3)
    let listaDeNumeros = [numerito1, numerito2, numerito3]
    let numeroMayor = Math.max(...listaDeNumeros)
    console.log("El numero mayor de los 3 ingresados es " + numeroMayor)
  }
  mayorDeTres(prompt("Ingrese el Numero 1"), prompt("Ingrese el Numero 2"), prompt("Ingrese el Numero 3"))
  
  // Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

  const esMayuscula = (letra) => {
    if (letra === letra.toLowerCase()) {
      console.log("La letra ingresada es minúscula")
    } else {
      console.log("La letra ingresada es mayúscula")
    }
  }
  esMayuscula(prompt("Ingresa una letra para comprobar si es mayúscula o minúscula"))
  
  // Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

  const fizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz") 
    } else if (number % 3 === 0) {
      console.log("Fizz")
    } else if (number % 5 === 0) {
      console.log("Buzz")
    } else {
      return number
    }
  }
  fizzBuzz(30)
  
  // Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
  
  // Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
  
  // Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
  
  const fechaValida = (dia, mes, año) => {
    dia = parseInt(dia)
    mes = parseInt(mes)
    año = parseInt(año)
    let diasDelMes = new Date(año, mes, 0).getDate()
    if (año === 0) {
      console.log("Tu fecha NO es válida")
    } else if (mes < 1 || mes > 12) {
      console.log("Tu fecha NO es válida")
    } else if (dia < 1 || dia > diasDelMes) {
      console.log("Tu fecha NO es válida")
    } else if (año % 4 != 0) {
      console.log("Tu fecha NO es válida")
    } else {
      console.log("Tu fecha ES válida")
    }
  }
  fechaValida(prompt("Ingresa un día"), prompt("Ingresa un mes (en numero)"), prompt("Ingresa un año"))
  