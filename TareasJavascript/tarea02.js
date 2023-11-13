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

//usamos la función con dos numeros específicos
let parametro1 = 8;
let parametro2 = 2;
let resultadoSuma = sumarDosNumeros(parametro1, parametro2);

console.log("El resultado de la suma es: " + resultadoSuma);

//pendientes los demas por falta de tiempo :(
