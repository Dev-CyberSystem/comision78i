
// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
const punto1 = () =>{
    let fecha = parseInt(prompt("Ingrese un numero del 1 al 12: "));
    switch (fecha){
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
             
            
    }
}
punto1();
// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
const punto2 =() =>{
    let numero= parseInt(prompt("Punto 2: ingresa un numero del 1 al 7: "));
    switch (numero) {
        case 1:
            console.log("Lunes")
            break;
        case 2:
            console.log("Martes")
            break;
        case 3:
            console.log("Miercoles")
            break;
        case 4:
            console.log("Jueves")
            break;
        case 5:
            console.log("Viernes")
            break;
        case 6:
            console.log("Sabado")
            break;
        case 7:
            console.log("Domingo")
            break;
            default:  console.log("Debe ingresar un numero del 1 al 7");

    }
}
punto2()
// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
const punto3 = () =>{
    let letra = prompt ("Punto 3: Ingrese una letra para verificar si es una vocal: ");
    
    if(letra == "a"|| letra =="e" || letra =="i" ||letra =="o" ||letra == "u"  ){
        console.log("Es una vocal :)");
    }
    else{
        console.log("Es consonante");
    }
}
punto3();
// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
const punto4 = () =>{
    let dias  = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
    let numero = prompt ("Escriba un un número del 1 al 5");
   if(numero>=1 || numero<=5){
    console.log("El numero corresponde al dia: " + dias[numero] );
   } else{
    console.log("El numero ingresado no es valido" );
   }
   
}
punto4();
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const punto5 = () =>{
    let letra = prompt("Ingrese una letra: ");
    let mayuscula = letra.toUpperCase();
    let minuscula = letra.toLocaleLowerCase;
    console.log (mayuscula)
     if (  letra === mayuscula ){
        console.log("Es mayuscula");
        }
    else{
        console.log("Es minuscula");
     }
}
punto5();
// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
const punto6 =() =>{
    let nota = parseFloat(prompt("Ingrese una nota del 1 al 10: "));
    if(nota>=0 && nota <4){
        console.log("Suspenso.");
    }
    else if(nota>=4 && nota <7){
        console.log("Aprobado.");
    }
    else if(nota>=7 && nota <=8){
        console.log("Notable.");
    }
    else if(nota>=9 && nota <=10){
        console.log("Sobresaliente.");
    }
}
punto6();
// 7) Imprimir los números pares del 2 al 20 en la consola.
punto7 = () =>{
    let paresDos = 2;
    for (let i=0; i<10; i++){
        console.log(paresDos)
        paresDos = paresDos+2;
      
    }
}
punto7();
// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.
const punto8 =() =>{
    let cadena = prompt("Ingrese una cadena: ");
    let mayuscula = cadena.toUpperCase();
 for (let i=0; i<cadena.length; i++){
    if (  cadena[i] === mayuscula[i] ){
        console.log(cadena[i] );
        }
}
 }
 punto8();

// 9) Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
    const punto9 = () =>{
    let numero = parseInt(prompt("Ingrese un numero"));
    for (let i=1; i<=numero; i++){
        console.log(i);
    }
}
punto9();
// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
// 16)Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
// 18) Dado un array de números, escribir una función que retorne el número más grande del array.
// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.
// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
// 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
// 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
// 24) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
// 25) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
// 26) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
// 27) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
// 28) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
// 29) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.





