//Crear una función que tome dos números como parámetros y devuelva el número mayor.

// const esMayor = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(num1, "es Mayor");
//   } else if (num1 === num2) {
//     console.log("Son iguales");
//   } else {
//     console.log(num2, "Es mayor");
//   }
// };
// esMayor();

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
// const positivoNegativo=(num1)=>{
// if (num1>0) {
//   console.log("positivo")
// } else if (num1<0) {
//   console.log("negativo")
// }else{console.log("cero")}
// }
// positivoNegativo()

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
//  const parImpar =(num)=>{
//  let resultado = (num%2)
//  let resul= resultado===0?"par":"impar"
//  console.log(resul)
//  }
//  parImpar(8)

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
//  const parImpar2=()=>{
//   let num=prompt("Ingresa un mumero")
//   let resultado = (num%2)
//   let resul= resultado===0?"Tu numero es par":"Tu numro es impar"
//   alert(resul)
//  }
//  parImpar2()

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
/*let num1=prompt("ingresa un numero")
 
 const negPosCer=(num)=>{
   let resul= num>0?"su numero es positivo":
   num<0?"su numero es negativo":"su numero es cero";
   alert(resul)
 }

negPosCer(num1)*/

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
/*let num2 = prompt("Ingresa un numero")
let num3 = prompt("Ingresa otro numero")
const maxMin = (num2, num3) => {
let resul=Math.max(num2,num3)
 return document.write(`el numero mas grande es ${resul}`)
}
maxMin(num2,num3)*/

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
// let contraseña=prompt("ingrese contraseña").length

const comprbacion = (palabra) => {
  if (palabra < 8) {
    alert("contraseña incorrecta");
  } else {
    alert("contraseña correcta!");
  }
};
//  comprbacion()

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
// let nota= prompt("Ingresa tu nota entre 10 y 100")
//let nota2=parseInt(nota)

const clasificacion = (nota2) => {
  if (nota2 < 70) {
    document.write("Desaprobaste");
  } else if (nota2 >= 70 && nota2 <= 90) {
    document.write("Aprobaste");
  } else {
    document.write("Exelsior!");
  }
};
// clasificacion(nota2)

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
//let palabra=prompt("ingresa una palabra para ver si es un palindromo")
const palindrome = (palabra) => {
  let re = /[\W_]/g;
  let lowRegStr = palabra.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    alert("es un palindromo");
  } else {
    alert("no es un palindromo");
  }
};
//palindrome(palabra);

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
// let letra = prompt("ingresa una letra")
// letra.toLowerCase()

//   switch (letra) {
//     case "a":
//       alert("es una vocal")
//       break;
//       case "e":
//       alert("es una vocal")
//       break;
//       case "i":
//       alert("es una vocal")
//       break;
//       case "o":
//       alert("es una vocal")
//       break;
//       case "u":
//       alert("es una vocal")
//       break;
//     default:
//       alert("es una consonante")
//       break;
//   }

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
// let dia = parseInt(prompt("Ingrese un un numero de 1 al 7"))
// switch (dia) {
//   case 1:
//     alert("Lunes")
//     break;
//     case 2:
//     alert("Martes")
//     break;
//     case 3:
//     alert("Miercoles")
//     break;
//     case 4:
//     alert("Jueves")
//     break;
//     case 5:
//     alert("Viernes")
//     break;
//     case 6:
//     alert("Sabado")
//     break;
//     case 7:
//     alert("Domingo")
//     break;
//   default:
//     alert("No es dia de la semana ")
//     break;
// }

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
//let edad=parseInt(prompt("Ingresa tu edad"))

const mayor =(edad)=>{
  if (edad>=18 ) {
    alert("Eres mayor de edad puedes pasar")
  } else {
    alert("lo siento deberas espera "+ (18-edad)+(" años"))
  }
}
//mayor(edad)

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
//let num1=parseInt(prompt("Ingresa un numero"))
//let num2=parseInt(prompt("Ingresa un numero"))

const sumar=(num1,num2)=>{
if ((num1+num2)>100) {
  alert("la suma de tus numeros es mayor a 100")
} else if((num1+num2)===100) {
  alert("la suma de tus numeros es igual a 100")
}else if((num1+num2)<100){
alert("la suma de tus numeros es menor a 100")
}
}
//sumar(num1,num2)

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
// let num1=parseInt(prompt("Ingresa un numero"))
// let num2=parseInt(prompt("Ingresa un numero"))
// let num3=parseInt(prompt("Ingresa un numero"))

// const numMayor=(num1,num2,mun3)=>{
// if (num1>num2 && num1>num3) {
//   alert("el primer numero es el mayor")
// } else if(num2>num1 && num2>num3) {
//   alert("el segundo numero es mayor")
// }else if(num3>num1 && num3>num2){
// alert("el tercer numero es mayor")
// }else{
//   alert("los numeros ingresados son iguales")
// }
// }

// numMayor(num1,num2,num3)

//Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
// const mayMin=()=>{
//   let letra =prompt("Ingresa una letra")
//   if(letra.length>1){
//   alert("solo puedes ingresar una letra") 
//   } else if(letra>="a" && letra<="z"){
//     alert("la letra es miniscula")
//   }else if(letra>="A" && letra<="Z"){
//     alert("la letra es mayuscula")
//   }else{
//     alert("los ingresado no es una letra")
//   }
// }
// mayMin()

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
// let num=parseInt(prompt("Ingrese un numero"))
// const fizzBuzz=(num)=>{
// if (num%3===0 && num%5===0) {
//   alert("FizzBuzz")
// } else if(num%3===0) {
//   alert("Fizz")
// }else if (num%5===0){
//   alert("Buzz")
// }else{
//   alert(num)
// }
// }
// fizzBuzz(num)

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
let num=28
for (let i = 0; i < num; i++) {
 
  
}

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
// let dia = parseInt(prompt("Ingrese un día "))
// let mes = parseInt(prompt("Ingrese un mes con numero "))
// let anio = parseInt(prompt("Ingrese un año "))

const dma=(dia,mes,anio)=>{
  if((dia>1&&dia<31)&&(mes>1&&mes<12)&&(anio<1&&anio>2023)){
   alert("la fecah ingresada es correcta")
  }else{
    alert("las fechas ingresadas son incorrectas")
  }
}
 //palindrome(palabra);