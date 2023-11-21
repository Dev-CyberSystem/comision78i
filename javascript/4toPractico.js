// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
let pto1 = parseInt(prompt("Ingrese un número desde el 1 al 12"))
const mes =() => {
    switch (pto1) {
        case (1):
            console.log("Enero")
            break;
        case (2):
            console.log("Febrero")
            break;
        case (3):
            console.log("Marzo")
            break;
        case (4):
            console.log("Abril")
            break;
        case (5):
            console.log("Mayo")
            break;
        case (6):
            console.log("Las lindas cumplen en Junio")
            break;
        case (7):
            console.log("Julio")
            break;
        case (8):
            console.log("Agosto")
            break;
        case (9):
            console.log("Septiembre")
            break;
        case (10):
            console.log("Octubre")
            break;
        case (11):
            console.log("Noviembre")
            break;
        case (12):
            console.log("Diciembre")
            break;
        default:
            console.log("No ingresaste un n° dentro del 1 al 12")
            break;    
    }
}
mes()
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
const semana =(pto2) => {
    if (pto2 === 1){
        console.log("Lunes")
    }
    else if (pto2 === 2){
        console.log("Martes")
    }
    else if (pto2 === 3){
        console.log("Miércoles")
    }
    else if (pto2 === 4){
        console.log("Jueves")
    }
    else if (pto2 === 5){
        console.log("Viernes")
    }
    else if (pto2 === 6){
        console.log("Sábado")
    }
    else if (pto2 === 7){
        console.log("Domingo")
    }
    else{
        console.log("El n° ingresado no esta dentro del 1 al 7")
    }
}
semana(parseInt(prompt("Ingrese un n° del 1 al 7")))
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
const esVocal =() => {
    const letra = prompt("Ingrese un carácter").toLowerCase()// utilice toLowerCase para que al ingresar la letra sea en minúscula.
    const vocales = /[aeiou]/
    if (vocales.test(letra)) {// utilice .test para comprobar que se respete la condicion pedida en el const vocales.
            console.log("El carácter ingresado es una vocal.")  
    }
    else{
            console.log("El carácter ingresado es una consonante.")
    }
}
esVocal()
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
const semanaArray =(número) => {
    const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    if (número <= 7) {// se compara el número ingresado con el ultimo número del rango que se pide al usuario ingresar. 
        const dia = diasDeLaSemana[número - 1] // se hace la resta entre el número ingresado y 1 xq en javascript se cuenta desde 0.
        console.log("El número ingresado corresponde a: " + dia)
    }
    else{
    console.log('Por favor, ingrese un número del 1 al 7.');
    }
}
semanaArray(parseInt(prompt("Ingrese un número del 1 al 7")))
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const letra1 =(esMayúscula) => {
    if (esMayúscula.length !== 1) { // utilice !== y .length para verificar que se haya ingresado una sola letra.
        console.log("Ingrese solo una letra")
        return
    }
    if (esMayúscula === esMayúscula.toUpperCase()){
        console.log("La letra es Mayúscula")
    }
    else if (esMayúscula === esMayúscula.toLowerCase()){
        console.log("La letra es Minúscula")

    }
    else{
        console.log("Lo ingresado no es una letra")
    }
}
letra1(prompt("Ingrese una letra"))
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
const calificación =() => {
    const nota = prompt("Ingrese un número del 0 al 10 para verificar su calificación")
    if (nota <= 5) { 
        console.log("Su calificación es " + nota + ". Por ende, es suspenso.")
    }
    else if (nota <= 7){
        console.log("Su calificación es " + nota + ". Por ende, es aprobado.")
    }
    else if (nota <= 9){
        console.log("Su calificación es " + nota + ". Por ende, es notable.")
    }
    else if (nota <= 10){
        console.log("Su calificación es " + nota + ". Por ende, es sobresaliente.")
    }
    else {
        console.log("Ingrese una calificación válida del 0 al 10.");
    }
}
calificación()
// 7) Imprimir los números pares del 2 al 20 en la consola.
for (let i = 2; i <= 20; i += 2) {// la condición establecida indica que se imprimiran números hasta el 20, en el inicio i tiene valor de 2 xq ese seria el primer n° par de 20.
    console.log(i)
}
// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.
let recorrer = "hola como estas".toUpperCase()
for ( let i = 0; i <= recorrer.length; i++){ 
    console.log(recorrer[i])
}
// 9) Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
let usuario = parseInt(prompt("Ingrese un número"))
for (let i = 1; i <= usuario; i++){// en el inicio i tiene un valor de 1, desdes ahi se empezara a contar hasta el n° ingresado.
    console.log(i)
}
// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
let serieNumeros = prompt("Ingrese una serie de números separados por coma")
let numeros = serieNumeros.split(",")//utilice split para separar por coma los números ingresados.
let numMaximo = Math.max (...numeros)
console.log("El n° más grande de la serie ingresada es " + numMaximo)
// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
const esPalíndromo =(palabra) => {
    const palabraNormal = palabra
    const palabraAlReves = palabraNormal.split("").reverse().join("")
    if (palabraNormal === palabraAlReves) {
        console.log("Es un palíndromo")
    }
    else{
        console.log("No es un palíndromo")
    }
}
esPalíndromo(prompt("Ingrese una palabra para verificar si es un palíndromo o no"))
// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
let listNúmeros = prompt("Ingrese una serie de números separados por (,)")
let num = listNúmeros.split(",")
let sumaDePares = 0 // en esta varibale se van a incorporar los números pares por eso su valor es 0.
for (let i = 0; i < num.length; i++){
    if (num[i] % 2 === 0){ // para verificar que los números se puedan dividir en dos para ser par.
        sumaDePares += num[i] // esto significa almacenar los números pares en sumaDePares.
    }
}
console.log("La suma de los números pares es: " + sumaDePares)
// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
const numeroNegativo =(esNegativo) => {
    let number = esNegativo.split(",")
    let totalDeNegativo = 0
    for (let i = 0; i < number.length; i++){ //la condición establece que los números ingresados para ser negativos tienen que ser menor a 0.
        if(number[i] < 0){
            totalDeNegativo++// si son negativos se agregan al let totalDeNegativo. 
        }
    }
    console.log("La cantidad de números negativos es: " + totalDeNegativo)
}
numeroNegativo(prompt("Ingrese una serie de números separados por coma"))
// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
const totalDeImpares =(esImpar) => {
    let numero = parseInt(esImpar)
    for (let i = 1; i <= numero; i++){
        if (i % 2 !== 0){// para comprobar que números son impares. 
            console.log(i)
        }
    }
}
totalDeImpares(prompt("Ingrese un número para contar"))
// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
let serieNumeros2 = prompt("Ingrese una serie de números separados por coma")
let numeros2 = serieNumeros2.split(",")
let numMinimo = Math.min (...numeros2)
console.log("El n° más pequeño de la serie ingresada es " + numMinimo)
// 16) Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
const punto16 = () => {
    let intentos = 0
    let número = Math.floor((Math.random() * 100))
    let usuario;
    do {
    usuario = parseInt(prompt("Ingrese un número del 1 al 100"))
    intentos++
    } while (usuario != número)
    console.log("El número que ingresaste es: " + número)
    console.log("Los intentos fueron: " + intentos)
}
punto16()
// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
const numeroPares =(esPar) => {
    let number = esPar.split(",")
    let totalDePares = 0
    for (let i = 0; i < number.length; i++){ 
        if (number[i] % 2 === 0){
            totalDePares++
        }
    }
    console.log("La cantidad de números pares es: " + totalDePares)
}
numeroPares(prompt("Ingrese una serie de números separados por coma"))
// 18) Dado un array de números, escribir una función que retorne el número más grande del array.
let arrayMayor = [5,27,9,11]
const arrayMax =(número) =>{
    let max = número[0] //se establce el valor cero como primer elemento del array.
    for (let i = 0; i < número.length; i++){
        if (número[i] > max){
            max = número[i]
        }
    }
    console.log("El número más grande del array es " + max)
    return
}
arrayMax(arrayMayor)
// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
let array19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayPares =(numPar) => {
    const pares = numPar.filter(número => número % 2 === 0)// método filter para obtener solo n° pares.
    console.log("Números pares: " + pares)
    return(pares)
}
arrayPares(array19)
// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.
let array20 = [1,4,6,8,10]
const arraySuma =(númeroSuma) => {
    const suma = númeroSuma.reduce((acumulador, elemento) => acumulador + elemento, 0)//utilice este método para sumar o lograr un único valor de todos los elementos del array.
    console.log("La suma del array de números es: " + suma)
    return(suma)
}
arraySuma(array20)
// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
let array21 = ["hola", "me", "hicieron", "sufrir", "con", "este", "tp"]
const arrayStrings =(strings) => {
    for (let i = 0; i < strings.length; i++) {// se hace un recorrido por todo el array por eso comienza en cero.
        strings[i] = strings[i].toUpperCase();// aqui se aplica toUpperCase para convertir en mayúscula el string original. 
    }
    console.log(strings)
    return(strings)
}
arrayStrings(array21)
// 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
let array22 = [1,2,3,4,5]
let númeroX = 2
let almacenarNumMayores = []
const arrayMayorX =(num, X) => {// la X seria (let númeroX) que establece desde que n° se debe buscar el mayor, en este caso desde 2.
    for (let i = 0; i < num.length; i++){
       if (num[i] > X) {
        almacenarNumMayores.push(num[i])
       }
     console.log("Son mayores que X, los siguientes números: " + almacenarNumMayores)
    }
    return almacenarNumMayores
}
arrayMayorX(array22, númeroX)
// 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
let array23 = [3,5,71,10,22]
let suma = 0
let mayorX= 10
let númerosGrandes = []
const sumaYmayor =(number, X) => {
    for (let i = 0; i < number.length; i++){
        if (number[i] > X){
        númerosGrandes.push(number[i])
        console.log("Son mayores que 10, los siguientes números: " + númerosGrandes)
        }
    }
    for (let i = 0; i < number.length; i++){
        suma += number[i]
        console.log("La suma es: " + suma)
    }
    return{
    númerosGrandes: númerosGrandes,
    suma: suma
    }
}
sumaYmayor(array23, mayorX)
// 24) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
let array24 = ["perro", "gato", "serpiente", "elefante", "zorro"]
let nuevosStrings = []
const arrayCaracteres =(caracteresStrings) => {
    for (let i = 0; i < caracteresStrings.length; i++){
        if (caracteresStrings[i].length > 5) {// aqui establezco que se verifique si existen elementos mayores a 5 caracteres.
        nuevosStrings.push(caracteresStrings[i])// con el push se almacena en let nuevosStrings, los elementos con mas de 5 caracteres. 
        }
    }
    console.log("Estos son los elementos con más de 5 caracteres: " + nuevosStrings)
    return(nuevosStrings)
}
arrayCaracteres(array24)
// 25) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
let array25 = ["ambulancia", "mesa", "auto", "casa", "anteojos"]
let stringsA = []
const arrayConA =(stringConA) => {
    for (let i = 0; i < stringConA.length; i++){
        if (stringConA[i].length > 5 && stringConA[i].charAt(0) === "a") {// utilice chartAt para obtener la palabra que comience con A estableciendo una posición 0, es decir, buscara la letra A en el inicio de cada string.
            stringsA.push(stringConA[i])
        }
    }
    console.log("Estos son los elementos con más de 5 caracteres y que comienzan con A: " + stringsA)
    return(stringsA)
}
arrayConA(array25)
// 26) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
let array26 = [11,2,33,4,5,7]
let numX = 4
let primerosTres = []
let todosNumMayores = []
const arrayTres =(número, X) => {
    for (let i = 0; i < número.length; i++){
       if (número[i] > X){
        todosNumMayores.push(número[i])
       } 
    }
    console.log("Son mayores a X, los siguientes números: " + todosNumMayores)
    primerosTres = número.slice(0, 3)
    console.log("Estos números son los tres primeros del array: " + primerosTres)
    return{
        primerosTres: primerosTres,
        todosNumMayores: todosNumMayores
    }
}
arrayTres(array26, numX)
// 27) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
let array27 = [43,56,12,3,9]
let arrayNuevo = []
const arrayMas1 =(numero) => {
    for (let i = 0; i < numero.length; i++){
        arrayNuevo.push(numero[i] + 1)
    }
    console.log("Array nuevo: " + arrayNuevo)
    return(arrayNuevo)
}
arrayMas1(array27)
// 28) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
let array28 = [10, 11, 12, 13, 14, 15]
let arraySinUltimoNum = []
const arrayNuevo1 =(num) => {
    arraySinUltimoNum = num.slice(0, 5)
    console.log("Array sin el último número: " + arraySinUltimoNum)
    return(arraySinUltimoNum)
}
arrayNuevo1(array28)
// 29) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
let array29 = [10, 71, 34, 3, 14, 15]
let array = []
const arrayNuevo2 =(number1) => {
    array = number1.slice(1, 5)// indico la posición de los números que no quiero que esten en el nuevo array.
    console.log("Array original sin el primer y último número: " + array)
    return(array)
}
arrayNuevo2(array29)
// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
let array30 = [4,6,3,8,20,54]
let X = 2
let arraySinX =[]
const arrayNuevo3 =(numero, X) => {
    for (let i = 0; i < numero.length; i++){
        if (i !== X) { // aqui indico que el n° que esta en la posición de X, no sea agregado al nuevo array. 
            arraySinX.push(numero[i])
        }
    }
    console.log("array nuevo: " + arraySinX)
    return(arraySinX)
}
arrayNuevo3(array30, X)
