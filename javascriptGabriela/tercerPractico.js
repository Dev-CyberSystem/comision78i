
//Crear una función que tome dos números como parámetros y devuelva el número mayor.

    // const numeroMayor =(num1 , num2) => {       

    //     if ( num1 > num2) {
    //         console.log (num1 , "Es Mayor")}
    //     else if (num1 ===num2) {
    //         console.log ("Son Iguales")
    //     }
    //     else{
    //         console.log (num2 , "Es Mayor")
    //     }
        
    // }

    // numeroMayor(10,10)


  //Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
   

        // const CompararNumero = (numero) => {
        //     if (numero>0){
        //         console.log ("Positivo")
        //     }
        //     else if (numero<0){
        //         console.log ("Negativo")
        //     }
        //     else {
        //         console.log ("Cero")
        //     }
            
        // }
        //  CompararNumero(-10)  




//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

    // const numeroDivisible = (numero) =>{
    //     if (numero % 2 === 0){
    //         console.log ("Par")
    //     }
    //     else{
    //         console.log ("Impar")
    //     }

    // }

    // numeroDivisible (2)



//Crear un programa que pida al usuario un número y luego muestre si es par o impar. 
  
let numero = prompt("Ingrese un número:")


if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
} else {
  console.log(numero + " es un número impar.");
}
   



// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

    // let numero = parseInt(prompt ("Ingrese un Numero"))

    // const signoNumero = (numero) => {
    //     if (numero > 0){
    //         console.log ( numero , "Es Positivo")
    //     }
    //     else if (numero < 0){
    //         console.log ("Es Negativo")
    //     }
    //     else {
    //         console.log ("Es Cero")
    //     }
    // }
    // signoNumero(numero)

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.


    //  let num1 = prompt("Ingrese primer numero")
    //  let num2 = prompt ("Ingrese segundo numero")

    //  const numMayor = () => {
    //     if (num1 > num2) {
    //         console.log ( "El primer numero (" + num1 + ") es mayor que  (" + num2 + ") ")
    //     }
    //     else if (num2 > num1){
    //         console.log ( "El segundo numero (" + num2 + ") es mayor que  (" + num1 + ") ")
    //     }
    //     else {
    //         console.log ("Ambos numeros son iguales")
    //     }
    //  }
    // numMayor (num1 , num2)

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

    // let ingresoContraseña = prompt ("Ingrese una contraseña")
    
    //  const contraseña = () => {
        
    //     if (ingresoContraseña.length < 8){
    //         console.log ("La contraseña debe tener al menos 8 caracteres")
    //     } else{
    //         let caracterEspecial = /[!@#]+/
    //         if (!caracterEspecial.test (ingresoContraseña)){
    //             console.log("La contraseña debe tener al menos un caracter especial")
    //         }
    //         else{
    //             console.log("contraseña correctamente generada")
    //         }
    //     }
    // }

    // contraseña ()
        

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

    // let calificacion = parseInt (prompt ("Ingrese su calificacion"))

    // const nota =() => {
    //     if (calificacion >=70){
    //         console.log ("Esta aprobado")
    //     } else {
    //         console.log ("Esta Desaprobado")
    //     }
    // }
    //  nota()


//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".

    

    //   function palindromo (palabraInvertida){
    //     let array = palabraInvertida.split ("")
    //     let reverse = array.reverse ()
        
    //     if (palabraInvertida === reverse.join("")){
    //         console.log ("Es Palindromo")
    //     }else{
    //         console.log ("No es Palindromo")
    //     }

    //   }

    //   palindromo ("juan")

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

    //  let ingresarLetra= prompt("Ingrese una letra")

    //  const letra = () => {
    //     if (ingresarLetra === "a" || ingresarLetra === "e" || ingresarLetra === "e" ||ingresarLetra === "o" || ingresarLetra === "u"){
    //         console.log ("Es una vocal")
    //     }
    //     else{
    //         console.log ("Es una consonante")
    //     }
    // }
    //   letra()

    



// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

    
// let numero = parseInt(prompt("Ingrese un número del 1 al 7:"))


// if (numero >= 1 && numero <= 7) {
    
//     let dia
//     switch (numero) {
//         case 1:
//             dia = "Domingo"
//             break
//         case 2:
//             dia = "Lunes"
//             break
//         case 3:
//             dia = "Martes"
//             break
//         case 4:
//             dia = "Miércoles"
//             break
//         case 5:
//             dia = "Jueves"
//             break
//         case 6:
//             dia = "Viernes"
//             break
//         case 7:
//             dia = "Sábado"
//             break
//     }

//     console.log("El día correspondiente al número ingresado es:", dia)
// } else {
//     console.log("El número ingresado no está dentro del rango válido.")
// }




// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
// function esPrimo (numero){
    
//     if (numero <=1){
//         return false}
//         for (let i=2; i<= numero/2; i++){
//             if (numero % i ===0){
//                 return false
//             }
//         }
//         return true
        
        
//     }
    
    
//     let numero = parseInt( prompt("Ingrese un numero"))
//     if (esPrimo (numero)){
//         console.log ("es primo")

    
//     }
//     else (
//         console.log ("no es primo")
//     )


// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

//   let edad = prompt ("Ingrese su edad")

  
// if (edad >= 18) {

//   console.log("Es mayor de edad");
// } else {
  
//   console.log("Es menor de edad");
// }

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
  
// let numero1 = parseFloat(prompt("Ingrese el primer número:"))
// let numero2 = parseFloat(prompt("Ingrese el segundo número:"))


// let suma = numero1 + numero2

// if (suma > 100) {
//   console.log("La suma de los números es mayor a 100")
// } else if (suma < 100) {
//   console.log("La suma de los números es menor a 100")
// } else {
//   console.log("La suma de los números es igual a 100")
// }
 

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// let num1 = parseInt (prompt("Ingrese el primer numero"))
// let num2 = parseInt (prompt("Ingrese el segundo numero"))
// let num3 = parseInt (prompt("Ingrese el tercer numero"))

// if (num1 >= num2 && num1 >=num3){
//     console.log ("El numero "+ num1 + " es mayor")
// }
// else if (num2 >= num1 && num2 >= num3){
//     console.log ("El numero " + num2 + " es mayor")
// }
// else {
//     console.log ("El numero " + num3 + " es mayor")
// }

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//   let letra = prompt("Ingrese una letra")

//   if (letra === letra.toUpperCase()){
//     console.log ("La letra " + letra + " es mayuscula")
//   }
 
//   else {
//     console.log ("Es minuscula ")
//   }

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// function fizzBuzz (numero){
//     if(numero % 3 === 0 && numero % 5 ===0){
//         console.log ("fizzBuzz")
//     }
//     else if (numero % 3 === 0){
//         console.log("Fizz")
//     }
//     else if ( numero % 5 === 0){
//         console.log ("Buzz")
//     }
//     else {
//         console.log (numero)
//     }
// }


// fizzBuzz(45)



// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

//  let numero = parseInt(prompt("Ingese un numero"))

//  function esNumeroPerfecto(numero) {
//    let sumaDivisores = 0
 
//    for (let i = 1; i < numero; i++) {
//      if (numero % i === 0) {
//        sumaDivisores += i;
//      }
//    }
 
//    if (sumaDivisores === numero) {
//      return true;
//    } else {
//      return false;
//    }
//  }
 
//  let esPerfecto = esNumeroPerfecto(numero);
 
//  if (esPerfecto) {
//    console.log(numero + " es un número perfecto.");
//  } else {
//    console.log(numero + " no es un número perfecto.");
//  }
//  esNumeroPerfecto()

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.




// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.