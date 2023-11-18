//Tarea 
//Quiz Javascript - Introducción
let contEjercicios = 0;
function ejercicios(){
    contEjercicios++;
    console.log(`Ejercicio numero ${contEjercicios} :`)
}

//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
function ejercicio1(){
    ejercicios();
    let operacion = 5 * 7;
    console.log(operacion);
}
ejercicio1();

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
function ejercicio2(){
    ejercicios();
    let num1 = 10;
    let num2 = 20;
    console.log(num1 == num2);
}
ejercicio2();

// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
function ejercicio3(){
    ejercicios();
    let num1 = 5;
    let num2 = 8;
    console.log(num1 != num2);
}
ejercicio3();

// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
function ejercicio4(){
    ejercicios();
    let num = 5;
    num++;
    num++;
    num++;
    num++;
    num++;
    console.log(num);
}
ejercicio4();

// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
function ejercicio5(){
    ejercicios();
    let num = 5;
    num--;
    num--;
    num--;
    console.log(num);
}
ejercicio5();

// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
function ejercicio6(){
    ejercicios();
    let cadena1 = "Hola mundo";
    console.log(cadena1 + ", adios mundo.");
}
ejercicio6();

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
function ejercicio7(){
    ejercicios();
    let bool1 = true;
    let bool2 = false;
    console.log(bool1 && bool2);
}
ejercicio7();

// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
function ejercicio8(){
    ejercicios();
    let bool1 = true;
    let bool2 = false;
    console.log(bool1 || bool2);
}
ejercicio8();

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
function ejercicio9(){
    ejercicios();
    let num = 5;
    console.log(num > 3);
}
ejercicio9();

// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
function ejercicio10(){
    ejercicios();
    let num = 5;
    console.log(num <= 4);
}
ejercicio10();

// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
function ejercicio11(valor1,valor2){
    ejercicios();
    console.log(valor1+valor2);
}
ejercicio11(5,10);

// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
function ejercicio12(valor1,valor2){
    ejercicios();
    console.log(valor1-valor2);
}
ejercicio12(5,10);

// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
function ejercicio13(){
    ejercicios();
    let num = 5;
    num = num + 10;
    console.log(num);   
}
ejercicio13();

// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
function ejercicio14(){
    ejercicios();
    let cadena1 = "Hola mundo";
    let cadena2 = ", esta es mi primera vez usando JavaScript :)";
    console.log(cadena1 + cadena2);
}
ejercicio14();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
function ejercicio15(){
    ejercicios();
    let bool1 = true;
    let bool2 = false;
    console.log(bool1 == bool2);
}
ejercicio15();

// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
function ejercicio16(){
    ejercicios();
    let bool1 = true;
    let bool2 = false;
    console.log(bool1 != bool2);
}
ejercicio16();

// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
function ejercicio17(){
    ejercicios();
    let num1 = 5;
    let num2 = 8;
    console.log(num1 > num2);
}
ejercicio17();

// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
function ejercicio18(){
    ejercicios();
    let num = prompt("Ingrese un numero: ");
    console.log(num);
}
ejercicio18();

// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
function ejercicio19(){
    ejercicios();
    let nombre = prompt("Ingrese su nombre: ");
    console.log(`Tu nombre es : ${nombre}`);
}
ejercicio19();

// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
function ejercicio20(){
    let num1 = parseInt(prompt("Ingresar primer numero: "));
    let num2 = parseInt(prompt("Ingresar segundo numero: "));
    let suma = num1 + num2;
    document.write(`<p>Ejercicio numero 20:<br>${num1} + ${num2} = ${suma}</p>`);
}
ejercicio20();

//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.
function ejercicio21(){
    let anioNac = parseInt(prompt("Ingrese su año de nacimiento: "));
    const anioActual = new Date().getFullYear();
    let edad = anioActual - anioNac;
    document.write(`<p>Ejercicio numero 21:<br>Edad: ${edad}<br>Es mayor de edad? ${edad > 18}</p>`);
}
ejercicio21();

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.
function ejercicio22(){
    let frase = prompt("Ingrese una frase: ");
    let cantPalabras = frase.split(" ").length;
    document.write(`<p>Ejercicio numero 22:<br>Frase: ${frase}<br>La frase tiene ${cantPalabras} palabras</p>`);
}
ejercicio22();