

//Tarea 
//Quiz Javascript - Introducción


// Punto Nro 1: Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

const operacionSimple = () =>{

    let a = 20;
    let b= 30;
    let suma= a + b;
    console.log('Punto Nro 1: El resultado de la suma entre ' + a + ' y ' + b + ' es: ' + suma);
}

operacionSimple();

// Punto Nro 2: Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola. 

const comparacion1 = () =>{
     let a = 14;
     let b = 19;
     let c =  a==b;

     console.log('Punto Nro 2: El resultado de comprobar si los dos numeros son iguales es: '+c)
   
}
comparacion1();

// Punto Nro 3: Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.

const comparacion2 = () =>{

    let a = 32;
    let b = 31;
    let c = a!=b;

    console.log('Punto Nro 3: El resultado de comprobar si los dos numeros son distintos es: '+c)
}
comparacion2();

// Punto Nro 4: Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.

const incremento = () =>{
    a = 4;
    console.log( 'Punto Nro 4: Antes del incremento a = ' + a)
 
    for(let i= 0; i<5; i++){
    a++;
   } 

    console.log('Punto Nro 4: Despues del incremento en 5 a = ' + a)
}

incremento ();

// Punto Nro 5: Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.

const decremento = () =>{
    a = 15;
    console.log('Punto Nro 5: Antes del decremento a = ' + a)
 
    for(let i= 0; i<3; i++){
    a--;
   } 

    console.log('Punto Nro 5: Despues del decremento en 3 a = ' + a)
}
decremento ();

// Punto Nro 6: Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.

const concatenacion = () =>{
    console.log('Punto Nro 6 \n')
    let a = 'Trabajo practico de Mariano'
    let b = ' Ruiz' 
    let concatenar = a+b
    console.log('a = ' + a + '\nb = ' + b + ' \nLas dos cadenas concateandas: ' + concatenar)
}
concatenacion();

// Punto Nro 7: Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.

const operadoresBooleanos1 = () =>{
    let a = true;
    let b = false;
    let c = a&&b; 
    console.log( 'Punto Nro 7: El and entre dos variables booleanas distintas es : '+c);
}
operadoresBooleanos1();

// Punto Nro 8: Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.

const operadoresBooleanos2 = () =>{
    let a = true;
    let b = false;
    let c = a||b; 
    console.log( 'Punto Nro 8: El or entre dos variables booleanas distintas es : '+c);
}
operadoresBooleanos2();

// Punto Nro 9: Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.

const mayorQue = () =>{
let a = 30;
console.log('Punto Nro 9: ')
console.log(a>43)
}
mayorQue()

// Punto Nro 10: Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.

const menorIgual = () =>{
    let a =13;
    console.log('Punto Nro 10: ')
    console.log(a<=13);  
}
menorIgual();   

// Punto Nro 11: Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
 
const suma = () => {
    let a = parseInt(prompt('Punto Nro 11: Ingresa un valor : ')) ;
    let b = parseInt(prompt('Punto Nro 11: Ingresa otro valor  : ' )); 
    let suma = a + b;
    console.log('Punto Nro 11: El resultado de sumar lso un numeros ingresados es: ' + suma);
}
suma();
// Punto Nro 12:  Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
const resta = () => {
    let a = parseInt(prompt('Punto Nro 12: Ingresa un valor : ')) ;
    let b = parseInt(prompt('Punto Nro 12: Ingresa otro valor : ' )); 
    let suma = a - b;
    console.log('Punto Nro 12: El resultado de restar los dos numeros ingresados es: ' + suma);
}
resta();

// Punto Nro 13 : Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.

const suma2 = () =>{
    let a = 5;
    a = 5 + 10;
    console.log('Punto Nro 13 : 5 + 10 = ' + a)
}
suma2();

// Punto Nro 14: Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.

const concatenacion2 = () =>{
    console.log ('Punto Nro 14: ')
    let a = 'TP N°2 js de Mariano'
    let b = ' Agustin Ruiz' 
    let concatenar = a+b
    console.log('a = ' + a + '\nb = ' + b + ' \nLas dos cadenas concateandas: ' + concatenar)
}
concatenacion2();

// Punto Nro 14: Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.

const igualdadnBooleana = () =>{
    console.log ('Punto Nro 15: ')
    let a=false;
    let  b=false;
    let c = a==b;
    console.log(c);
}
igualdadnBooleana();
// Punto Nro 15: Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.

const diferenciaBooleana = () =>{
    console.log ('Punto Nro 16: ')
    let  a=false;
    let b=true;
    let c = a!=b;
    console.log(c);
}
diferenciaBooleana();

// Punto Nro 16: Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.

const mayorMenor = () =>{
    console.log ('Punto Nro 17: ')
   let a=30;
   let b=10;
   let c = a>b;
    console.log(c);
}
mayorMenor();
// Punto Nro 17: Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.

const ingresoMuestra = () => {
    console.log ('Punto Nro 18: ')
    let a = prompt('Ingrese un numero: ');
    console.log('El numero ingresado es: ' + a);
}
ingresoMuestra();   
 
// Punto Nro 18: Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola. 
const ingresoMuestraNombre = () => {
    console.log ('Punto Nro 19: ')
    let a = prompt('Ingrese su nombre: ');
    console.log('Su nombre es: ' + a);
}
ingresoMuestraNombre();   
// Punto Nro 19: Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variable s diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.

const ingresoMuestraEnDocumento = () => {
    let a = parseInt(prompt('Punto Nro 19: Ingresa un valor : ')) ;
    let b = parseInt(prompt('Punto Nro 19: Ingresa otro valor  : ' )); 
    let suma = a + b;
     document.getElementById("puntoNro19").innerHTML = suma; 
}
ingresoMuestraEnDocumento();

// Punto Nro 20: Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

const calcularEdad = () =>{
    let a = parseInt(prompt('Punto Nro 20: Ingrese el año en el que nacio  : ')) ;

    while(a< 1900 || a>2023){
       
        a = parseInt(prompt('Punto Nro 20: Ingrese un año de nacimiento que sea correcto  : ')) ;  
       
    }

    let edad = 2023 - a;

    if (edad >= 18){
        console.log('Usted es mayor de edad y su edad es de ' + edad + ' años')
    }
    else{
        console.log ('Es menor de edad, su edad es de ' + edad + ' años' )
    }
}
calcularEdad();
// Punto Nro 21: Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.

const cantidadDePalabras = () => {
    let a = prompt('Punto Nro 21: Ingrese una frase: ');
    let palabras = a.replace(/\s/g, '').length;
    console.log('ingreso ' + palabras + ' palabras en total');
}
cantidadDePalabras(); 