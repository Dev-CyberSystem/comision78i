//Tarea 
//Quiz Javascript - Introducción


//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

// function sumar (){
//     return 10 + 2
//     
//                   }                              
// sumar()

// const resultado = sumar ()       //Guarda resultado en una variable
// console.log(resultado)


// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.

//  let num1 = 10
//  let num2 = 8
//console.log (num1===num2)
   
  
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

//  let num3 = 6
//  let num4 = 4
//  console.log (num3 !== num4)
 

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
  
// let numero = 10; numero++ , numero++, numero++ , numero++ , numero++  

// console.log (numero)
    


// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
  
// let numero = 10; numero-- , numero--, numero-- 

//     console.log (numero)

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
   
// let texto = "Este"

// let cadenaDeTexto = texto + "es el segundo Practico"

// console.log (cadenaDeTexto)





// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

//    let nombre = true
//    let apellido = false

//    nombre && apellido  // false

//    console.log (nombre && apellido)





// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
    
    //   let texto1= true
    //   let texto2=false
    //   texto1 || texto2 // true
 
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

    //  let num7 = 5
     
    //  num7 > 2  // true

    //  console.log (num7 > 2)

   
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

    // let num8 = 20

    // num8 <= 10 // false

    // console.log (num8 <=10)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
    
    // function sumar (a , b) {
    //     return a + b
    // }

    // const resultado = sumar (20 , 10)
    // console.log (resultado)


// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
    
// function restar (a , b) {
//     return a - b
// }

// const resultado1 = restar (20 , 5 )
// console.log (resultado1)
    
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

// let number = 5

// function suma ( number , b) {
//    return number + b
// }
// let resultado = suma ( number , 10)
// console.log (resultado)


  
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola. 

// let a= "Buen"
// let b= " Dia"
//  function texto (){
             
//              return (a + b)

//                   }

//  let mostrar = texto ( a , b)
//  console.log (mostrar)

    
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
   
//    let Booleano1 = true
//    let Booleano2 = false
   
//    function compararBooleano (){
     
      
//       return Booleano1 === Booleano2
//   }
   
//     let resultado = compararBooleano (Booleano1 , Booleano2)
//     console.log (resultado)




// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

// let Booleano1 = true
// let Booleano2 = false

// function compararBooleano (){
        //return Booleano1 !== Booleano2
// }

//  let resultado = compararBooleano (Booleano1 , Booleano2)
//  console.log (resultado)


// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
  
    let number1 = 10
    let number2 = 6

    function compararNumeros (){
        return number1 > number2
    }

    let resultado = compararNumeros (number1, number2)
    console.log (resultado)

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
     
       let ingresarNumero = prompt ("Ingrese su numero de telefono")

       console.log (ingresarNumero)
     
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
   

let ingresarNombre = prompt ("Ingrese su nombre")

console.log (ingresarNombre)


// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

  
let ingresarNumero1 = parseInt (prompt ("Ingrese el primer numero"))
let ingresarNumero2 = parseInt (prompt ("Ingrese el segundo numero"))

let resultadoSuma = ingresarNumero1 + ingresarNumero2

document.write ("La suma es: " + resultadoSuma)

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

let añoNacimiento = parseInt (prompt("Ingrese su año de Nacimiento"))

let fechaActual = new Date ()
let añoActual = fechaActual.getFullYear ()
let edad = añoActual - añoNacimiento

//console.log (edad) para probar si me devuele el resultado


let esMayorDeEdad = edad >= 18

console.log(esMayorDeEdad)  //Para comprobar si es mayor de edad

let mensaje = "Su edad actual es" + edad 

document.write (mensaje)

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

let texto = "Todo es posible si crees en ti mismo y nunca te rindes. El camino al éxito puede ser difícil, pero cada obstáculo te acerca un paso más a tus metas. ¡No hay límites para tus sueños si tienes una actitud optimista!"

let longitud = texto.length

console.log (longitud)



function contador de palabras (){
    
}