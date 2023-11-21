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
//falta!!!!!!!!!!!


// function esPalindromo(palabra){

// palabra = palabra.toLowerCase().replace(/\s/g, '')

// for (let i=0; i < palabra.lenght /2; i++){
//     if(palabra[i] !== palabra [palabra.lenght -1 -i]){
//         return false

//     }
//  }
//  return true
// }


// let palabra = prompt ("Ingrese una palabra")


// if (esPalindromo(palabra)){
//     console.log ( palabra + "Es Palindromo")
// }
// else {
//     console.log ("No es Palindromo")
// }




// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

//FALTAAAA

//   let numero = prompt("Ingrese numeros separados por coma")

//      let numerosArray = numero.split (",").map(numero)
        

//      let sumarPar = 0

    
//     for (let i=0; i < numerosArray.length; i++) {
    
//     if (numerosArray[i] % 2 === 0) {
//       sumarPar += numerosArray[i];
//     }
//     }

//     console.log ("La suma de los numeros pares es:" + sumarPar)





// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

// let numeros = prompt("Ingresa una serie de números separados por coma:")



// let numerosArray = numeros.split(",")

// let contadorNegativos = 0


// for (let i = 0; i < numerosArray.length; i++) {
  
//   let numero = parseInt(numerosArray[i]);

  
//   if (numero < 0) {
//     contadorNegativos++;
//   }
// }


// console.log("Cantidad de números negativos: " + contadorNegativos)







// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

  
// let numero = parseInt(prompt("Ingresa un número:"))


// for (let i = 1; i <= numero; i++) {
 
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }



// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

//let numeros = prompt("Ingrese una serie de números separados por coma: ")


// let arregloNumeros = numeros.split(",")


// let numerosConvertidos = arregloNumeros.map(function(numero){
//   return parseFloat(numero);
// })

// let numeroMasPequeno = Math.min.apply(Math, numerosConvertidos)


// console.log("El número más pequeño es: " + numeroMasPequeno)







// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.



// const numeroAleatorio = Math.floor(Math.random() * 100) + 1


// let intentos = 0
// let adivinado = false

// while (!adivinado) {
 
//   const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));

//   intentos++


//   if (numeroUsuario === numeroAleatorio) {
//     console.log("¡Correcto! Adivinaste el número en ${intentos} intentos.")
//     adivinado = true;
//   } else if (numeroUsuario < numeroAleatorio) {
//     console.log("Intenta con un número mayor.")
//   } else {
//     console.log("Intenta con un número menor.")
//   }
// }



// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.



// let serieNumeros = prompt("Ingrese una serie de números separados por coma:")


// let numeros = serieNumeros.split(",")

// var contadorPares = 0


// for (let i = 0; i < numeros.length; i++) {
 
//   if (parseInt(numeros[i]) % 2 === 0) {
//     contadorPares++;
//   }
// }
// console.log("La cantidad de números pares es: " + contadorPares)





// Dado un array de números, escribir una función que retorne el número más grande del array.


// function encontrarMaximo(arr) {
//     return Math.max(...arr);
//   }
  
  
//   let numeros = [10, 5, 80, 20, 3];
//   let maximo = encontrarMaximo(numeros);
  
//   console.log(maximo)




// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.


// function encontrarNumerosPares(array) {
    
//     var numerosPares = array.filter(function(numero) {
//       return numero % 2 === 0;
//     })
    

//     return numerosPares
//   }
  

//   var arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var numerosPares = encontrarNumerosPares(arrayOriginal);
  
//   console.log(numerosPares)




// Dado un array de números, escribir una función que retorne la suma de todos los números del array.


//Metodo Reduce

// function sumaArray(array) {
//     return array.reduce((a, b) => a + b, 0)
//   }
  
  
//   const numeros = [1, 2, 3, 4, 5]
//   const resultado = sumaArray(numeros)
//   console.log(resultado) // Salida: 15




// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

function convertirAMayusculas(arr) {
   
    const nuevoArr = arr.map(function(str) {
      return str.toUpperCase()
    });
    
    return nuevoArr
  }
 
  const arrayOriginal = ['hola', 'mundo', 'javascript']
  const arrayMayusculas = convertirAMayusculas(arrayOriginal)
  console.log(arrayMayusculas)





// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.