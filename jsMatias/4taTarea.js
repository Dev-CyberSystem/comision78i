// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
const esMes = () => {
    let num = Number(prompt('Ingresa un número del 1 al 12'))
    switch (num) {
        case num <= 0 || num >= 12:
                alert('Valor incorrecto, debe ser mayor que 0 y menor que 12')
                break
        case 1:
            console.log('Enero')
            break
        case 2:
            console.log('Febrero')
            break
        case 3:
            console.log('Marzo')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Mayo')
            break
        case 6:
            console.log('Junio')
            break
        case 7:
            console.log('Julio')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Septiembre')
            break
        case 10:
            console.log('Octubre')
            break
        case 11:
            console.log('Noviembre')
            break
        case 12:
            console.log('Diciembre')
            break
        default:
            console.log('Buenn Mes')
            break
    }
}
// esMes()

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
const esDia = () => {
    let num = Number(prompt('Ingresa un numero del 1 al 7'))

    switch (num) {
        case num <= 0 || num >= 7:
            alert('Valor incorrecto, debe ser mayor que 0 y menor que 12')
            break
        case 1:
            console.log('Lunes')
            break
        case 2:
            console.log('Martes')
            break
        case 3:
            console.log('Miércoles')
            break
        case 4:
            console.log('Jueves')
            break
        case 5:
            console.log('Viernes')
            break
        case 6:
            console.log('Sábado')
            break
        case 7:
            console.log('Domingo')
            break
        default:
            console.log('Buen Día')
            break
    }
}
// esDia();

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
const esVocal = () => {
    let letra = prompt('Ingresa un caracter')
    if('aeiou'.includes(letra.toLowerCase())){
        console.log('Ingresaste una VOCAL')
    }else if('1234567890'.includes(letra)){
        console.log('Ingresaste un NUMERO')
    }else{
        console.log('Ingresaste una CONSONANTE')
    }
}
// esVocal()


// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
const diaPosicion = (nro) =>{
    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

    switch (nro){
        case 0:
            console.log(dias[0])
            break
        case 1:
            console.log(dias[1])
            break
        case 2:
            console.log(dias[2])
            break
        case 3:
            console.log(dias[3])
            break    
        case 4:
            console.log(dias[4])
            break    
        case 5:
            console.log(dias[5])
            break    
        case 6:
            console.log(dias[6])
            break
        default:
            console.log('Aburrido...')    
    }
}
// diaPosicion(5)


// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const esMayus = (letra) =>{
    const minus = 'abcdefghijklmnopqrstuvwxyz'
    if(minus.includes(letra)){
        console.log('La letra ingresada es MINUSCULA')
    }else{
        console.log('La letra ingresada es MAYUSCULA')
    }
}
// esMayus('x')

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
const esNumero = (num) => {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    if(num>5 || num<0) return console.log('numero invalido')
    switch (num) {
        case 1:
            console.log(`el nro ingresado corresponde al dia ${dias[num]}`)
            break
        case 2:
            console.log(`el nro ingresado corresponde al dia ${dias[num]}`)
            break
        case 3:
            console.log(`el nro ingresado corresponde al dia ${dias[num]}`)
            break
        case 4:
            console.log(`el nro ingresado corresponde al dia ${dias[num]}`)
            break
        case 5:
            console.log(`el nro ingresado corresponde al dia ${dias[num]}`)
            break
        default:
            console.log(`el nro ingresado es inválido`)
            break
    }
}
// esNumero(1)


// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
const calificacion = (num) =>{
    switch (num){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('Suspendido')
            console.log('Suspenso')
            break
        case 6:
        case 7:
        case 8:
            console.log('Aprobado')
            break
        case 9:
            console.log('Notable')
            break
        case 10:
            console.log('Sobresaliente')
            break
    }
}
// calificacion(6)


// Imprimir los números pares del 2 al 20 en la consola.
const nrosPares = () =>{
    for(i=2; i<=20; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// nrosPares()


// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
const string = (palabra) =>{
    for(i=0; i<=palabra.length; i++){
        console.log(palabra[i].toUpperCase())
    }
}
// string('como estas')


// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
const nrosAnteriores = () =>{
    let numero = Number(prompt('Ingresa un número'))
    for(i=1; i<numero; i++){
        console.log(i)
    }
}
// nrosAnteriores()


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
const masGrande = () =>{
    let numero = prompt('Ingresa una serie de numeros separados por coma')
    let array = numero.split(',')
    let nroArray = []
    let mayor = 0;
    for(i=0; i<=array.length-1; i++){
        nroArray.push(parseInt(array[i]))
        if(array[i]>i) mayor = array[i]
    }
    console.log(mayor)
}
// masGrande()


// Imprimir los números pares del 2 al 20 en la consola.
const esPar = () =>{
    for(i=2; i<=20; i++){
        if(i%2 == 0) console.log(i)
    }
}
// esPar()


// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
const esMayuscula = (str) =>{
    let array = str.replace(' ','').split('')
    for(i=0; i<array.length; i++){
        console.log(array[i].toUpperCase())
    }
}
// esMayuscula('vllc')


// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
const menoresQue =()=>{
    let nroUsuario = Number(prompt('Ingresa un numero'))
    if(isNaN(nroUsuario)) return console.log('Solo podes ingresar numeros')
    for(i=1; i<nroUsuario; i++){
        console.log(i)
    }
}
// menoresQue()


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
const nroMasGrande = () =>{
    let nroUsuario = prompt('Ingresa los numeros que quieras separados por una coma')
    let mayor = 0
    let array = nroUsuario.split(',')
    // console.log(array)
    for(i=0; i<array.length; i++){
        if(Number(array[i]> mayor)) {
            mayor = array[i]
        } 
    }
    console.log(mayor)
}
// nroMasGrande()


// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
const esPalindromo = () =>{
    let palabra = prompt('Ingresa una palabra')
    let palabraArray = palabra.split('')
    let palabraReves = palabraArray.reverse().join().replaceAll(',','')
    
    if(palabra == palabraReves){
        console.log('PALINDROMO')
    }else{
        console.log('NO es palindromo')
    }
}
// esPalindromo()


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
const sumaPares = () =>{
    let numeros = prompt('ingrese numeros separados por coma')
    let suma = 0;
    let array = numeros.split(',')
    for(i=0; i<array.length; i++){
        if(Number(array[i])%2 === 0){
            suma += Number(array[i])
        }
    }
    console.log(suma)
}
// sumaPares()


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// Dado un array de números, escribir una función que retorne el número más grande del array.
// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X