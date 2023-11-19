// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
// const mesElegido = () => {
//     let mes = parseInt(prompt("Ingrese un numero del 1-12 para determinar el mes"))
//     switch (mes) {
//         case 1:
//             console.log("Es enero")
//             break;
//         case 2:
//             console.log("Es febrero")
//             break;
//         case 3:
//             console.log("Es marzo")
//             break;
//         case 4:
//             console.log("Es abril")
//             break;
//         case 5:
//             console.log("Es mayo")
//             break;
//         case 6:
//             console.log("Es junio")
//             break;
//         case 7:
//             console.log("Es julio")
//             break;
//         case 8:
//             console.log("Es agosto")
//             break;
//         case 9:
//             console.log("Es septiembre")
//             break;
//         case 10:
//             console.log("Es ocrubre")
//             break;
//         case 11:
//             console.log("Es noviembre")
//             break;
//         case 12:
//             console.log("Es diciembre")
//             break;
//         default:
//             console.log("No es un mes válido")
//             break;
//     }
// }
// mesElegido();

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
// const diaElegido = () => {
//     let dia = prompt("Ingresa un numero del 1-7 para elegir el dia de la semana")
//     switch (dia) {
//         case "1":
//             console.log("Es lunes")
//             break;
//         case "2":
//             console.log("Es martes")
//             break;
//         case "3":
//             console.log("Es miercoles")
//             break;
//         case "4":
//             console.log("Es jueves")
//             break;
//         case "5":
//             console.log("Es viernes")
//             break;
//         case "6":
//             console.log("Es sabado")
//             break;
//         case "7":
//             console.log("Es domingo")
//             break;
//         default:
//             console.log("Numero inválido")
//             break;
//     }
// }
// diaElegido();

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
// const vocalCons = () => {
//     let caracter = prompt("Ingresar caracter").toUpperCase()
//     switch (caracter) {
//         case "A":
//             console.log("Es vocal")
//             break;
//         case "E":
//             console.log("Es vocal")
//             break;
//         case "I":
//             console.log("Es vocal")
//             break;
//         case "O":
//             console.log("Es vocal")
//             break;
//         case "U":
//             console.log("Es vocal")
//             break;
//         default:
//             console.log("Es consonante")
//             break;
//     }
// }
// vocalCons()

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
// const diaArray = ( ) => {
//     let dia = parseInt(prompt("Ingresar numero del 1-5"))
//     let array = [NaN, "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
//     switch (dia) {
//         case 1:
//             console.log(array[1])
//             break;
//         case 2: 
//             console.log(array[2])
//             break;
//         case 3:
//             console.log(array[3])
//             break;
//         case 4: 
//             console.log(array[4])
//             break;
//         case 5:
//             console.log(array[5])
//             break;
//         default:
//             console.log("Numero inválido")
//             break;
//     }
// }
// diaArray()

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
// const mayuMinu = () => {
//     let letra = prompt("Ingresa una letra")
//     if(letra == letra.toLowerCase()){
//         console.log("Es minuscula")
//     }
//     else{
//         console.log("Es mayuscula")
//     }
// }
// mayuMinu()

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
// const notas = () => {
//     let nota = parseInt(prompt("Ingrese su nota"))
//     if(nota >= 0 && nota <= 2){
//         console.log("Está suspendido")
//     }
//     else if(nota > 2 && nota <= 4){
//         console.log("Está aprobado")
//     }
//     else if(nota > 4 && nota <= 7){
//         console.log("Usted es notable")
//     }
//     else if(nota > 7 && nota <= 10){
//         console.log("Usted es sobresaliente")
//     }
// }
// notas()

// Imprimir los números pares del 2 al 20 en la consola.
// const pares = () =>{
//     for(let i = 2; i <= 20; i+=2){
//         console.log(i)
//     }
// }
// pares()

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// const mayuArray = () => {
//     let cadena = prompt("Ingresar string")
//     for(let i = 0; i < cadena.length; i++){
//         if(cadena[i] == cadena[i].toUpperCase()){ 
//             console.log(cadena[i])
//         }
//     }
// }
// mayuArray()

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// const contarNumeros = () => {
//     let numero = parseInt(prompt("Ingresar numero"))
//         for(let i = 1; i <= numero; i++){
//             console.log(i)
//         }
//     }
//     contarNumeros()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// const numeroGrande = () => {
//     let numeros = prompt("Ingresar una cadena de numeros separados por comas")
//     let array = numeros.split(",")
//     let numMaximo = Math.max(...array)
//     console.log(numMaximo)
// }
// numeroGrande()

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
//   let texto = prompt("Ingresar texto")
//   function palindro(texto){
//     let separarCadena = texto.split(""); 
//     let invertirArreglo = separarCadena.reverse(); 
//     let unirArreglo = invertirArreglo.join("");    
//     if( texto == unirArreglo){
//         console.log("Es un palíndromo")
//     }else{
//         console.log("No es un palíndromo")
//     }
//   }
//   palindro(texto)

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// const sumaPares = () => {
//     let numeros = prompt("Ingresar numeros separados por comas")
//     let array = numeros.split(",")
//     let suma = 0
//     for(let i = 0; i <= array.length; i++){
//         if(array[i] % 2 == 0){
//             suma += parseInt(array[i])
//         }
//     }
//     console.log(suma)
// }
// sumaPares()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// const numNegativos = () => {
//     let numeros = prompt("Ingresar numeros separados por comas")
//     let array = numeros.split(",")
//     for(let i = 0; i <= array.length; i++){
//             if(parseInt(array[i]) < 0){
//                 console.log(array[i])
//             }
//     }
// }
// numNegativos()

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// const impares = () => {
//     let numeros = parseInt(prompt("Ingresar un numero"))
//     for(let i = 1; i <= numeros; i+=2){
//         console.log(i)
//     }
// }
// impares()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// const numeroPequeño = () => {
//     let numeros = prompt("Ingresar una cadena de numeros separados por comas")
//     let array = numeros.split(",")
//     let numMinimo = Math.min(...array)
//     console.log(numMinimo)
// }
// numeroPequeño()

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// const adivinar = () => {
//     let numRandom = (Math.floor(Math.random() * 100) + 1)
//     let numero = parseInt(prompt("Ingresar numero random del 1-100"))
//     let aux = 0
//     while(numero != numRandom){
//         aux++
//         numero = parseInt(prompt("Ingresar numero random del 1-100. Intento anterior fallido"))
//     }
//     console.log("Usted fallo " + aux + " veces antes de acertar")
// }
// adivinar()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// const numImpares = () => {
//     let numeros = prompt("Ingresar numeros separados por ,")
//     let array = numeros.split(",")
//     let cantidad = 0
//     for(let i = 0; i <= array.length; i++){
//         if(parseInt(array[i]) % 2 != 0){
//             cantidad++
//         }
//     }
//     console.log(cantidad-1)
// }
// numImpares()

// Dado un array de números, escribir una función que retorne el número más grande del array.
// const arrayGrande = () => {
//     let array = [2, 22, 5, 6, 7, 10]
//     let grande = Math.max(...array)
//     console.log(grande)
// }
// arrayGrande()

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// const arrayPares = () => {
//     let array = [2, 13, 8, 3, 7, 10, 13, 20, 12]
//     let arrayNuevo = []
//     for(let i = 0; i <= array.length; i++){
//         if(array[i] % 2 == 0){
//             arrayNuevo.push(array[i])
//         }
//     }
//     console.log(arrayNuevo)
// }
// arrayPares()

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// const arraySuma = () => {
//     let array = [2, 2, 2]
//     let suma = 0
//     for(let i = 0; i < array.length; i++){
//         suma = suma + array[i]
//     }
//     console.log(suma)
// }
// arraySuma()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// const arrayString = () => {
//     let array = ["hola", "como", "estas"]
//     let arrayNuevo = []
//     for(let i = 0; i < array.length; i++){
//         arrayNuevo.push(array[i].toUpperCase())
//     }
//     console.log(arrayNuevo)
// }
// arrayString()

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// const arrayMayor = () => {
//     let numeros = [4, 6, 8, 2, 10]
//     let x = 6
//     let array = []
//     for(let i = 0; i < numeros.length; i++){
//         if (numeros[i] > x){
//             array.push(numeros[i])
//         }
//     }
//     console.log(array)
// }
// arrayMayor()

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// const arraySumaMayor = () => {
//     let numeros = [2, 2, 2, 10, 12, 14]
//     let suma = 0
//     let array = []
//     for(let i = 0; i < numeros.length; i++){
//         suma = suma + numeros[i]
//         if (numeros[i] > 10){
//             array.push(numeros[i])
//         }
//     }
//     console.log(suma)
//     console.log(array)
// }
// arraySumaMayor()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// const cadenaString = () => {
//     let string = ["hola", "Holanda", "Argentina", "chau", "celu", "control"]
//     let array = []
//     for(let i = 0; i < string.length; i++){
//         if(string[i].length > 5){
//             array.push(string[i])
//         }
//     }
//     console.log[string]
//     console.log(array)
// }
// cadenaString()

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// const cadenaStringA = () => {
//     let string = ["hola", "Holanda", "Argentina", "chau", "celu", "control", "aviones", "adolfo"]
//     let array = []
//     for(let i = 0; i < string.length; i++){
//         if(string[i].length > 5 && string[i][0] == "a"){
//             array.push(string[i])
//         }
//     }
//     console.log[string]
//     console.log(array)
// }
// cadenaStringA()

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// const arrayMayorCortado = () => {
//     let numeros = [4, 6, 8, 2, 10, 50, 40, 54]
//     let x = 6
//     let array = []
//     let contador = 0
//     for(let i = 0; i < numeros.length; i++){
//         if (numeros[i] > x){
//             array.push(numeros[i])
//             contador++
//         }
//         if (contador == 3){
//             break
//         }
//     }
//     console.log(array)
// }
// arrayMayorCortado()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// const originalMasUno = () => {
//     let numeros = [2, 5, 5, 1, 4]
//     let array = []
//     for(let i = 0; i < numeros.length; i++){
//         array.push((numeros[i] + 1))
//     }
//     console.log(numeros)
//     console.log(array)
// }
// originalMasUno()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// const originalUltimo = () => {
//     let numeros = [2, 5, 5, 1, 4]
//     let array = []
//     let contador = 0
//     for(let i = 0; i < numeros.length; i++){
//         array.push(numeros[i])
//         contador++
//         if (contador == (numeros.length - 1)){
//             break
//         }
//     }
//     console.log(numeros)
//     console.log(array)
// }
// originalUltimo()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// const originalPrimeroUltimo = () => {
//     let numeros = [2, 5, 5, 1, 4]
//     let array = []
//     let contador = 0
//     for(let i = 0; i < numeros.length; i++){
//         if( i == 0){
//             numeros.shift()
//         }
//         array.push(numeros[i])
//         contador++
//         if (contador == (numeros.length - 1)){
//             break
//         }
//     }
//     console.log(array)
// }
// originalPrimeroUltimo()

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
const numeroMenosX = () => {
    let numeros = [2, 4, 5, 6]
    let x = 2
    let array = []
    for(let i = 0; i < numeros.length; i++){
        if (i == x){
            numeros.shift()
        }
        array.push(numeros[i])
    }
    console.log(array)
}
numeroMenosX()