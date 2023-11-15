//Crear una función que tome dos números como parámetros y devuelva el número mayor.
const esMayor =(num1, num2) => {
    if (num1 > num2){
        console.log(num1, "es mayor")
    }
    else if (num1 === num2){
        console.log("son iguales")
    }
    else{
        console.log(num2, "es mayor")
    }
}
esMayor(45,34)

//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero, y si es igual a cero.
const número =(num1) => {
    if(num1 > 0) {
        console.log("Positivo")
    } 
    else if (num1 < 0) {
        console.log("Negativo")
    } 
    else {
        console.log("Iguales")
    }

}
número(50)

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
const parOimpar =(num2) => {
    if(num2 % 2 === 0)  {
        console.log("Es par")
    }
    else{
        console.log("Es impar")
    }
}
parOimpar(7)
//Puse la comparación con el cero para que de manera correcta me devuelva el par o impar. 

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
const pedir =() => {
    const usuario = prompt("Ingrese un número")
    if (usuario % 2 === 0){
        console.log("Par")
    }
    else{
        console.log("Impar")
    }    
} 
pedir()
//le agregue el divible por 2 y la comparación con cero para que de manera correcta me devuelva par o impar.

//Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
const pedir2 =() => {
    const user = prompt("Ingrese un número")
    if (user > 0) {
        console.log("El número ingresado es positivo")
    }
    else if (user < 0) {
        console.log("El número ingresado es negativo")
    }
    else {
        console.log("El número ingresado es cero")
    }
}
pedir2()
//agregue los signo de mayor y menor mas el 0 para que de forma correcta me devuelva el positivo, negativo o cero porque de lo contrario solo devolvia positivo o cero.

//Crear un programa que pida al usuario dos números y luego muestre cual es el mayor de los dos.
const mayor =() => {
    const number1 = prompt("Ingrese un número")
    const number2  = prompt("Ingrese un número")
    if (number1 > number2){
        console.log("El primer número ingresado es mayor: " + number1)
    }
    else if (number2 > number1){
        console.log("El segundo ingresado es mayor: " + number2)
    }
    else{ 
        console.log("Ambos números ingresados son iguales")
    }
}
mayor()
//para que en la consola me de el número mayor tuve que cambiar de lugares el number 1 y 2 en el if y else if.

//Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como longitud y la presencia de caracteres especiales.
const validación=(contraseña) => {
    const caracteresEsps = /[@#]/
    if (contraseña.length < 10){
        alert("La contraseña debe contener al menos 10 caracteres")
    }
    else if (!caracteresEsps.test(contraseña)){
        alert("La contraseña debe contener al  menos uno de los caracteres especiales (@#)")       
    }
    else {
        alert("La contraseña es válida")
    }
}
validación(prompt("Ingrese una contraseña")) 

//Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
const calificación =() => {
    const num = prompt("Ingrese una calificación")
    if (num >= 70){
        console.log("Felicidades!!! La calificación es aprobatoria. Obtuviste " + num)
    }
    else{
        console.log("Lo Lamentó!!! La calificación no fue suficiente para aprobar. Obtuviste " + num)
    }
}
calificación()

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es palíndromo".
const palíndromo =(cadena) => {
    const cadenaNormal = cadena.toLowerCase()
    const cadenaAlreves = cadenaNormal.split("").reverse().join("")
    if (cadenaAlreves=== cadenaNormal) {
        console.log("Es un palíndromo")
    }
    else{
        console.log("No es un palíndromo")
    }
}
palíndromo("oso", "reconocer", "1212")
