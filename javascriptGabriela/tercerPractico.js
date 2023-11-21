
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




//Crear un programa que pida al usuario un número y luego muestre si es par o impar. FALTA!!!!!!!!!!!!!!!!!!!!!!!
  
//    let numero = parseInt(prompt ("Ingrese un numero"))

//    const restoNumero = (numero) => {
//     if (numero % 2 === 0){
//         console.log ("El numero" + numero + "es par")
//     }
//     else {
//         console.log ("El numero" + numero + "es impar")
//     }
//     restoNumero()
//     }

      



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

    // let ingreseNumero = prompt("Ingrese un numero del 1 al 7")
    // let fecha = new Date (ingreseNumero)
    // let dia = ingreseNumero.getDay() //me da la fecha en formato numero

    // let diaSemana

   
    
    // switch (dia){
    //     case 0 :
    //     diaSemana = "Domingo"
    //     //console.log (diaSemana)
    //     break;

    //     case 1 : 
    //     diaSemana = "Lunes"
    //     //console.log (diaSemana)
    //     break;

    //     case 2 : 
    //     diaSemana = "Martes"
    //    // console.log (diaSemana)
    //     break;

    //     case 3 : 
    //     diaSemana = "Miercoles"
    //    // console.log (diaSemana)
    //     break;

    //     case 4 : 
    //     diaSemana = "Jueves"
    //     //console.log (diaSemana)
    //     break;

    //     case 5: 
    //     diaSemana = "Viernes"
    //     //console.log (diaSemana)
    //     break;

    //     case 6 : 
    //     diaSemana = "Sabado"
    //     //console.log (diaSemana)
    //     break;
        
    //     default :
    //     //console.log ("Dia no valido")
    // }

    // console.log ("El dia de la semana de esa fecha es: " + diaSemana )
    

 




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
  
let numero1 = parseFloat(prompt("Ingrese el primer número:"))
let numero2 = parseFloat(prompt("Ingrese el segundo número:"))


let suma = numero1 + numero2

if (suma > 100) {
  console.log("La suma de los números es mayor a 100")
} else if (suma < 100) {
  console.log("La suma de los números es menor a 100")
} else {
  console.log("La suma de los números es igual a 100")
}
 

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.