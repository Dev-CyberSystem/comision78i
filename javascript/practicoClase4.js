// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
const mesCorrespondiente = () => {
    let num = parseInt(prompt("Ingresar un numero del 1 al 12"));
    switch (num){
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Diciembre");
            break;
        default:
            console.log("El numero no corresponde a ningun mes");
            break;
    }
}
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
const diaCorrespondiente = () => {
    let num = parseInt(prompt("Ingresar un numero del 1 al 7"));
    switch (num){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("El numero no corresponde a ningun dia de la semana");
            break;
    }
}

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
const letraCorrespondiente = () => {
    let letra = prompt("Ingresar un caracter a determinar").toLocaleLowerCase();
    switch (letra){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Vocal");
            break;
        default:
            console.log("Consonante");
            break;
    }
}

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
const diaCorrespondienteArreglo = () => {
    let num = parseInt(prompt("Ingresar un numero del 1 al 5"));
    let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
    console.log(`${dias[num-1]}`);
}

// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const esMayuscula = () => {
    let letra = prompt("Ingresar una letra");
    if (letra == letra.toLowerCase())
        console.log("Es minuscula");
    else    
        console.log("Es mayuscula");
}

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
const calificacion = () => {
    let num = parseInt(prompt("Ingresar nota"));
    switch (num){
        case 1:
        case 2:
        case 3:
            console.log("suspendido");
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            console.log("aprobado");
            break;
        case 8:
        case 9:
            console.log("notable");
            break;
        case 10:
            console.log("sobresaliente");
            break;
        default:
            console.log("nota invalida");
            break;
    }
}

// Imprimir los números pares del 2 al 20 en la consola.
const pares = () => {
    for (let i = 2; i <= 20; i++){
        if (i%2==0)
            console.log(i);
    }
}
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.
const deletreo = () => {
    let frase = prompt("Ingresar una frase");
    for(let i = 0; i < frase.length; i++){
        console.log(frase[i].toUpperCase());
    }
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
const numerosHasta = () => {
    let num = parseInt(prompt("Ingresar un numero"));
    for (let i = 1; i <= num; i++){
        console.log(i);
    }
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
const masGrande = () => {
    let numeros = prompt("ingresar numeros separados por una coma");
    let numArray = numeros.split(",")
    let mayor = parseInt(numArray[0]);
    for (let i = 1; i < numArray.length; i++){
        if (parseInt(numArray[i]) > mayor)
            mayor = parseInt(numArray[i]);
    }
    console.log(mayor);
}

// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
const palindromo = () => {
    let palabra = prompt("ingresar una palabra").toLowerCase();
    let j = palabra.length-1;
    let condicion;
    for (let i = 0; i < Math.round(palabra.length) ; i++){
        if (palabra[i] == palabra[j])
            condicion = true;
        else
            condicion = false;
        j--;
    }
    if (condicion)
            console.log("Es palindromo");
        else
            console.log("No es palindromo");
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
const sumaPares = () => {
    let numeros = prompt("ingresar numeros separados por una coma");
    let numArray = numeros.split(",")
    let suma = 0;
    for (let i = 0; i < numArray.length; i++){
        if (parseInt(numArray[i]) % 2 == 0)
            suma += parseInt(numArray[i]);
    }
    console.log(suma);
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
const numNegativos = () => {
    let numeros = prompt("ingresar numeros separados por una coma");
    let numArray = numeros.split(",")
    let cont = 0;
    for (let i = 0; i < numArray.length; i++){
        if (parseInt(numArray[i]) < 0)
            cont++;
    }
    console.log(cont);
}


// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
const imparHasta = () => {
    let num = parseInt(prompt("Ingresar un numero"));
    for (let i = 1; i <= num; i++){
        if(i % 2 != 0)
            console.log(i);
    }
}


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
const masChico = () => {
    let numeros = prompt("ingresar numeros separados por una coma");
    let numArray = numeros.split(",")
    let menor = parseInt(numArray[0]);
    for (let i = 1; i < numArray.length; i++){
        if (parseInt(numArray[i]) < menor)
            menor = parseInt(numArray[i]);
    }
    console.log(menor);
}

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
const adivinarNum = () => {
    let numRandom = Math.floor(Math.random()*100)+1;
    let numero;
    do{
        numero = prompt("Adivina el numero entre 1 y 100");
        if (numero == numRandom)
            console.log("ADIVINASTE EL NUMERO");
        else
            console.log("SEGUI PARTICIPANDO");
    }while(numero != numRandom);
}

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
const cantPares = () => {
    let numeros = prompt("ingresar numeros separados por una coma");
    let numArray = numeros.split(",")
    let contPares = 0;
    for (let i = 0; i < numArray.length; i++){
        if (parseInt(numArray[i]) % 2 == 0)
            contPares++;
    }
    console.log(contPares);
}

// Dado un array de números, escribir una función que retorne el número más grande del array.
const masGrandeArray = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayor)
            mayor = numeros[i];
    }
    console.log(mayor);
}

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
const paresArray = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let pares = [];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0)
            pares.push(numeros[i]);
    }
    console.log(pares);
}

// Dado un array de números, escribir una función que retorne la suma de todos los números del array.
const sumaArray = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    console.log(suma);
}

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
const stringsMayuscula = () => {
    let palabras = ["hola","mundo","Boca","lol","RollingCode",];
    let palabrasMayus = [];
    for (let i = 0; i < palabras.length; i++){
        palabrasMayus [i] = palabras [i].toUpperCase();
    }
    console.log(palabrasMayus);
}

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
const arrayMayores = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let mayores = [];
    let X = prompt("Ingrese un numero")
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > X)
            mayores.push(numeros[i]);
    }
    console.log(mayores);
}

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
const sumaArrayNumGrandes = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let numGrandes = [];
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > 10)
            numGrandes.push(numeros[i]);
        suma += numeros[i];
    }
    console.log(`Suma de los numeros del array: ${suma}\nArray de numeros grandes: ${numGrandes}`);
}

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
const stringsLargos = () => {
    let palabras = ["hola","mundo","Boca","lol","RollingCode","programacion"];
    let palabrasLargas = [];
    for (let i = 0; i < palabras.length; i++){
        if (palabras[i].length > 5)
            palabrasLargas.push(palabras[i]);
    }
    console.log(palabrasLargas);
}

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
const stringsLargosA = () => {
    let palabras = ["hola","argumento","mundo","Boca","lol","arrancar","RollingCode","programacion"];
    let palabrasLargasA = [];
    for (let i = 0; i < palabras.length; i++){
        if (palabras[i].length > 5 && palabras[i][0].toLowerCase() == "a")
            palabrasLargasA.push(palabras[i]);
    }
    console.log(palabrasLargasA);
}

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
const arrayMayoresCortado = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let mayores = [];
    let X = prompt("Ingrese un numero")
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > X)
            mayores.push(numeros[i]);
    }
    mayores = mayores.slice(0,3);
    console.log(mayores);
}


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
const numerosMasUno = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let numerosMasUno = [];
    for (let i = 0; i < numeros.length; i++){
        numerosMasUno.push(numeros[i]+1);
    }
    console.log(numerosMasUno);
}

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
const numerosMenosUltimo = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let numerosMenosUltimo = [];
    for (let i = 0; i < numeros.length-1; i++){
        numerosMenosUltimo.push(numeros[i]);
    }
    console.log(numerosMenosUltimo);
}

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
const numerosMenosPriYUlt = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let numerosMenosPriYUlt = [];
    for (let i = 1; i < numeros.length-1; i++){
        numerosMenosPriYUlt.push(numeros[i]);
    }
    console.log(numerosMenosPriYUlt);
}

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
const numerosMenosPosX = () => {
    let numeros = [2,7,8,10,0,12,3,4,9,4,7,15,2,9];
    let X = prompt("Ingresar un numero");
    let numerosMenosPosX = numeros;
    numerosMenosPosX.splice(X,1);
    console.log(numerosMenosPosX);
}