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


const comprbacion=(palabra)=>{
if (palabra<8) {
  alert("contraseña incorrecta")
} else {
  alert("contraseña correcta!")
}
}
//  comprbacion()

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
// let nota= prompt("Ingresa tu nota entre 10 y 100")
 //let nota2=parseInt(nota)

 const clasificacion=(nota2)=>{
   if (nota2<70) {
   document.write("Desaprobaste")
 } else if(nota2>=70 && nota2<=90) {
   document.write("Aprobaste")
 }else{
  document.write("Exelsior!")
 }
 }
// clasificacion(nota2)

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
 //let palabra=prompt("ingresa una palabra para ver si es un palindromo")
 const palindrome=(palabra)=> {
  let re = /[\W_]/g
   let lowRegStr = palabra.toLowerCase().replace(re, '')
   let reverseStr = lowRegStr.split('').reverse().join('');
   if (reverseStr === lowRegStr) {
     alert("es un palindromo")
   } else {
     alert("no es un palindromo")
  }
}
 //palindrome(palabra);