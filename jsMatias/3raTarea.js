//1//Crear una función que tome dos números como parámetros y devuelva el número mayor.
const comparar = (num1,num2) =>{
    num1 > num2 
    ? console.log(`${num1} es mayor`) 
    : num1 === num2 
        ? console.log(`Ambos numeros son iguales`) 
        : console.log(`${num2} es mayor`)
}

// comparar(20,25)

//2//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
const esPositivo = (num) => {
    isNaN(num) 
        ? console.log('Solo podes ingresar numeros') 
        : num > 0
            ? console.log('Número Positivo')
            : num < 0
                ? console.log('Número Negativo')
                : console.log('Número 0')

}
// esPositivo('0')

//3//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
const esPar = (num) =>{
    isNaN(num)
        ? console.log('SOlo podes ingresar numeros')
        : num == 0
            ? console.log('El numero ingresado es 0')
            : num % 2 == 0
                ? console.log('Par')
                : console.log('Impar')
}

// esPar('b')

//4//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const promptPar = () =>{
    let num = Number(prompt('Ingresa un número'))
    isNaN(num)
        ? console.log('solo podes ingresar números')
        : num == 0
            ? console.log('el número ingresado es 0')
            : num % 2 == 0
                ? console.log('el número es Par')
                : console.log('el número es Impar')
}
// promptPar()

//5// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
const promptPositivo = () => {
    let num = Number(prompt('Ingresa un número'))

    isNaN(num) 
        ? console.log('Solo podes ingresar numeros') 
        : num == 0
            ? console.log('Número 0')
            : num > 0
                ? console.log('Positivo')
                : console.log('Negativo')

}
// promptPositivo()

//6// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const cualMayor = () =>{
    let num1 = Number(prompt('Ingresa el primer numero'))
    let num2 = Number(prompt('Ingresa el segundo numero'))

    isNaN(num1) || isNaN(num2)
        ? console.log('Ambos ingresos deben ser numeros')
        : num1 > num2
            ? console.log('el PRIMER NÚMERO ES MAYOR')
            : console.log('el SEGUNDO NÚMERO ES MAYOR')
}
// cualMayor()

//7// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const password = () =>{
    
    let password = prompt('Ingresa una contraseña que contenga un número, una mayúscula y una minúscula, debe ser de al menos 8 caracteres').trim()
    
    password.length < 8
        ? console.log('Contraseña muy corta')
        : !/[a-z]/.test(password)
            ? console.log('La contraseña debe tener al menos una minúscula')
            : !/[A-Z]/.test(password)
                ? console.log('La contraseña debe tener al menos una mayúscula')
                : !/\d/.test(password)
                    ? console.log('La contraseña debe tener al menos un dígito')
                    : console.log('contraseña creada con exito')
}
// password()

//8// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const diaSemana = () =>{
    let num = Number(prompt('Ingresa un número del 1 al 7 para saber a que dia corresponde'))

    isNaN(num)
        ? console.log('Solo podes ingresar números')
        : num == 1
            ? console.log('Lunes')
            : num == 2
                ? console.log('Martes')
                : num == 3
                    ? console.log('Miércoles')
                    : num == 4
                        ? console.log('Jueves')
                        : num == 5
                            ? console.log('Viernes')
                            : num == 6
                                ? console.log('Sábado')
                                : num == 7
                                    ? console.log('Domingo')
                                    : console.log('Solo pueden ser números del 1 al 7')
}
// diaSemana()

//9// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const esPrimo = () => {
    let numero = Number(prompt('Ingresa un número'))

    isNaN(numero)
        ? console.log('Solo puedes ingresar NÚMEROS')
        : numero < 1
            ? console.log('Los números negativos y 0 NO SON PRIMOS')
            : numero == 1 || numero == 2 || numero == 3 || numero == 5 || numero == 7
                ? console.log(`${numero} ES primo`)
                : numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0
                    ? console.log(`${numero} NO es primo`)
                    : console.log(`${numero} ES primo`)
    
}
// esPrimo()

//10// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const esMayor = () => {
    let edad = Number(prompt('Ingresa tu edad'))

    isNaN(edad)
        ? console.log('Solo podes ingresar un valor numérico')
        : edad <18
            ? console.log('Sos MENOR de edad')
            : console.log('Sos MAYOR de edad')
}
// esMayor()

//11// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const suma100 = () => {
    let num1 = Number(prompt('Ingresa el primer numero'))
    let num2 = Number(prompt('Ingresa el segundo numero'))
    isNaN(num1) || isNaN(num2)
        ? console.log('Ambos ingresos deben ser numeros')
        : num1 + num2 === 100
            ? console.log(`La suma de ${num1} y ${num2} es IGUAL 100`)
            : num1 + num2 < 100
                ? console.log(`La suma de ${num1} y ${num2} es MENOR que 100`)
                : console.log(`La suma de ${num1} y ${num2} es MAYOR que 100`)
}
// suma100()

//12// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
const mayorDeTres = () =>{
    let num1 = Number(prompt('Ingresa el primer numero'))
    let num2 = Number(prompt('Ingresa el segundo numero'))
    let num3 = Number(prompt('Ingresa el tercer numero'))
    
    isNaN(num1) || isNaN(num2) || isNaN(num3)
        ? console.log('Solo podes ingresar valores numéricos')
        : console.log(`El número mas grande de los ingresados es el ${Math.max(num1, num2, num3)}`)
}
// mayorDeTres()

//13// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const esMayus = () => {
    let letra = prompt('Ingresa UNA letra para la comprobación').trim()

    letra.length > 1
        ? console.log('Error. Ingresaste más de 1 caracter')
        : letra >= 'A' && letra <= 'Z'
            ? console.log('MAYÚSCULA')
            : letra >= 'a' && letra <= 'z'
                ? console.log('minúscula')
                : console.log('No ingresaste una letra')
}
// esMayus()

//14//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
const fizzBuzz = (num) =>{

    isNaN(num)
        ? console.log('Solo podes ingresar números')
        : num % 3 === 0 && num % 5 === 0
            ? console.log('FizzBuzz')
            : num % 3 === 0
                ? console.log('Fizz')
                : num % 5 === 0
                    ? console.log('Buzz')
                    : console.log(num)
}
// fizzBuzz()

//15// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
const esPerfecto = () => {
    let numero = Number(prompt("Ingresa un número"));
    let sumaDivisores = 1;

    if(isNaN(numero) || numero < 6) return console.log('Solo podes ingresar números || El primer número perfecto es el 6')
    
    for (let i = 2; i <= Math.ceil(numero/2); i++) {
        if (numero % i == 0)
        sumaDivisores += i;
    }

    sumaDivisores === numero
        ? console.log(`${numero} es PERFECTO`)
        : console.log(`${numero} NO ES perfecto`)
}
// esPerfecto()

//16// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
function descomponerPrimos() {
    let numeroUsuario = parseInt(prompt("Ingrese un número:"))
    if (isNaN(numeroUsuario) || numeroUsuario <= 1) {
        return alert("Por favor, ingrese un número válido mayor que 1.")
    }

    let factoresPrimos = []
    let divisor = 2

    while (numeroUsuario > 1) {
        while (numeroUsuario % divisor === 0) {
            factoresPrimos.push(divisor)
            numeroUsuario = numeroUsuario / divisor
        }
        divisor++
    }

    let parrafo = document.createElement('p')
    parrafo.textContent = `La descomposición en factores primos es: ${factoresPrimos.join(' * ')}`
    document.body.appendChild(parrafo)
}

// descomponerPrimos()

//17// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

const esFechaValida = (dia, mes, anio) => {
    if (isNaN(anio) || anio <= 0) {
        return false
    }
    if (isNaN(mes) || mes < 1 || mes > 12) {
        return false
    }
    const diasEnMes = new Date(anio, mes, 0).getDate()
    if (isNaN(dia) || dia < 1 || dia > diasEnMes) {
        return false
    }

    return true
}
// Solicitar al usuario que ingrese una fecha
// const dia = parseInt(prompt("Ingrese el día:"))
// const mes = parseInt(prompt("Ingrese el mes:"))
// const anio = parseInt(prompt("Ingrese el año:"))

// Verificar si la fecha es válida e imprimir el resultado
if (esFechaValida(dia, mes, anio)) {
    let parrafo = document.createElement('p')
    parrafo.textContent = "La fecha ingresada ES válida."
    document.body.appendChild(parrafo)
} else {
    let parrafo = document.createElement('p')
    parrafo.textContent = "La fecha ingresada NO ES válida."
    document.body.appendChild(parrafo)
}
// esFechaValida(dia,mes,anio)