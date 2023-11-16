//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
const simboloNum = () => {
    let num = 9;
    if(num > 0)
        console.log(`${num} es mayor a cero.`);
    else if (num < 0)   
        console.log(`${num} es menor a cero.`);
    else
        console.log(`${num} es cero.`);
}


//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
const esPar = () => {
    let num = 2;
    if( (num % 2) == 0)
        console.log(`${num} es par.`);
    else
        console.log(`${num} es impar.`);
}

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const esPar2 = () => {
    let num = prompt("Ingresar un numero para verificar su paridad");
    if( (num % 2) == 0)
        console.log(`${num} es par.`);
    else
        console.log(`${num} es impar.`);
}

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
const simboloNum2 = () => {
    let num = prompt("Ingresar un numero a comparar con el cero");
    if(num > 0)
        console.log(`${num} es mayor a cero.`);
    else if (num < 0)   
        console.log(`${num} es menor a cero.`);
    else
        console.log(`${num} es cero.`);
}

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const mayorMenor = () => {
    let num1 = prompt("Ingresar primer numero");
    let num2 = prompt("Ingresar segundo numero");
    if(num1 > num2)
        console.log(`${num1} es mayor que ${num2}.`);
    else if (num1 < num2)   
        console.log(`${num1} es menor que ${num2}.`);
    else
        console.log(`Ambos numeros son iguales.`);
}

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const contrasenia = () => {
    let pass = prompt("Ingresar contraseña:\n\tcaracteres min: 4\n\tcaracteres max: 16\n\tal menos 1 caracter especial (~ @ # _ ^ * % / +)");
    if(pass.length < 4 || pass.length > 16)
        console.log(`ingreso erroneo, longitud minima 4, longitud maxima 16`);
    else if(!pass.includes("~") && !pass.includes("@") && !pass.includes("_") && !pass.includes("#") && !pass.includes("^") && !pass.includes("*") && !pass.includes("%") && !pass.includes("/") && !pass.includes("+"))
        console.log(`ingreso erroneo, al menos 1 caracter especial (~ @ # _ ^ * % / +)`);
    else   
        console.log(`Su contraseña es: ${pass}`);
}

// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
const condicionMateria = () => {
    let nota = prompt("Ingresar la calificacion");
    if(nota >= 70)
        console.log(`Aprobaste :) .`);
    else
        console.log(`Desaprobaste :( .`);
}

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
const palindromo = () => {
    let palabra = prompt("Ingresar una palabra");
    let inversa = palabra.split("").reverse().join("");
        if(palabra === inversa){
            console.log(`${palabra} es un palindromo`);
        }else
            console.log(`${palabra} no es un palindromo`);
}

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
const esVocal = () => {
    let letra = prompt("Ingresar una letra");
    let vocales = ["a","e","i","o","u"];
        if(vocales.includes(letra)){
            console.log(`es vocal`);
        }else
            console.log(`no es vocal`);
}

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const diaSemana = () => {
    let numero = prompt("Ingresar un numero del 1 al 7");
        if(numero == 1)
            console.log("Lunes");
        else if (numero == 2)
            console.log("Martes");
        else if (numero == 3)
            console.log("Miercoles");
        else if (numero == 4)
            console.log("Jueves");
        else if (numero == 5)
            console.log("Viernes");
        else if (numero == 6)
            console.log("Sabado");
        else if (numero == 7)
            console.log("Domingo");
        else    
            console.log("Numero incorrecto");
}

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const esPrimo = () => {
    let numero = parseInt(prompt("Ingresar un numero"));
    let condicion = esPrimoBucle(numero);
    if (condicion){
        console.log(`${numero} es primo`);
    }else{
        console.log(`${numero} no es primo`);
    }
}

const esPrimoBucle = (numero) => {
    let cont = 0;
    for (let i = 1; i <= numero ; i++){
        if (numero % i == 0)
            cont++;
    }
    if (cont != 2){
        return false;
    }else{
        return true;
    }
}

// IMPLEMENTACION CON FUNCION RECURSIVA
// ************************************************************
// const esPrimo = () => {
//     let numero = parseInt(prompt("Ingresar un numero"));
//     let condicion = esPrimoRec(numero,numero,0);
//     if (condicion != 2){
//         console.log(`${numero} no es primo`);
//     }else{
//         console.log(`${numero} es primo`);
//     }
// }

// function esPrimoRec(numero,divisor,cont){
//     if (divisor == 0)
//         return cont;
//     if((numero % divisor) == 0){
//         cont++;
//         return (esPrimoRec(numero,divisor-1,cont));
//     }else
//         return (esPrimoRec(numero,divisor-1,cont));
// }
// ************************************************************


// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const mayorDeEdad = () => {
    let edad = prompt("Ingresar su edad");
        if (edad >= 18){
            console.log("Sos mayor de edad");
        }else
            console.log("Sos menor de edad");
}

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const suma100 = () => {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    let suma = num1 + num2;
    if(suma > 100)
        console.log(`${suma} es mayor que 100.`);
    else if (suma < 100)   
        console.log(`${suma} es menor que 100.`);
    else
        console.log(`${suma} es igual a 100.`);
}

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
const numMayor = () => {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    let num3 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 > num2)
        if (num1 > num3)
            console.log(`${num1} es el mayor`);
        else
            console.log(`${num3} es el mayor`);
    else if (num2 > num1)
        if (num2 > num3)
            console.log(`${num2} es el mayor`);
        else
            console.log(`${num3} es el mayor`);
    else    
        console.log(`${num3} es el mayor`);
}

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const mayMin = () => {
    let letra = prompt("Ingresar una letra");
    if (letra == letra.toUpperCase())
        console.log(`${letra} es mayuscula`)
    else    
        console.log(`${letra} es minuscula`)
}

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
const divisible = () => {
    let num = parseInt(prompt("Ingresar un numero"));
    let resultado = "";
    if (num % 3 == 0)
        resultado += "Fizz"
    if (num % 5 == 0)   
        resultado += "Buzz"
    if (num % 3 != 0 && num % 5 != 0)
        resultado += num
    console.log(`${resultado}`)
}

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
const numPerfecto = () => {
    let num = parseInt(prompt("Ingresar un numero"));
    let sumDivisores = 0;
    for (let i=1; i < num; i++){
        if ( num % i == 0)
            sumDivisores += i;
    }
    if (num === sumDivisores)
        console.log(`${sumDivisores} es un numero perfecto`);
    else
        console.log(`${sumDivisores} no es un numero perfecto`);
}

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
const descFactoresPrimos = () => {
    let num = 0;
    num = parseInt(prompt("Ingresar un numero"));
    let resultado = `${num} = `;
        for (let i = 2; i <= num ; i++){
            if (esPrimoBucle(i)){
                while(num % i == 0){
                        num = num / i;
                        resultado += `${i} `
                }
            }
            if (num == 1)
                break;
            console.log(num);
        }
    console.log(resultado);
}

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.

const fechaValida = () => {
    let dia = parseInt(prompt("Ingresar dia de nacimiento"));
    let mes = parseInt(prompt("Ingresar mes de nacimiento"));
    let anio = parseInt(prompt("Ingresar año de nacimiento"));
    if ( dia <= 0 || mes <= 0 || anio <= 0){
        console.log("Fecha de nacimiento invalida.");
        return;
    }
    if (mes == 2)
        if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0))
            if (dia <= 29)
                console.log(`Su fecha de nacimiento es ${dia}/${mes}/${anio}`);
            else
                console.log("Fecha de nacimiento invalida.");
        else if (dia <= 28)
                console.log(`Su fecha de nacimiento es ${dia}/${mes}/${anio}`);
            else
                console.log("Fecha de nacimiento invalida.");
    else if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
        if (dia <= 31)
            console.log(`Su fecha de nacimiento es ${dia}/${mes}/${anio}`);
        else
            console.log("Fecha de nacimiento invalida.");
    else if (dia <= 30)
            console.log(`Su fecha de nacimiento es ${dia}/${mes}/${anio}`);
        else
            console.log("Fecha de nacimiento invalida.");
}