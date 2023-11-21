//Tarea 03 - ejercicios 13/11/2023

/*1-Crear una función que tome un número como parámetro y devuelva "Positivo" 
si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.*/
function positivo (numero){
    if(numero>0){
        console.log("Positivo");
    }else if(numero<0){
        console.log("Es negativo");
    }else {
        console.log("El numero es neutro");
    }
}
positivo(23);

/*2-Crear una función que tome un número como parámetro y devuelva "Par" 
si es divisible por 2 o "Impar" si no lo es. */ 
function numeroPar(num){
    if(numero%2==0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}
numeroPar(26);

//3-Crear un programa que pida al usuario un número y luego muestre si es par o impar.
function calculoProgram(){
    let pideNumero = prompt("Ingrese un numero");
    let numeroCalculo = parseFloat(pideNumero);

    if(numeroCalculo%2==0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}