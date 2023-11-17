
// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
const punto1 = () =>{
    let fecha = parseInt(prompt(" Punto 1: Ingrese un numero del 1 al 12: "));
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
    let numero = prompt ("Punto 4: Escriba un un número del 1 al 5");
   if(numero>=1 || numero<=5){
    console.log("El numero corresponde al dia: " + dias[numero] );
   } else{
    console.log("El numero ingresado no es valido" );
   }
   
}
punto4();
// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const punto5 = () =>{
    let letra = prompt("Punto 5: Ingrese una letra: ");
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
    
    let nota = parseFloat(prompt("Punto 6: Ingrese una nota del 1 al 10: "));
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
    console.log("Punto 7:")
    let paresDos = 2;
    for (let i=0; i<10; i++){
        console.log(paresDos)
        paresDos = paresDos+2;
      
    }
}
punto7();
// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.
const punto8 =() =>{
    let cadena = prompt("Punto 8: Ingrese una cadena: ");
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
    let numero = parseInt(prompt("Punto 9: Ingrese un numero"));
    for (let i=1; i<=numero; i++){
        console.log(i);
    }
}
punto9();
// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
const punto10 = () =>{
    let numeros = prompt("Punto 10: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    console.log("El numero mas grande ingresado es : "+Math.max(...arrayNumeros));
    }
punto10();
// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
const punto11 = () =>{
    let cadena = prompt ("Punto 11: Ingrese una palabra para verificar si es palindromo: ");
    let longitud = cadena.length;
    let cadenaInversa = " ";
    for (let i=longitud-1; i>=0; i-- ){
          cadenaInversa = cadenaInversa + cadena[i];
     }
 
    if(cadena==cadenaInversa){
        console.log("La cadena " + cadena + " Es palindromo ");
    }
    else{
        console.log("La cadena " + cadena + " NO es palindromo "); 
    }
}
punto11();
// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
const punto12 = () =>{
    let suma = 0;
    let parseo = 0;
    let numeros = prompt("Punto 12: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    for (let i=0; i<arrayNumeros.length; i++){
        if(arrayNumeros[i] % 2 ==0){
            parseo= parseInt(arrayNumeros[i]);
            suma = suma + parseo;
        }
    }
    console.log("La suma de los numeros pares ingresados es: " + suma);
}
punto12();
// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
const punto13 = () =>{
    let sumaNegativos = 0;
      let numeros = prompt("Punto 13: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    for (let i=0; i<arrayNumeros.length; i++){
        if(arrayNumeros[i]<0){
       
            sumaNegativos ++;
        }
    }
    console.log("La cantidad de numeros negativos ingresados es: " + sumaNegativos);
}
punto13();
// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
const punto14 = () =>{
    let numero = parseInt(prompt("Punto 14: Ingrese un numero"));
    for (let i=1; i<=numero; i++){
       if(i % 2 !=0){
        console.log(i);
       }
    }
}
punto14();
// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
const punto15 = () =>{
    let numeros = prompt("Punto 15: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    console.log("El menor numero ingresado es : "+Math.min(...arrayNumeros));
    }
punto15();
// 16)Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
const punto16 = () =>{
    let numeroRandom= Math.floor(Math.random()*101);
    let numeroIngresado= parseInt(prompt("Ingrese un numero entre el 1 y el 100: "));
    
    if(numeroIngresado == numeroRandom){
        console.log("Felicitaciones a adivinado el mumero: " +numeroIngresado );
    }else{ 
        console.log("El numero " +numeroIngresado + " no es el corecto, siga intentando!!!");  
    } 

}
punto16();

// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
const punto17 = () =>{
    let numeros = prompt("Punto 17: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    let contadorDePares = 0;
   for (let i=0; i<arrayNumeros.length; i++){
    if(arrayNumeros[i]%2 == 0){
        contadorDePares++
    }
   }
   console.log("La cantidad de numeros pares que ingresaste es: " + contadorDePares)  ;
    }
punto17();

// 18) Dado un array de números, escribir una función que retorne el número más grande del array.
const punto18 = () =>{
    let numeros = prompt("Punto 18: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    console.log("El numero mas grande ingresado es : "+Math.max(...arrayNumeros));
    }
    punto18();
// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
const punto19 = () =>{
    let numeros = prompt("Punto 19: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
    let arrayNumerosPares=[0]; 
    let  contadorDePares = -1;
    for (let i=0; i<arrayNumeros.length; i++){
            if(arrayNumeros[i]%2 == 0){
            contadorDePares++;
            arrayNumerosPares[contadorDePares] = arrayNumeros[i];
            }
    }
    console.log(arrayNumerosPares);
}

    punto19();
// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.
const punto20 = () =>{
    let numeros = prompt("Punto 20: Ingrese una serie de numeros separados por una coma: ");
    let arrayNumeros = numeros.split(",");
     let  sumador = 0;
     let parseo = 0 ;
    for (let i=0; i<arrayNumeros.length; i++){
        parseo = parseInt(arrayNumeros[i]);
        sumador= sumador + parseo;
    }
    console.log("La suma de todos los numeros ingresados es: " + sumador);
}
punto20();
// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
const punto21 = () =>{
    let arrayCadena = prompt("Punto 21: Ingrese una cadena de caracteres: ");
    let arrayMayusculas = arrayCadena.toUpperCase();
 
    console.log("La cadena en mayusculas es: " + arrayMayusculas);
}
punto21();
    // 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
    const punto22 = () =>{
        
       let arrayNumeros = prompt("Punto 22: Ingrese una serie de numeros separados por una coma: ");
       arrayNumeros = arrayNumeros.split(",");
       let x = prompt("Ingresa el valor de x: ");
        let arrayNuevo = [0];
        let contador = -1;
        for (let i=0 ; i<arrayNumeros.length; i++){
            if(arrayNumeros[i]>x){
                contador++;
                arrayNuevo[contador] = arrayNumeros[i];
            }
        }
    
        console.log(arrayNuevo);
    }
    punto22();
    // 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
    const punto23 = () =>{
        let arrayNumeros = prompt("Punto 23: Ingrese una serie de numeros separados por una coma: ");
            arrayNumeros = arrayNumeros.split(",");
        let arrayNumerosGrandes = [];
         let  sumador = 0;
         let parseo = 0 ;
        for (let i=0; i<arrayNumeros.length; i++){
            parseo = parseInt(arrayNumeros[i]);
            sumador= sumador + parseo;
            if(arrayNumeros[i]>10){
                arrayNumerosGrandes.push(arrayNumeros[i]) ;
            }
        }
        console.log("La suma de todos los numeros ingresados es: " + sumador);
        console.log( arrayNumerosGrandes);
    }
    
    punto23();
// 24) Filtrar strings con más de 5 caracteres
const stringsMasDe5Caracteres = () => {
    const arr = ["Hola", "Saludos", "Gato", "Perro", "Elefante"];
    return arr.filter(str => str.length > 5);
  };
  
  console.log(stringsMasDe5Caracteres());
  
  // 25) Filtrar strings con más de 5 caracteres y que empiecen con "a"
  const stringsMasDe5CaracteresYEmpiezanConA = () => {
    const arr = ["Avión", "Auto", "Manzana", "Amigo", "Bicicleta"];
    return arr.filter(str => str.length > 5 && str.toLowerCase().charAt(0) === 'a');
  };
  
  console.log(stringsMasDe5CaracteresYEmpiezanConA());
  
  // 26) Filtrar números mayores que X y limitar a los primeros 3
  const numerosMayoresQueX = () => {
    const arr = [10, 20, 5, 8, 15, 25];
    const X = 12;
    const filteredArray = arr.filter(num => num > X);
    return filteredArray.slice(0, 3);
  };
  
  console.log(numerosMayoresQueX());
  
  // 27) Sumar 1 a cada número del array
  const sumarUnoATodos = () => {
    const arr = [2, 5, 8, 10];
    return arr.map(num => num + 1);
  };
  
  console.log(sumarUnoATodos());
  
  // 28) Eliminar el último número del array
  const eliminarUltimoNumero = () => {
    const arr = [3, 6, 9, 12];
    return arr.slice(0, -1);
  };
  
  console.log(eliminarUltimoNumero());
  
  // 29) Eliminar el primer y último número del array
  const eliminarPrimerYUltimoNumero = () => {
    const arr = [4, 8, 12, 16, 20];
    return arr.slice(1, -1);
  };
  
  console.log(eliminarPrimerYUltimoNumero());
  
// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
const excluirNumeroEnPosicion = (arr, X) => {
    if (X < 0 || X >= arr.length) {
      return "La posición ingresada está fuera del rango del array.";
    }
  
    const resultado = arr.filter((num, index) => index !== X);
    return resultado;
  };
  
   
  const numeros = [4, 8, 12, 16, 20];
  const posicion = 2; 
  
  const resultado = excluirNumeroEnPosicion(numeros, posicion);
  console.log(resultado);  
  




