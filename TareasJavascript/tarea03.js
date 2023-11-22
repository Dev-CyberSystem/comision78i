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
calculoProgram();

// 4- Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
function calculaSigno(){
    let numeroIngresado = prompt("Ingresa un numero");
    let numero = parseInt(numeroIngresado);

    if(numero>0){
        console.log("Positivo");
    }else if(numero<0){
        console.log("Negativo");
    }else{
        console.log("Es cero");
    }
}
calculaSigno();

//5-Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
function pideMayor(){
    let num1 = prompt("Ingresa un numero");
    let numero1 = parseInt(num1);

    let num2 = prompt("Ingresa un numero");
    let numero2 = parseInt(num2);

    if(numero1>numero2){
        console.log("Num1 es mayor que Num2");
    }else if(numero2>numero1){
        console.log("Num2 es mayor que Num1");
    }else{
        console.log("Los numeros son iguales");
    }
}
pideMayor();

/*6- Crear un programa que pida al usuario una contraseña 
y valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.*/
function contrasenia(){
    let password = prompt('Ingresa una contraseña: Debe contener número, mayúscula y minúscula, debe ser de al menos 8 caracteres').trim();
    if(password.length<8){
        console.log("Contraseña muy corta")
    }else if(!/[a-z]/.test(password)){
        console.log('La contraseña debe tener al menos una minúscula');
    }else if(!/[A-Z]/.test(password)){
        console.log('La contraseña debe tener al menos una mayúscula');
    }else if(!/\d/.test(password)){
        console.log('La contraseña debe tener al menos un dígito');
    }else{
        console.log('contraseña creada con exito')
    }      
}
contrasenia();

/**7-Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70)*/
function calificacion(){
    let notaCC = prompt("Ingrese su nota");
    let nota = parseInt(notaCC);

    if(nota >= 70){
        console.log("Curso aprobado");
    }else{
        console.log("Curso no aprobado");
    }
}
calificacion();





