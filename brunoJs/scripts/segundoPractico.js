//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
let num1 = 5;
let num2 = 3;
let suma = num1 + num2;
console.log(suma);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let num3 = 5;
let num4 = 6;
let compare = num3 == num4;
console.log(compare);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let num5 = 6;
let num6 = 4;
let compare1 = num5 != num6;
console.log(compare1);

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let num7 = 1;
++num7
++num7
++num7
++num7
++num7
console.log(num7);

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let num8 = 10;
--num8
--num8
--num8
console.log(num8);

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let text="Hola Mundo"
console.log(text + ", cruel!")

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let bool=true
let bool1= false
let compare2= bool && bool1
console.log(compare2)

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
let bool3=true
let bool4= false
let compare3= bool3 || bool4
console.log(compare3)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let num9= 10
console.log(num9 > 11)

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
let num10=11
console.log(num10 <= 11)

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
const sumar = (a,b) => a+b
console.log(sumar(10,5))

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
const substract = (a,b) => a-b
console.log(substract(12,5))

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
const add = () => {
    let num1=5
    return num1+10
} 
console.log(add())

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
const concat=()=> {
    let word1="hola,"
    let word2=" soy Bruno"
    return word1+word2
}
console.log(concat())

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
const comparar=()=>{
    let bool= false
    let bool1= false
    return bool === bool1
}
console.log(comparar())

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

const comparar1=()=>{
    let bool= true
    let bool1= false
    return bool === bool1
}
console.log(comparar1())

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
const comparar2=()=>{
    let num11=11
    let num12=12
    return num12 > num11
}
console.log(comparar2())

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
// let num13= prompt("ingrese un numero")
// console.log(num13)

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
// let nombre= prompt("ingrse su nombre")
// console.log(nombre)

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
// let num14 = parseInt(prompt("vamos a sumar, ingresa un numero"))
// let num15 = parseInt(prompt("ingresa otro numero"))
// let resul= num14+num15
// document.write(resul)

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
const edad=()=>{
    let anio=parseInt(prompt("ingrese su fecha de nacimiento"))
    let anio2=2023-anio
    alert(anio2)
}
edad()

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
const contador=()=>{
    let palabras=prompt("ingresa un frase")
    let long = palabras.split(" ").length
    return console.log(long)
}
contador()



