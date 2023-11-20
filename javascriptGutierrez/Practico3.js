//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.
console.log("Punto uno")

const MPoC = (num) => {
    if(num < 0)
    {
        console.log("El número es Negativo")
    }else if(num > 0){
        console.log("El número es Positivo")
    }else{
        console.log("El número es Cero")
    }
}

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.
console.log("Punto dos")

const ParOImpar = (num) => {
    if(num%2 == 0)
    {
        console.log("El número es Par")
    }else{
        console.log("El número es Impar")
    }
}

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.
console.log("Punto tres")

num1 = parseInt(prompt("Ingrese num1"))
ParOImpar(num1);

// Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.
console.log("Punto cuatro")

num2 = parseInt(prompt("Ingrese num2"))
MPoC(num2)

// Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.
console.log("Punto cinco")

let num3 = parseInt(prompt("Ingrese num3"))
let num4 = parseInt(prompt("Ingrese num4"))

if(num3 > num4){
    console.log("El num3 es el mayor")
}else if(num4 > num3){
    console.log("El num4 es el mayor")
}else{
    console.log("num3 y num4 son iguales")
}

// Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.
console.log("Punto seis")
let contraseña = prompt("Ingrese su contraseña bancaria")
function validarContraseña(contra)
{
    let contador = 0
    if(contra.length >= 8){
      for (let i = 0; i < contra.length; i++) {
        if(contra[i] == '@' || contra[i] == '!' || contra[i] == '$')
        contador++
      }
      if(contador == 0)
      {
        console.log("Contraseña Inválida: Falta agregar algún carácter especial")
      }else{
        console.log("Contraseña Válida")
      }
    }else{
        console.log("Contraseña Inválida: Debe tener al menos 8 caracteres")
    }
}

validarContraseña(contraseña);


// Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).
console.log("Punto siete")
const calificacion = () =>
{
    let nota = prompt("Ingrese su nota por favor (0 a 100)")
    if(nota >= 70)
    {
        console.log("Felicidades, está aprobado")
    }else{
        console.log("Triste vida, desaprobaste")
    }
}
calificacion()

//Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
console.log("punto ocho")
const palindromo = (palabra) =>
{
    let normal = palabra.split("")
    let reves = palabra.split("").reverse()
    let mensaje = ("")
        for(let i = 0; i < normal.length; i++)
        {
            if(normal[i] != reves[i])
            {
                mensaje = (palabra + " no es un palíndromo")
                i = normal.length
            }else{
                mensaje = (palabra + " es un palíndromo")
            }
        }
    
    return mensaje
}
let palabra = prompt("Ingrese una palabra")
let mensaje = palindromo(palabra);
console.log(mensaje)

// Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.
console.log("punto nueve")
const vocalOCons = () =>
{
    let letra = prompt("Ingrese una letra").toLowerCase()
    isNaN
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("La letra ingresada es una vocal")                
            break
    
        default: console.log("la letra ingresada es una consonante")
            break
    }
}
vocalOCons()

// Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.
console.log("Punto diez")
const dias = () =>
{
    let dia = parseInt(prompt("Ingrese un número del 1 al 7"))
   
        switch (dia)
        {
            case 1: console.log("Hoy es Domingo")
                break
            case 2: console.log("Hoy es Lunes")
                break
            case 3: console.log("Hoy es Martes")
                break 
            case 4: console.log("Hoy es Miércoles")
                break
            case 5: console.log("Hoy es Jueves")
                break
            case 6: console.log("Hoy es Viernes")
                break
            case 7: console.log("Hoy es Sábado wiii")   
                break
            default: console.log("No ingresó un número correspondiente al rango pedido >:(")
                break             
        }
}
dias()

// Crear un programa que pida al usuario un número y luego muestre si es primo o no.
console.log("Punto once")
const esPrimo = () =>
{
    let resultado = true
    let numero = parseInt(prompt("Ingrese num5"))
    for (let i = 2; i < numero; i++) {
        if(numero % i == 0)
        {
           resultado = false
           i = numero
        }
    }
    if(resultado)
    {
        console.log("El número ingresado es primo")
    }else{
        console.log("El número ingresado no es primo")
    }

}
esPrimo()

// Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).
console.log("Punto doce")
const mayorOMenor = () =>
{
    let edad = parseInt(prompt("Ingrese su edad"))
    if (edad >= 18) {
        console.log("Usted es mayor de edad")
    }else{
        if(edad < 0)
        {
           console.log("Su edad es negativa, vuelva a nacer") 
        }else{
            console.log("Usted es menor de edad")
        }
        
    }
}
mayorOMenor()

// Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.
console.log("Punto trece")
const sumar = () =>
{
    let num1 = parseInt(prompt("Ingrese el primer número"))
    let num2 = parseInt(prompt("Ingrese el segundo número"))
    if(num1 + num2 == 100)
    {
        console.log("La suma entre ", num1, " y ", num2, " es igual a 100")
    }else{
        if(num1 + num2 <= 100)
        {
            console.log("La suma entre ", num1, " y ", num2, " es menor a 100")
        }else{
            console.log("La suma entre ", num1, " y ", num2, " es mayor a 100")
        }
    }
}
sumar()

// Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.
console.log("Punto catorce")
const mayor = () =>
{
    let num1 = parseInt(prompt("Ingrese el primer número"))
    let num2 = parseInt(prompt("Ingrese el segundo número"))
    let num3 = parseInt(prompt("Ingrese el tercer número"))
  
        if(num1 == num2 && num2 == num3)
        {
            console.log("Los tres números son iguales, no existe un mayor")
        }else{
            if(num1 > num2)
        {
            if(num1 > num3)
            {
                console.log("El número ", num1, " es el mayor")
            }else{
                if(num1 != num3)
                {
                    console.log("El número ", num3, " es el mayor")
                }else{
                    console.log(num1, "y", num3, " son iguales y son los mayores")
                }
            }
        }else{
            if(num1 != num2)
            {
                if(num2 == num3)
            {
                console.log(num2, num3, " son iguales y son los mayores")
            }else{
                if(num2 > num3)
                {
                    console.log("El número ", num2, " es el mayor")
                }else{
                    console.log("El número, ", num3, " es el mayor")
                }
            }
            }else{
                console.log(num1, " y", num2, "son iguales y son mayores")
            }
            
        }
    
    }
        
}
mayor()

// Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.
console.log("Punto quince")
const mayuOMin = () =>
{
    let letra = prompt("Ingrese una letra")
    if(letra == letra.toLowerCase())
    {
        console.log("La letra ingresada es minúscula")
    }else{
        console.log("La letra ingresada es mayúscula")
    }
}
mayuOMin()

//Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.
console.log("Punto dieciseis")
let num6 = parseInt(prompt("Ingrese num6"))
const fizzBuzz = (numero) =>
{
    let res1 = "Fizz"
    let res2 = "Buzz"
    let res3 = "FizzBuzz"
    if(numero % 3 == 0){
        if(numero % 5 == 0)
        {
            return res3
        }else{
            return res1
        }
    }else{
        if(numero % 5 != 0){
            return numero
        }else{
            return res2
        }
    }
}
let devolucion = fizzBuzz(num6)
console.log("La devolución fue ", devolucion)

// Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.
console.log("Punto diecisiete")
const perfecto = () =>
{
    let numero = parseInt(prompt("Ingrese num7"))
    let ayuda = 0
    for(let i = 1; i < numero; i++ )
    {
        if(numero % i == 0)
        {
            ayuda += i
        }
    }
    if(ayuda == numero)
    {
        console.log("El número ingresado es perfecto")
    }else{
        console.log("El número ingresado no es perfecto")
    }
}

perfecto()

// Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.
console.log("Punto dieciocho")
const descomponer = () =>
{
    let numero = parseInt(prompt("Ingrese num8"))
    let array = []
    for(let i = 2; i <= numero; i++)
    {
        if(numero % i == 0)
        {
            array.push(i)
            numero = numero/i
            i = 1;
        }
    }
    for(let j = 0; j < array.length; j++)
    {
        console.log(array[j])
        console.log("x")
    }
}
descomponer()

// Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.
console.log("Punto diecinueve")
const fecha = () =>
{
    let dia = parseInt(prompt("Ingrese el dia"))
    let mes = parseInt(prompt("Ingrese el mes"))
    let año = parseInt(prompt("Ingrese el año"))
    let validez = 1
    if(dia >= 1 && dia <= 31)
    {
        if(mes >= 1 && mes <= 12)
        {
            if(año > 0)
            {
                if(dia == 31)
                {
                    switch(mes)
                    {
                        case 2:
                        case 4:
                        case 6:
                        case 9:
                        case 11: 
                           console.log("Día y mes no concuerdan")
                           validez = 0
                        break;  
                    }
                }
                if((año % 100 != 0 && año % 400 == 0) || año % 4 == 0)
                {
                    if(mes == 2 && dia > 29)
                    {
                        console.log("Se ingresó día erróneo para el mes de febrero")
                        validez = 0
                    }
                }else{
                    if(mes == 2 && dia > 28)
                    {
                        console.log("Se ingresó día erróneo para febrero")
                        validez = 0
                    }
                }
            }else{
                console.log("Se ingresó un año incorrecto")
                validez = 0
            }
        }else{
            console.log("El mes ingresado es incorrecto")
            validez = 0
        }
    }else{
        console.log("Usted ingresó un día incorrecto")
        validez = 0
    }
    if(validez)
    {
      console.log("Fecha válida :)")
    }
}
fecha()


