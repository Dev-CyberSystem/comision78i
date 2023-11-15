//Tarea Clase 08-11-23

//01-Mostrar la suma de dos numeros en consola
function sumar(){
    let num1 = 20;
    let num2 = 28;
    let resultado = num1 + num2;

    return resultado
}

console.log("01-El resultado de la suma es: ", sumar());

//02-Comparar dos variables numericas (==)
function comparaVariables(){
    let variableUno = 23;
    let variableDos = 22.888;

    if(variableUno == variableDos){
        return "son iguales";
    }else{
        return "no son iguales"
    }
}

console.log("02-Las variables ", comparaVariables());

//03-Comparar dos variables numericas (!=)
function comparaNegacion(){
    let numero1 = 34;
    let numero2 = 3478;

    if(numero1 != numero2){
        return "si son diferentes";
    }else{
        return "no son diferentes, son iguales"
    }
}
console.log(comparaNegacion());

//04-Aumentar variable (++)
function aumentaVariable(){
    let aumentoVar = 5;
    aumentoVar+=5;
    return aumentoVar;
}
console.log("Resultado: ",aumentaVariable());

//05-Disminuye variable
function disminuyeVariable(){
    let disminum = 8;
    disminum=-3;
    return disminum;
}
console.log("Resultado: ",disminuyeVariable());

//06-Concatena variable string
function concatenaVariables(){
    let nombre = "Keyra";
    let apellido = " Lima";
    let concatena = nombre+apellido;
    return concatena;
    
}
console.log("Mi nombre es: ",concatenaVariables());

//07-Valores booleanos diferentes comparar con AND(&&)
function concatenaBooleanos(){
    let valor1 = true;
    let valor2 = false;

    if(valor1 == true && valor2 == false){
        return "valores diferentes";
    }else{
        return "valores iguales";
    }
}
console.log(concatenaBooleanos());

//08-Valores booleanos diferentes comparar con OR(||)
function concatenaBooleanosOR(){
    let valor1 = true;
    let valor2 = false;

    if(valor1 == true || valor2 == false){
        return "valores diferentes";
    }else{
        return "valores iguales";
    }
}
console.log(concatenaBooleanosOR());

//09-Compara mayor que (numeros)
function comparaValoresNum(){
    let datoNum1 = 45;
    let datoNum2 = 212;

    if(datoNum1>datoNum2){
        return "Num1 es mayor que Num2"
    }else{
        return "Num2 es mayor que num1"
    }
}
console.log(comparaValoresNum());

//10-Compara menor igual que <= (numeros)
function comparaValoresMenor(){
    let datoNum1 = 45;
    let datoNum2 = 212;

    if(datoNum1<=datoNum2){
        return "Num1 es menor que Num2"
    }else{
        return "Num2 es mayor que num1"
    }
}
console.log(comparaValoresMenor());

//11-Funcion que recibe dos parametros 
function sumarDosNumeros(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

//usamos la función con dos numeros específicos (suma)
let parametro1 = 8;
let parametro2 = 2;
let resultadoSuma = sumarDosNumeros(parametro1, parametro2);

console.log("El resultado de la suma es: " + resultadoSuma);

//12-Funcion con parametros (resta)
function restarDosNumeros(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

let parametroUno = 23;
let parametroDos = 3;
let resultadoResta = restarDosNumeros(parametroUno,parametroDos);
console.log("El resultado de la resta es: "+ resultadoResta);

//13-Funcion que sume 5 + 10
function declaraNum(){
    let valorFijo = 5;
    return valorFijo+=10;
}
console.log(declaraNum());

//14-Concatenar 2 variables string 
function concatenaString(){
    let palabra1 = "Bienvenidos";
    let palabra2 = " a mi programa.";
    return palabra1+palabra2
}
console.log(concatenaString());

//15-Comparar variables booleanas si son iguales o no
function comparaBoolean(){
    let llave1 = true;
    let llave2 = true;

    if(llave1==llave2){
        return "Son iguales"
    }else{
        return "No son iguales"
    }
}
console.log(comparaBoolean());

//16-Comparar variables booleanas si son diferentes
function comparaBoolean(){
    let llave1 = true;
    let llave2 = true;

    if(llave1!=llave2){
        return "Son diferentes"
    }else{
        return "son iguales"
    }
}
console.log(comparaBoolean());

//17-Calcular si un numero es mayor que el otro
function calculaMayor(){
    let primerNum = 22;
    let segundoNum = 22;

    if(primerNum>segundoNum){
        return "El primero es mayor"
    }else{
        return "El segundo es mayor"
    }
}
console.log(calculaMayor());

//-18 ingresar numero y mostrarlo en consola
function ingresaNumero(){
    let numeroIngresado = prompt("Ingrese un número:");
    let numero = parseFloat(numeroIngresado); //Convertir el valor ingresado a un número

    //Mostrar en consola
    if (!isNaN(numero)) {
    console.log("El número ingresado es: " + numero);
    } else {
    console.log("Entrada inválida. Por favor, ingrese un número válido.");
    }
}
console.log(ingresaNumero());

//19-Ingresa nombre y mostrar en pantalla
function ingresaNombre(){
    let nombreIngresado = prompt("Ingrese su nombre");
    console.log("Bienvenid@ " + nombreIngresado);
}
console.log(ingresaNombre());

//20- Ingresar dos numeros y guardarlos en variables, sumarlos ymostrar el resultado
function ingresaSuma(){
    let numero1Ingresado = prompt("Ingrese el primer número:");
    let numero1 = parseFloat(numero1Ingresado);

    let numero2Ingresado = prompt("Ingrese el segundo número:");
    let numero2 = parseFloat(numero2Ingresado);

    // Verificar si las conversiones fueron exitosas y realizar la suma
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let suma = numero1 + numero2;
        console.log("La suma de los dos números es: " + suma);
    } else {
        console.log("Entrada inválida. Por favor, ingrese números válidos.");
    }
}
console.log(ingresaSuma());

//21-solicitar año nacimiento y calcular edad actual, mostrar si es mayor o no de edad. Finalmente mostrar la cadena de texto.
function calculaEdad(){
    let anioNacimiento = prompt("Ingresa tu anio de nacimiento");
    anioNacimiento2 = parseFloat(anioNacimiento);
    
    let AnioActual = prompt("Ingresa anio actual");
    anioActual2 = parseFloat(AnioActual);
    
    let resultado = (anioActual2 - anioNacimiento2);
    
    if(resultado >=18){
        console.log("Usted es mayor de edad y su edad es: ", resultado)
    }else{
        console.log("Usted es menor de edad y su edad es: ", resultado)
    }
}

calculaEdad();

//22-Solicitar una frase y leer la cantidad de palabras
let fraseIngresada = prompt("Ingrese una frase");

// Verificar si el usuario ingresó algo
if (fraseIngresada !== null && fraseIngresada.trim() !== "") {
    // Dividir la frase en palabras utilizando el espacio como separador
    let palabras = fraseIngresada.split(" ");

    // Contar el número de palabras
    let numeroDePalabras = palabras.length;

    // Mostrar el resultado en la consola
    console.log("Número de palabras en la frase: " + numeroDePalabras);
} else {
    console.log("No se ingresó una frase válida. Por favor, inténtelo de nuevo.");
}

