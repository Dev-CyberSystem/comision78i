// Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

const numPosNegCero = (num) => {
    if (num > 0) {
        return console.log("Positivo")
    }
    else if (num < 0) {
        return console.log("Negativo")
    }
    else {
        return console.log("Cero")
    }
}
numPosNegCero(0)

// Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

const numParImpar = (numero) => {
    if (numero % 2 == 0) {
        return console.log("Par")
    } else {
        console.log("Impar")
    }
}
numParImpar(73)

// Crear un programa que pida al usuario un número y luego muestre si es par o impar.

const numParImparUsuario = () => {
    let numParImpar = prompt("Ingrese un número")
    if (numParImpar % 2 == 0 && numParImpar != 0) {
        return console.log("Par")
    } else if (numParImpar % 2 != 0) {
        return console.log("Impar")
    } else {
        console.log("Cero")
    }
}
//numParImparUsuario()

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

const numPosNegCeroUsuario = () => {
    let numPosNegUsuario = prompt("Ingrese un número")
    if (numPosNegUsuario > 0) {
        return console.log("Positivo")
    }
    else if (numPosNegUsuario < 0) {
        return console.log("Negativo")
    }
    else {
        return console.log("Cero")
    }
}
//numPosNegCeroUsuario()

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

const numMayorMenor = () => {
    let numero1 = prompt("Ingrese el primer número")
    let numero2 = prompt("Ingrese el segundo número")
    if (numero1 > numero2) {
        return console.log(`Es mayor ${numero1}`)
    } else if (numero2 > numero1) {
        return console.log(`Es mayor ${numero2}`)
    } else {
        console.log("Los números son iguales")
    }
}
//numMayorMenor()

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

const validarContraseña = () => {
    let contraseña = prompt("Ingrese su contraseña (6 caracteres como mínimo y la presencia de alguno de los siguientes caracteres especiales (%,$,&,#))")
    let porcentaje = contraseña.includes("%")
    let dinero = contraseña.includes("$")
    let letra_y = contraseña.includes("&")
    let numeral = contraseña.includes("#")
    if (contraseña.length >= 6 && (porcentaje || dinero || letra_y || numeral)) {
        return console.log("¡Contraseña correcta!")
    } else if (contraseña.length < 6 && (porcentaje || dinero || letra_y || numeral)) {
        return console.log("Su contraseña tiene menos de 6 caracteres")
    } else if (contraseña.length >= 6 && (!porcentaje || !dinero || !letra_y || !numeral)) {
        return console.log("Su contraseña necesita caracteres especiales")
    } else {
        return console.log("Su contraseña tiene menos de 6 caracteres y necesita caracteres especiales")
    }
    
}
//validarContraseña()

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

const notaAprobatoria = () => {
    let nota = prompt("Ingrese su calificación (0 a 100)")
    if (nota >= 70 && nota <= 100) {
        return console.log("Usted ha aprobado")
    } else if (nota < 70 && nota >= 0) {
        return console.log("Usted ha desaprobado")
    } else {
        return console.log("Nota no válida")
    }
}
//notaAprobatoria()

// Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

const palindromo = (cadena) => {
    // split() Devuelve un nuevo arreglo - reverse() Invierte el arreglo - join() Une el arreglo en una cadena
    cadenaReversa = cadena.split("").reverse().join("")
    if (cadenaReversa == cadena) {
        return console.log("Es un palíndromo")
    } else {
        return console.log("No es un palíndromo")
    }
}
//palindromo("reconocer") 

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

const letraVocalConsonante = () => {
    let letra = prompt("Ingrese una letra")
    letra = letra.toUpperCase()
    if (letra.length == 1) {
        if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
            return console.log("Vocal")
        } else {
            return console.log("Consonante")
        }
    } else {
        return console.log("No es una letra")
    }
}
// letraVocalConsonante()

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

const diaSemana = () => {
    let dia = prompt("Ingrese un número del 1 al 7")
    if (dia < 1 || dia > 7) {
        return console.log("No cumple con la condición")
    } else if (dia == 1) {
        return console.log("Lunes")
    } else if (dia == 2) {
        return console.log("Martes")
    } else if (dia == 3) {
        return console.log("Miércoles")
    } else if (dia == 4) {
        return console.log("Jueves")
    } else if (dia == 5) {
        return console.log("Viernes")
    } else if (dia == 6) {
        return console.log("Sábado")
    } else if (dia == 7) {
        return console.log("Domingo")
    }
}
// diaSemana()

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const numeroPrimo = () => {
    let n = prompt("Ingrese un número")
    if ((n % n == 0 && n % 1 == 0 && n % 2 != 0) || (n == 2)) {
        return console.log("Es un número primo")
    } else {
        return console.log("No es un número primo")
    }
}
//numeroPrimo()

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

const edadUsuario = () => {
    let edad = prompt("Ingrese su edad")
    if (edad >= 18) {
        return console.log("Usted es mayor de edad")
    } else if (edad < 18 && edad >= 0) {
        return console.log("Usted es menor de edad")
    } else {
        return console.log("Edad no válida")
    }
}
//edadUsuario()

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

const sumaMayMenCien = () => {
    let num_uno = parseInt(prompt("Ingrese el primer número"))
    let num_dos = parseInt(prompt("Ingrese el segundo número"))
    if ((num_uno + num_dos) > 100) {
        return console.log("La suma de los dos números es mayor a 100")
    } else if ((num_uno + num_dos) < 100) {
        return console.log("La suma de los dos números es menor a 100")
    } else {
        return console.log("La suma de los dos números es 100")
    }
}
//sumaMayMenCien()

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

const mayorTresNumeros = () => {
    let numero_uno = parseInt(prompt("Ingrese el primer número"))
    let numero_dos = parseInt(prompt("Ingrese el segundo número"))
    let numero_tres = parseInt(prompt("Ingrese el tercer número"))
    if (numero_uno > numero_dos && numero_uno > numero_tres) {
        return console.log(`El número mayor es ${numero_uno}`)
    } else if (numero_dos > numero_uno && numero_dos > numero_tres) {
        return console.log(`El número mayor es ${numero_dos}`)
    } else {
        return console.log(`El número mayor es ${numero_tres}`)
    }
}
//mayorTresNumeros()

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

const letraMayusMinus = () => {
    let letra_ = prompt("Ingrese una letra")
    if (letra_.length == 1) {
        if (letra_ == letra_.toUpperCase()) {
            return console.log("La letra es mayúscula")
        } else {
            return console.log("La letra es minúscula")
        }
    } else if (letra_.length > 1) {
        return console.log("Ingresó más de una letra")
    }
}
//letraMayusMinus()

// Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

const fizzBuzz = (num) => {
    if (num % 3 == 0 && num % 5 == 0) {
        return console.log("FizzBuzz")
    } else if (num % 5 == 0) {
        return console.log("Buzz")
    } else if (num % 3 == 0) {
        return console.log("Fizz")
    } else {
        return console.log(num)
    }
}
//fizzBuzz(30)

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

const numPerfecto = () => {
    let n = parseInt(prompt("Ingrese un número"))
    for(let i = 1; i<=10; i++){
      let x = Math.pow(2,i-1)*(Math.pow(2,i)-1)
      if (n == x ){
        return console.log("Es un número perfecto")
      }
    }
  }
//numPerfecto()

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

const fechaValida = () => {
    let dia = parseInt(prompt("Ingrese el dia"))
    let mes = parseInt(prompt("Ingrese el mes"))
    let anio = parseInt(prompt("Ingrese el año"))
    console.log(dia,mes,anio)
    let diaValido = true
    let mesValido = true

    if ((dia < 1 || dia > 31) && (mes < 1 || mes > 12)) {
        return console.log("Días y mes incorrecto")
    } else if (dia < 1 || dia > 31 && mesValido == true) {
        diaValido = false
        return console.log("Días incorrecto")
    } else if ((mes < 1 || mes > 12) && diaValido == true) {
        mesValido = false
        return console.log("Mes incorrecto")
    } else if (mes == 2 && dia > 29) {
        return console.log("Febrero no tiene más de 29 días (si es bisiesto)")
    } else if (anio < 1) {
        return console.log("Año incorrecto")
    } else {
        return console.log(`¡Fecha válida! Su fecha es ${dia}/${mes}/${anio}`)
    }
}
//fechaValida()

