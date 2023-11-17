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
//Para comprobar si se cumple la condición establecida, utilice el método test.

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
    const cadenaNormal = cadena
    const cadenaAlreves = cadenaNormal.split("").reverse().join("")
    if (cadenaAlreves=== cadenaNormal) {
        console.log("Es un palíndromo")
    }
    else{
        console.log("No es un palíndromo")
    }
}
palíndromo("oso" , "1212" , "reconocer")
//agregue el método de string split para separar por comas y que a las palabras las convierta en string.
//agregue el método array reverse para invertir la palabra y asi se pueda verificar si la palabra es palíndromo. 
//agregue el método join para devolver una cadena concatenando todos los elementos que esten dentro del array. 

//Crear un programa que pida al usuario una letra y luego muestre si es vocal o una consonante.
const letra =(pedir) => {
    const vocal = ["a","e","i","o","u"]
    if (vocal.includes(pedir.toLowerCase())){
        console.log("Es una vocal")
    }
    else{
        console.log("Es una consonante")
    }
}
letra(prompt("Ingrese una letra"))
//Para verificar la letra ingresada si era vocal o consonante, utilice el método toLowerCase para que cuando el usuario ingresa la letra automaticamente entre con minuscula.
//ademas, utilice el método includes para que verifique si existe la letra que le indique.

//Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
const diaSemana =(number) => {
    number = parseInt(number)
    switch (number){
      case 1:
        console.log("es lunes")
        break;
      case 2:
        console.log("es martes")
        break;
      case 3:
        console.log("es miércoles")
        break;
      case 4:
        console.log("es jueves")
        break;
      case 5:
        console.log("es viernes")
        break;
      case 6:
        console.log("es sábado")
        break;
      case 7:
        console.log("es domingo")
        break;
      default:
        console.log("número ingresado no valído")
        break;
    }
}
diaSemana(prompt("Ingrese un número del 1 al 7"))
//utilice el condicional switch que sirve como reemplazo del if, else if, else.

//Crear un programa que pida al usuario un número y luego muestre si es primo o no.
const numPrimo =(number) => {
    for (let i = 2 ; i <= Math.sqrt(number);i++){
        if (number % i === 0) {
           return console.log("es un número primo")
        }
        else {
            console.log("no es un número primo")
        }
    }
}            
numPrimo(prompt("Ingrese un número para verificar si es un número primo"))
//Objeto Math.sqrt calcula la raiz cuadrada.
//no se como es la solución :(

//Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
const mayorEdad =(edad) => {
    if (edad > 18) {
        console.log("Felicidades, eres mayor de edad.")
    }
    else if (edad < 18) {
        console.log("Lo lamentó, eres un niño aún.")
    }
}
mayorEdad(prompt("Ingrese su edad"))

//Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
const suma =() => {
    const primerNum = prompt("Ingrese el primer número")
    const segundoNum = prompt("Ingrese el segundo número")
    const resultado = parseInt(primerNum) + parseInt(segundoNum)
    if (resultado > 100) {
        console.log("el resultado de tu suma es " + resultado + ".Por lo tanto, es mayor a 100")
    }
    else if (resultado === 100) {
        console.log("el resultado de tu suma es " + resultado + ".Por lo tanto, es igual a 100")
    }
    else{
        console.log("el resultado de tu suma es " + resultado + ".Por lo tanto, es menor a 100")
    }
}
suma()
//utilice el método parseInt para convertir las cadenas en números y asi se pueda aplicar la suma, de lo contrario se realizaba una concatenación.

//Crear un programa que pida al usuario tres números y luego muestre cual es el mayor de los tres.
const numMayor =(número1, número2, número3) => {
    número1 = parseInt(número1)
    número2 = parseInt(número2)
    número3 = parseInt(número3)
    const lista = [número1,número2, número3]
    const mayorNum = Math.max(...lista)
    console.log("El número mayor de los tres ingresado es " + mayorNum)
}
numMayor(prompt("Ingrese en número 1"), prompt("Ingrese el número 2"), prompt("Ingrese el número 3"))
//utilice el método Math.max para saber cual es el mayor de los tres números ingresados.

//Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
const letraIngresada =(letraMayúcula) => {
    if (letraMayúcula === letraMayúcula.toUpperCase()) {
        console.log("La letra que ingreso es mayúscula")
    }
    else if (letraMayúcula === letraMayúcula.toLowerCase()){
        console.log("La letra que ingreso es minúscula")
    }
    else{
        console.log("Lo que ingresaste no es una letra")
    }
}
letraIngresada(prompt("Ingrese una letra para verificar si es mayúscula o minúscula"))
//Utilice el método toLowerCase y toUpperCase para realizar la comparación de forma separada.

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
const esDivisible =(Number) => {
   switch (true) {
    case (Number % 3 === 0):
        console.log("Fizz")
    case (Number % 5 === 0):
        console.log("Buzz")
    case (Number % 3 === 0 && Number % 5 === 0):
        console.log("FizzBuzz")
    default:
        console.log("Number")
        break;
   }
}
esDivisible(45)
//utilece el condicional switch con la expresión true para que verifique si es verdadero que el número 45 es divisible por 3, 5 y ambos.

//Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
//Crear un programa que pida al usuario un número y luego muestre su descompisición en factores primos.
//Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
