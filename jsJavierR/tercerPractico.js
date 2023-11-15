// Tarea

//Crear una función que tome dos números como parámetros y devuelva el número mayor.



// const esMayor = (num1, num2) => {
//     if (num1 > num2) {
//       console.log(num1, "es Mayor");
//     } else if (num1 === num2){
//       console.log("Son iguales")
//     } else {
//       console.log(num2, "Es mayor");
//     }
//   };
  
//   esMayor(5, 5); //pasando los numeros por parametro
  
  
//   //Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
//   const aCero = (num1) => {
//     if (num1 > 0){
//         console.log("Positivo")
//     } else if (num1 == 0){
//         console.log("cero")
//     }
//     else {
//         console.log("negativo")
//     }
//   }
  
//   aCero(-3)
  
//   //Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
//   const divisible = (num1) =>{
//     if((num1 % 2) == 0){
//         console.log("Es par")
//     }else{
//         console.log("Es impar")
//     }
//   }
//   divisible(2)

  //Crear un programa que pida al usuario un número y luego muestre si es par o impar.
//   let num2 = prompt("Ingresar numero")
//   const divisibleUsu = (num2) =>{
//     if((num2 % 2) == 0){
//     console.log("Es par")
//     }else{
//         console.log("Es impar")
//     }
//   }
//   divisibleUsu(num2)

  // Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
//   let num3 = prompt("Ingresar numero")
//   const aCeroUsu = (num3) => {
//     if (num3 > 0){
//         console.log("Positivo")
//     } else if (num3 == 0){
//         console.log("cero")
//     }
//     else {
//         console.log("negativo")
//     }
//   }
  
//   aCeroUsu(num3)

  // Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
//   let num4 = prompt("Ingresar numero")
//   let num5 = prompt("Ingresar numero")
//   const esMayorUsu = (num4, num5) => {
//     if (num4 > num5) {
//       console.log(num4, "es Mayor");
//     } else if (num4 === num5){
//       console.log("Son iguales")
//     } else {
//       console.log(num5, "Es mayor");
//     }
//   };
  
//   esMayorUsu(num4, num5);
  
  // Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
//   let contra = prompt("Ingresa contraseña (Debe tener un maximo de 7 caracteres y contener un @")
//   const contraUsu = (contra) => {
//     if(contra.length < 7){
//         console.log("Faltan Caracteres")
//     }else if(contra.includes("@")) {
//         console.log("Contraseña correcta")
//     }else{
//         console.log("Falta caracter @")
//     }
//   }
//   contraUsu(contra)
  
  // Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
//   let nota = prompt("Ingresar nota (0 - 100)")
//   const califi = (nota) => {
//     if (nota >= 70 && nota <= 100){
//         console.log("Aprobaste")
//     }else{
//         console.log("Desaprobaste")
//     }
//   }
//   califi(nota)

  //Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
//   let texto = prompt("Ingresar texto")
//   function palindro(texto){
//     let separarCadena = texto.split(""); // var separarCadena = "hola".split("");
//     // ["h", "o", "l", "a"]
 
//     let invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse();
//     // ["a", "l", "o", "h"]
 
//     let unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
//     // "aloh"
    
//     if( texto == unirArreglo){
//         console.log("Es un palíndromo")
//     }else{
//         console.log("No es un palíndromo")
//     }
//   }
//   palindro(texto)


  // Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
//   let letra = prompt("Ingresar una letra")
//   const vocalCons = (letra) =>{
//     if(letra === "a"){
//         console.log("Es vocal")
//     }else if(letra === "e"){
//         console.log("Es vocal")
//     }else if(letra === "i"){
//         console.log("Es vocal")
//     }else if(letra === "o"){
//         console.log("Es vocal")
//     }else if(letra === "u"){
//         console.log("Es vocal")
//     }else{
//         console.log("Es consonante")
//     }
//   }
//   vocalCons(letra)

  // Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
//   let dia = prompt("Ingresar un numero 1-7")
//   const diaSemana = (dia) => {
//     if(dia == 1){
//         console.log("Lunes")
//     }else if(dia == 2){
//         console.log("Martes")
//     }else if(dia == 3){
//         console.log("Miercoles")
//     }
//     else if(dia == 4){
//         console.log("Jueves")
//     }
//     else if(dia == 5){
//         console.log("Viernes")
//     }
//     else if(dia == 6){
//         console.log("Sabado")
//     }
//     else if(dia == 7){
//         console.log("Domingo")
//     }
//   }
//   diaSemana(dia)
  
  // Crear un programa que pida al usuario un número y luego muestre si es primo o no.

  // Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
//   let edad = prompt("Ingrese su edad")
//   const mayorEdad = (edad) => {
//     if (edad >= 18){
//         console.log("Es mayor")
//     }
//     else{
//         console.log("Es menor")
//     }
//   }
//   mayorEdad(edad)
  // Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
//   let numero1 = prompt("Ingresar numero 1")
//   let numero2 = prompt("Ingresar numero 2")
//   numero1 = parseInt(numero1)
//   numero2 = parseInt(numero2)
//   const sumar = (numero1, numero2) => {
//     let suma = numero1 + numero2
//     if(suma == 100){
//         console.log("Igual a 100")
//     }else if(suma < 100){
//         console.log("Menor a 100")
//     }else{
//         console.log("Mayor igual")
//     }
//   }
//   sumar(numero1, numero2)
  // Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
//   let nume1 = prompt("Ingrese nume 1")
//   let nume2 = prompt("Ingrese nume 2")
//   let nume3 = prompt("Ingrese nume 3")
//   const mayorCual = (nume1, nume2, nume3) => {
//     if(nume1 > nume2 && nume1 > nume3){
//         console.log(nume1, "Es mayor")
//     }else if(nume2 > nume1 && nume2 > nume3){
//         console.log(nume2, "Es mayor")
//     }else if(nume3 > nume1 && nume3 > nume2){
//         console.log(nume3, "Es mayor")
//     }else if(nume3 == nume1 && nume3 == nume2){
//         console.log("Son iguales")
//     }
//   }
//   mayorCual(nume1, nume2, nume3)
  // Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
//   let letra1 = prompt("Ingresar una letra")
//   const mayuMinu = (letra1) =>{
//     if(letra1 === letra1.toLowerCase()){
//         console.log("Es minuscula")
//     }else if(letra1 === letra1.toUpperCase()){
//         console.log("Es mayucula")
//     }
//   }
//   mayuMinu(letra1)
  //Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
//   const tres = (num) =>{
//     if(num % 3 == 0){
//         if(num % 5 == 0){
//             console.log("FizzBuzz")
//             return
//         }
//         console.log("Fizz")
//     }else if(num % 5 == 0){
//         if(num % 3 == 0){
//             console.log("FizzBuzz")
//             return
//         }
//         console.log("Buzz")
//     }
//   }
//   tres(6)
  
  // Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
  const perfecto = () => {
    let n = parseInt(prompt("ing num"))
    let x = 0
    for(let i = 1; i<=10; i++){
      let x = Math.pow(2,i-1)*(Math.pow(2,i)-1)
      if (n == x ){
        console.log("SI")
        break
      }
    }
  }
  perfecto()
  
  
  // Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
  
  // Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
  