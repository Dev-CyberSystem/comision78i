//1 -Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
const punto1 = () =>{
    console.log('Punto Nro: 1');
    let numero = parseInt(prompt("Punto Nro: 1 Ingrese un numero: "));
    if (numero>0 ){
        console.log('El numero ingresado es positivo. ')
    }
    else if(numero == 0){
        console.log('El numero ingresado es igual a cero. ')
    }
    else{
        console.log('El numero ingresado es negativo. ')
    }
}
punto1 ();
//2 -Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
const punto2 = () =>{
    console.log('Punto Nro: 2');
    let numero = parseInt(prompt("Punto Nro: 2 Ingrese un numero: "));
    if (numero % 2 == 0 ){
        console.log('El numero ingresado es PAR. ')
    }
    else{
        console.log('El numero ingresado es impar. ')
    }
}
punto2 ();
//3 -Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const punto3 = () =>{
    console.log('Punto Nro: 3');
    let numero = parseInt(prompt("Punto Nro:3 Ingrese un numero: "));
    if (numero % 2 == 0 ){
        console.log('El numero ingresado es PAR. ')
    }
    else{
        console.log('El numero ingresado es impar. ')
    }
}
punto3();

//4 - Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
console.log("Punto: 4");
punto1 ();
//5 - Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
const punto5 = () => {
    console.log('Punto Nro: 5');
    let numero1 = parseInt(prompt("Punto Nro 5: Ingrese un numero: "));
    let numero2 = parseInt(prompt("Punto Nro 5: Ingrese otro numero: "));
    if (numero1>numero2 ){
        console.log('El primer numero ingresado es el mayor. ')
    }
    else if(numero1 == numero2){
        console.log('Los numeros ingresados son iguales. ')  
    }

    else{
        console.log('El segundo numero ingresado es el mayor. ')
    }
} 
    
punto5();
//6 - Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
const punto6 = () =>{
    console.log('Punto Nro: 6');
    let contraseña = prompt("Punto Nro 6: Ingrese una contraseña: ");
    let longitud = contraseña.length;
    let ban = false;
    if (longitud>=10 ){
     console.log('Cumple con la longitud mayor o igual a diez. ')
     for (let i= 0; i<longitud; i++) {

        if(contraseña[i]=='$'){
            ban=true
            break;
        }
    
     }
     
     if (ban==true){
        console.log("NO cumple con no poseer los siguientes caracteres especiales:  '$' ") 
     }
     else{
        console.log("Cumple con no poseer los siguientes caracteres especiales:  '$' ") 
     }

    }  
     else{
        console.log('NO Cumple con la longitud mayor o igual a diez. ')  
       
     }
}    
punto6();

//7 -Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

const punto7 = () =>{
    let calificación = parseFloat(prompt("Punto Nro 7: Ingrese  una calificacion entre 0 y 100: "));
   
        while(calificación <0 || calificación>100){
          calificación = parseFloat(prompt("Ingrese  una calificacion valida: "));
        }
  
   if(calificación>=70){
    console.log("Esta aprobado!!!");
   }
   else{
    console.log("Esta desaprobado :(");
   }
}
punto7();

//8 -Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
    const punto8 = () =>{
        let cadena = prompt ("Punto 8: Ingrese una palabra para verificar si es palindromo: ");
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
    punto8();

// 9 - Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
const punto9 = () =>{
    let letra = prompt ("Punto 9: Ingrese una letra para verificar si es una vocal: ");
    
    if(letra == "a"|| letra =="e" || letra =="i" ||letra =="o" ||letra == "u"  ){
        console.log("Es una vocal :)");
    }
    else{
        console.log("NO una vocal :)");
    }
}
punto9();

//10- Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const punto10 = () =>{
    let numero= parseInt(prompt("Punto 10: ingresa un numero del 1 al 7: "));
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
            console.log("Juecves")
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
punto10();
//11- Crear un programa que pida al usuario un número y luego muestre si es primo o no.

const punto11 = () =>{
    const esPrimo = (numero) => {
        if (numero <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    };

    let num = parseInt(prompt("Punto 11: Ingresa un número entero positivo mayor que 1: "));

    if (esPrimo(num)) {
        console.log(`${num} es un número primo.`);
    } else {
        console.log(`${num} no es un número primo.`);
    }
}
punto11 ();
	
//12- Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const punto12 = () =>{
    let edad = parseInt(prompt("Punto 12: Ingrese su edad; "))
    if(edad>=18){
        console.log("Es mayor de edad");
    }
    else{
        console.log("Es menor de edad");
    }
} 
punto12();

//13- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const punto13 = () =>{
    let num1 = parseInt(prompt("Ingrese un numero")) ;
    let num2 = parseInt(prompt("Ingrese otro numero")) ;
    let suma = num1 + num2;
    if(suma>100){
        console.log("La suma de los dos numeros es mayor a 100");
    }
  
    else if(suma==100){
        console.log("La suma de los dos numeros es igual a 100");
    }
    else{
        console.log("La suma de los dos numeros es menor a 100");
    }
    
}
punto13 ();
//14- Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
const  punto14 =() =>{
    let num1 = parseInt(prompt("Ingrese el numero 1: ")) ;
    let num2 = parseInt(prompt("Ingrese el numero 2: ")) ;
    let num3 = parseInt(prompt("Ingrese el numero 3: ")) ;
    if(num1>num2 && num1>num3){
        console.log ("el numero 1 es el mayor")
    }
    
    if(num2>num1 && num2>num3){
        console.log ("el numero 1 es el mayor")
    }
  
    if(num3>num1 && num3>num2){
        console.log ("el numero 1 es el mayor")
    }
}
punto14 ();

//15- Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const punto15 = () =>{
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
punto15 ();

// 16- Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
const punto16 =() =>{
    numero= parseInt(prompt ("Punto 16; Ingrese un numero:  "));
     if(numero % 3==0 && numero % 5==0){
        console.log("FizzBuzz")

    }
    else if(numero % 3==0 ){
        console.log("Fizz")

    }
   else if(numero % 5==0 ){
        console.log("Buzz")

    } 
  
    else if(numero % 3!=0 && numero % 5!=0 ){
        console.log("El numero es: " + numero)

    }
// }
punto16();

// 17- Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
const punto17  =() =>{
    let n= parseInt(prompt("Ingrese un numero; "));
    let divisores = 0;
   for (let i=1 ; i<n; i++  ){
    if(n % i == 0){
        divisores = divisores + i
    }
   }
   if (n==divisores){
    console.log("Es un numero perfecto. ")
   }    
   else{
    console.log("NO un numero perfecto. ")
   }

}
punto17();
// 18- Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

punto18 = () =>{
    let numero= parseInt(prompt("Ingrese un numero; "));
    let divisores = 0;
   for (let i=1 ; i<=numero  ; i++  ){
    if(numero % i == 0){
        console.log(i)
    }
   }
    
}
punto18();

 

//19- Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
const punto19 = () => {
     
let dia = parseInt(prompt("Ingresa el día:"));
let mes = parseInt(prompt("Ingresa el mes:"));
let anio = parseInt(prompt("Ingresa el año:"));
let validacionDeFecha = !isNaN(Date.parse(`${anio}-${mes}-${dia}`));
if (validacionDeFecha) {
    console.log("La fecha ingresada es válida.");
} else {
    console.log("La fecha ingresada no es válida.");
}
}
}