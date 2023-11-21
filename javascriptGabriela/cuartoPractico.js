//1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

   
//    let numero =parseInt(prompt("Ingrese un numero del 1 al 12"))

//    let meses = ["Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

//    if( numero >=1 && numero <=12){
//     let nombreMes = meses[numero -1]
//     console.log( "el numero " + numero + "corresponde al mes " + nombreMes)

//    }
//    else {
//     console.log ("El numero ingresado no corresponde")
//    }



// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

//    let numero =parseInt(prompt("Ingrese un numero del 1 al 7"))

//    let dias = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

//    if( numero >=1 && numero <=7){
//     let diaSemana = dias[numero -1]
//     console.log( "el numero " + numero + "corresponde al dia " + diaSemana)

//    }
//    else {
//     console.log ("El numero ingresado no corresponde")
//    }


// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.


//   let ingresarLetra= prompt("Ingrese una letra")

//      const letra = () => {
//         if (ingresarLetra === "a" || ingresarLetra === "e" || ingresarLetra === "e" ||ingresarLetra === "o" || ingresarLetra === "u"){
//             console.log ("Es una vocal")
//         }
//         else{
//             console.log ("Es una consonante")
//         }
//     }
//       letra()


// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.


//    let dias = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

//    function mostrarDiaSemana (numero){

//        if( numero >=1 && numero <=5){
//            let nombreDia = dias[numero -1]
//            console.log( "el numero " + numero + "corresponde al dia " + nombreDia)
           
//         }
//         else {
//             console.log ("El numero ingresado no corresponde")
//         }
        
//     }

//     mostrarDiaSemana (3)  




// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

//       let letra = prompt("Ingrese una letra")

//   if (letra === letra.toUpperCase()){
//     console.log ("La letra " + letra + " es mayuscula")
//   }
 
//   else {
//     console.log ("Es minuscula ")
//   }


// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

    // let calificacion = parseInt (prompt ("Ingrese su calificacion, siendo la misma un nuemero entre 0 y 10"))

    // const nota =() => {
    //     if (calificacion >=0 && calificacion <= 5){
    //         console.log ("Calificacion: " + calificacion+  " : SUSPENDIDO")
    //     } 
    //     else if (calificacion >=6 && calificacion <= 7 ){

    //         console.log ("Calificacion: " + calificacion+  " : APROBADO")
    //     }
    //     else if (calificacion >=8 && calificacion <= 9 ){

    //         console.log ("Calificacion: " + calificacion+  " : NOTABLE")
    //     }
    //     else if (calificacion === 10 ){

    //         console.log ("Calificacion: " + calificacion+ ": SOBRESALIENTE")
    //     }
    //      else {
    //         console.log ("Dato Invalido")
    //     }
    // }
    //  nota()


// Imprimir los números pares del 2 al 20 en la consola.


//    for (let i=2; i<=20; i+=2 ){
//     console.log (i)
//    }

// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

//   let palabra = ["javascript"]

//   for ( i=0; i< palabra.length; i++){
//     let letraMay = palabra [i].toUpperCase()
//     console.log (letraMay)
//   }



// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

    //  let numero = prompt("Ingrese un numero")

    //  for (let i=1; i<= numero; i++){
    //     console.log (i)
    //  }


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
    
    // let numeros = prompt("Ingrese numeros separados por coma")

    //  let numerosArray = numeros.split (",").map(function(numero){
    //     return parseInt (numero.trim())
    //  })

    //  let maximo = Math.max.apply( null, numerosArray)

    //  console.log ( "El numero mas grande de la serie es: " + maximo)


// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
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
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.