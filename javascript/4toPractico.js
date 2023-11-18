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
    console.log(i);
}
// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.
// 9) Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// 16) Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// 18) Dado un array de números, escribir una función que retorne el número más grande del array.
// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// 24) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// 25) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// 26) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// 27) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// 28) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// 29) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.