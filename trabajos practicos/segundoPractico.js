//Tarea 
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let numero1 = 25;
let numero2 = 75;
let resultado = numero1 + numero2;
console.log("El resultado de 25 + 75 es: " + resultado);

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
let num1 = 20;
let num2 = 7;
20 == 7
console.log(num1 == num2)

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
let num3 = 30;
let num4 = 10;
30 != 10
console.log(num3 != num4)

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
let num5 = 55;
num5 ++;
num5 ++;
num5 ++;
num5 ++;
num5 ++;
console.log("Si aumento el valor de 55 en 5 obtengo: " + num5);

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
let num6 = 13;
num6 --;
num6 --;
num6 --;
console.log("El resultado de 13 - 3 es: " + num6);

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
let texto1 = "Me llamo Lorena ";
let texto2 = texto1 + "Oterino";
console.log(texto2);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
let Boca = false;
let River= false;
let campeones = Boca && River;
console.log ("Boca y River juegan en la B: " + campeones);

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

let Massa = true;
let Milei= true;
let politicos = Massa || Milei;
console.log ("Massa y Milei van al ballotage: " + politicos);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let edadLore = 41;
let edadBauti = 11;
let mayor= edadLore > edadBauti;
console.log ("Lore es mayor que Bauti: " + mayor);

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

let año1 = 2023;
let año2 = 2020;
let resultAños= 2023 <= 2020;
console.log ("2023 es <= 2020: " + resultAños);


// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.

function sumar(Messi, Campeón) {
    let resultado = Messi + Campeón;
    console.log("El resultado es: " + resultado);
  }
  sumar("Messi ", "Campeón");
  
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.

function resta(Argentina, Francia) {
    let resultado = Argentina - Francia;
    console.log('Diferencia de mundiales ganados entre Argentina y Francia: '+ resultado);
  }
  resta(3, 2);

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

function sumarvalores() {
    let valor = 5;
    valor += 10;
    console.log("El resultado es: " + valor);
  }
  sumarvalores();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

function concatenarVariables (){
let tex1 = "¡Que gane ";
let tex2 = "el mejor!";
let concatenar = tex1.concat(tex2)
console.log (concatenar)
}
concatenarVariables ()

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

function comparar() {
    let Javascript = true;
    let Java = false;
    let resultado = Javascript == Java;
    console.log("Javascript y Java son lo mismo:  " + resultado);
  }
  comparar();  
  

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

function comparardif() {
    let Javascript = true;
    let Java = false;
    let resultado = Javascript != Java;
    console.log("Javascript y Java son diferentes:  " + resultado);
  }
  comparardif();  

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

function compararNum() {
    let numA = 15;
    let numB = 20;
    let resultado = numA > numB;
    console.log("15 es mayor que 20:  " + resultado);
  }
  compararNum();  

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

    let numero45 = prompt("Ingrese el numero 45");
    console.log("El numero ingresado por el usuario es el:  " + numero45);

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.

let nombre = prompt("Ingrese su nombre");
console.log("El nombre ingresado por el usuario es:  " + nombre);


// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

let Num1 = parseInt(prompt("Ingrese su edad"));
let Num2 = parseInt(prompt("Ingrese el monto de su sueldo"));
let result = Num1 + Num2;
console.log("El resultado de la suma de los numeros ingresados por el usuario es:  " + result);


//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

function calcularEdad() {
    let añoNac = parseInt(prompt("Ingresa tu año de nacimiento:"));
    let añoAct = new Date().getFullYear();
    let edad = añoAct - añoNac;
    let esMayorDeEdad = edad >= 18;
    if (esMayorDeEdad) {
    console.log("Eres mayor de edad.");
    } else {
    console.log("No eres mayor de edad.");
    }
    console.log("Tienes " + edad + " años.");
}
calcularEdad();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

function contarPalabras(frase) {
    frase = frase.trim();
    let palabras = frase.split(/\s+/);
    return palabras.length;
  }
  let fraseUsuario = prompt("Ingresa una frase:");
  let numeroDePalabras = contarPalabras(fraseUsuario);
  console.log("Número de palabras en la frase: " + numeroDePalabras);



