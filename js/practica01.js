//1. Sumar dos números 
/*
function sumarNumero(){
    let numero1 = prompt("Ingrese numero 1");
    console.log(numero1)
    let numero2 = prompt("Ingrese numero 2");
    console.log(numero2)

    let resultado = (numero1 + numero2)
    console.log(resultado)
} */

//1. Sumar dos números
function sumarNumero(){
    let numero1 = 10;
    let numero2 = 20;
    let suma = (numero1 + numero2)
    console.log("SUMA es: ", suma)
}
sumarNumero()

//Variabls
console.log("Valor de la variable num2 afuer "+ - numero2)

//Comparación de datos:
10 = 10; //Asignación true
10 == "10"; //Igualdad  false
10 === 10;  //Igualdad estricta
10 == "10" //true

10 == "diez" //true
10 != 10 //true
10 != 10 //false

10 >= 10 //true
10 < 10 //false
10 <=10 //true

//Operadores Logicos
if(10 && 20){ //si es 10 y 20 entonces:
    console.log("Hola");
}

if(10 || 20){ //Se tiene que tener ambas para ejecutar el programa
    console.log("hola");
}