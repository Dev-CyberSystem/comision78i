// let form = document.createElement('form')
// let inputName = document.createElement('input')
// inputName.classList.add('inputNombre')
// inputName.setAttribute('placeholder', 'Ingresa tu Nombre')
// main.appendChild(form)
// form.appendChild(inputName)
// let btnEnviar = document.createElement('button')
// btnEnviar.setAttribute('type', 'submit')
// btnEnviar.textContent = 'Enviar Nombre'
// inputName.insertAdjacentElement("afterend",btnEnviar)
// function submit(e){
//     e.preventDefault()
//     let nombre = inputName.value.trim().toUpperCase()
//     let h3 = document.createElement('h3')
//     h3.textContent = `${nombre}`
//     main.appendChild(h3)
// }
// function input(){   
//     form.addEventListener('submit', submit)
// }
// input()

// ALGUNAS PRACTICAS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//1.
let num1 = 10
let num2 = 20
let suma = num1 + num2
console.log(`El resultado es ${suma}`)
//2.
console.log(num1 == num2)
//3.
console.log(num1!=num2)
//4.
console.log(num1 = num1 + 5)
//5.
console.log(num1 = num1 - 3)
//6.
let nombre = 'Matias'
let apellido = 'Saade'
console.log(nombre + ' ' + apellido)
//7.
let verdad = true
let falso = false
console.log(verdad && falso)
//8.
console.log(verdad || falso)
//9.
console.log(num1 > num2)
//10.
console.log(num1 <= num2)
//11.// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
function fnSuma(a,b){
    return console.log(a+b)
}
fnSuma(10,5)
//12.// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function fnResta(a,b){
    return console.log(a-b)
}
fnResta(20,10)
//13.// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function masCinco(){
    let numero = 15
    return console.log(numero + 10)
}
masCinco()
//14.// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function dosStrings(){
    let string1 = 'Hola'
    let string2 = 'Mundo'
    let frase = string1 + ' ' + string2
    return console.log(frase)
}
dosStrings()
//15.// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function dosVars(){
    let var1 = true
    let var2 = false
    return console.log(var1 === var2)
}
dosVars()
//16.// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function dosVars2(){
    let var1 = true
    let var2 = false
    return console.log(var1 !== var2)
}
dosVars2()
//17.// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function dosNums(){
    let a = 15
    let b = 25
    return console.log(a>b)
}
dosNums()
//18.// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
let numUser = parseInt(prompt('Ingresa un número'))
console.log(numUser)
//19.// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
let nombreUser = prompt('Ingresa tu nombre')
console.log(nombreUser)
//20.// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
let primerNum = parseInt(prompt('Ingresa el primer numero para sumar'))
let segundoNum = parseInt(prompt('Ingresa el segundo numero para sumar'))
let sumaNumeros = primerNum + segundoNum
let parrafo = document.createElement('p')
parrafo.innerHTML = `El resultado de los numeros ingresados es: ${sumaNumeros}`
document.body.appendChild(parrafo)
//21.//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
function esMayor(){
    let anioNacimiento = parseInt(prompt('Ingresa tu año de nacimiento'))
    let date = new Date()
    let anioActual = date.getFullYear()
    let resultado = anioActual - anioNacimiento
    resultado > 18
        ? document.write(`Tenes ${resultado} años. Estas re viejo ameo`) 
        : document.write(`Tenes ${resultado} años. 10 a 1 a que estas robando el dni de tu hermano/primo pa el boli`)
}
esMayor()
//22.// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function contadorPalabras(){
    let frase = prompt('Ingrese la frase')
    let array = frase.split(' ')
    let cantidad = array.length
    document.write(`La frase ingresada tiene ${cantidad} palabras`)
}
contadorPalabras()