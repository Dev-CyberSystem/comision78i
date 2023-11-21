// // 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
console.log("Punto 1")
const meses = (numero) =>
{
    switch(numero)
    {
        case 1: console.log("Enero")
        break;
        case 2: console.log("Febrero")
        break;
        case 3: console.log("Marzo")
        break;
        case 4: console.log("Abril")
        break;
        case 5: console.log("Mayo")
        break;
        case 6: console.log("Junio")
        break;
        case 7: console.log("Julio")
        break;
        case 8: console.log("Agosto")
        break;
        case 9: console.log("Septiembre")
        break;
        case 10: console.log("Octubre")
        break;
        case 11: console.log("Noviembre")
        break;
        case 12: console.log("Diciembre")
        break;
        default: console.log("El número ingresado no corresponde a un mes")
    }
}
let mes = parseInt(prompt("Ingrese el número del mes deseado"))
meses(mes)

// // 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
console.log("Punto 2")
const dias = (numero) =>
{
    switch(numero)
    {
        case 1: console.log("Domingo")
        break;
        case 2: console.log("Lunes")
        break;
        case 3: console.log("Martes")
        break;
        case 4: console.log("Miércoles")
        break;
        case 5: console.log("Jueves")
        break;
        case 6: console.log("Viernes")
        break;
        case 7: console.log("Sábado")
        break;
        default: console.log("El número ingresado no corresponde a un día de la semana")
    }
}
let dia = parseInt(prompt("Ingrese el número del día deseado"))
dias(dia)

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
console.log("Punto 3")
const vocalOCons = (letra) =>
{
    switch(letra)
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("La letra ingresada es una vocal")
        break;
        default: 
            console.log("La letra ingresada es una consonante")
        break;                        
    }
}
let letra = prompt("Ingrese una letra")
vocalOCons(letra.toLowerCase())

// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.
console.log("Punto 4")
const semana = (dia) =>
{
    if(dia <= 5 && dia >= 1)
    {
        let semanita = [' ', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes',]
        eleccion = semanita[dia]
        console.log("El día seleccionado es ", eleccion)
    }else{
        console.log("El número ingresado no se encuentra en el rango pedido")
    }
}
let num = parseInt(prompt("Ingrese un número del 1 al 5"))
semana(num)

// // 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
console.log("Punto 5")
const mayuOMin = (letra) =>
{
    let letrita = letra
    if(letra == letrita.toLowerCase())
    {
        console.log("La letra es minúscula")
    }else{
        console.log("La letra es mayúscula")
    }
    
}
let letra2 = prompt("Ingrese una letra minúscula o mayúscula")
mayuOMin(letra2)

// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).
console.log("Punto 6")
const notas = (notita) =>
{
    switch(notita)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: console.log("Suspenso...")
        break;
        case 6:
        case 7: console.log("Aprobado")
        break;
        case 8:
        case 9: console.log("Notable :)")
        break;
        case 10: console.log("Sobresaliente :D")
        break;
        default: console.log("La nota ingresada no es correcta")
        break;        
    }
}
let nota = parseInt(prompt("Ingrese su nota"))
notas(nota)

// // Imprimir los números pares del 2 al 20 en la consola.
console.log("Punto 7")
const pares = () =>
{
    for(let i = 2; i <= 20; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i)
        }
    }
}
pares()

// // Recorrer un string y mostrar en la consola cada letra en mayúsculas.
console.log("Punto 8")
const mayusculas = () =>
{
    let palabra = prompt("Ingrese una palabra")

    mayus = palabra.match(/[A-Z]/g)
    console.log(mayus)
    console.log("Mayúsculas en", palabra, ":")
    
        for(let i = 0; i < mayus.length; i++)
        {
        console.log(mayus[i])
        console.log("-")
        }
    
    
}
mayusculas()

// // Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.
console.log("Punto 9")
const recorrerNumeros = () =>
{
    let numero = parseInt(prompt("Ingrese un número"))
    for(let i = 1; i <= numero; i++)
    {
        console.log(i)
    }
}
recorrerNumeros()

// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.
console.log("Punto 10")
const mayor = () =>
{
    let numeros = prompt("Ingrese una serie de números separados por coma")
    numeros.trim()
    arreglo = numeros.split(',')
    console.log(arreglo)
    let mayor = 0
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] > mayor)
        {
            mayor = arreglo[i]
        }
    }
    console.log("EL número mayor es: ", mayor)
}
mayor()

// // Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.
console.log("Punto 11")
const palindromo = () =>
{
    let palabra = prompt("Ingrese una palabra")
    let normal = palabra.split("")
    let reves = palabra.split("").reverse()
    let mensaje = ("")
        for(let i = 0; i < normal.length; i++)
        {
            if(normal[i] != reves[i])
            {
                mensaje = ("'"+ palabra + "'" + " no es un palíndromo")
                i = normal.length
            }else{
                mensaje = ("'"+ palabra + "'" + " es un palíndromo")
            }
        }
    
    return mensaje
}
mensaje = palindromo();
console.log(mensaje)

// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.
console.log("Punto 12")
const sumarPares = () =>
{
    let numeros = prompt("Ingrese una serie de números separados por coma")
    numeros.trim()
    arreglo = numeros.split(',')
    console.log(arreglo)
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] % 2 == 0)
        {
            suma += parseInt(arreglo[i])
        }
    }
    console.log("La suma entre los números pares es: ", suma)
}
sumarPares()

// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.
console.log("Punto 13")
const negativos = () =>
{
    let numeros = prompt("Ingrese una serie de números separados por coma")
    numeros.trim()
    arreglo = numeros.split(',')
    console.log(arreglo)
    cantidad = 0
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] < 0)
        {
            cantidad++
        }
    }
    console.log("La cantidad de números negativos es: ", cantidad)
}
negativos()

// // Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.
console.log("Punto 14")
const impares = () =>
{
    let numero = parseInt(prompt("Ingrese un número"))
    for(let i = 1; i <= numero; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i)
        }
    }
}
impares()

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.
console.log("Punto 15")
const menor = () =>
{
    let numeros = prompt("Ingrese una serie de números separados por coma")
    numeros.trim()
    arreglo = numeros.split(',')
    console.log(arreglo)
    let mayor = 0
    let menor = 0
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] > mayor)
        {
            mayor = arreglo[i]
        }else{
            menor = arreglo[i]
        }
    }
    console.log("EL número menor es: ", menor)
}
menor()

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
console.log("Punto 16")
const aleatorio = () =>
{
    let contador = 0
    let numero = Math.floor((Math.random() * 100))
    do {
        let ingresado = parseInt(prompt("Ingrese un número del 1 al 100"))
        contador++
    } while (ingresado != numero)
    console.log("El número era: ", numero)
    console.log("Los intentos fueron: ", contador)
}
aleatorio()

// // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.
console.log("Punto 17")
const par = () =>
{
    let numeros = prompt("Ingrese una serie de números separados por coma")
    numeros.trim()
    let arreglo = numeros.split(',')
    console.log(arreglo)
    let contador = 0
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] % 2 != 0)
        {
            contador++
        }
    }
    console.log("La cantidad de números pares es: ", contador)
}
par()

// // Dado un array de números, escribir una función que retorne el número más grande del array.
console.log("Punto 18")
const maxDelArray = () =>
{
    let cantidad = prompt("Diga la cantidad de números que quiere ingresar")  
    let array = [] 
    let max = 0
    for(let i = 0; i < cantidad; i++)
    {
        array[i] = parseInt(prompt("Ingrese un número"))
    }
    for(let j = 0; j < cantidad; j++)
    {
        if(array[j] > max)
        {
            max = array[j]
        }
    }
    console.log("El número más grande del array es: ", max)

}
maxDelArray()

// // Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.
console.log("Punto 19")
const dosArrays = () =>
{
    let cantidad = prompt("Diga la cantidad de números que quiere ingresar")  
    let array = [] 
    let array2 = []
    for(let i = 0; i < cantidad; i++)
    {
        array[i] = parseInt(prompt("Ingrese un número"))
        if(array[i] % 2 == 0)
        {
            array2.push(array[i])
        }
    }
    console.log("El nuevo array es: ", array2)
}
dosArrays()

// // Dado un array de números, escribir una función que retorne la suma de todos los números del array.
console.log("Punto 20")
let array = [8, 10, 9, 3]
const sumarElementos = (arreglo) =>
{
    let suma = 0
    for(let i = 0; i < arreglo.length; i++)
    {
        suma += arreglo [i]
    }
    return suma
}
let resu = sumarElementos(array)
console.log("La suma entre los elementos del arreglo es: ", resu)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.
console.log("Punto 21")
let frase = ['Hola', 'soy', 'Martona', ':D']
const arrayDeStrings = (frase) =>
{
    let mayuFrase = []
    for (let i = 0; i < frase.length; i++) {
        mayuFrase[i] = frase[i].toUpperCase()
    }
    return mayuFrase
}
let arreglito = arrayDeStrings(frase)
console.log("El nuevo arreglo es: ", arreglito)

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.
console.log("Punto 22")
let unArreglo = [6, -8, 12, 4, 3, 9, 1]
let numero = 2
const mayorAX = (arreglo, numero) =>
{
    let finalArrgelo = []
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] > numero)
        {
            finalArrgelo.push(arreglo[i])
        }
    }
    return finalArrgelo
}
let arregloFinal = mayorAX(unArreglo, numero)
console.log("El nuevo arreglo es: ", arregloFinal)

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".
console.log("Punto 23")
let otroArreglo = [15, 27, 8, 21, 0, 10, 1]
const sumarYAgregar = (arreglo) =>
{
    let suma = 0
    
    for(let i = 0; i < arreglo.length; i++)
    {
        suma += arreglo[i]
    }
    return suma
}
let arreglote = []
for(let i = 0; i < otroArreglo.length; i++)
    {
        if(otroArreglo[i] > 10)
        {
            arreglote.push(otroArreglo[i])
        }
    }
let suma = sumarYAgregar(otroArreglo)
console.log("La suma entre los elementos del arreglo es: ", suma)
console.log("El arreglo de números grandes es: ", arreglote)


// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.
console.log("Punto 24")
let nuevoArray = ['Quiero', 'que', 'sea', 'navidad', 'yaaaaa']
const masDeCinco = (arreglo) =>
{
    let arreglo2 = []
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i].length > 5)
        {
            arreglo2.push(arreglo[i])
        }
    }
    return arreglo2
}
let res = masDeCinco(nuevoArray)
console.log("EL nuevo array es: ", res)

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".
console.log("Punto 25")
let nuevoNuevoArray = ['chango', 'avestruz', 'apocalipsis', 'dentista', 'auto', 'energía', 'avión', 'tenaza', 'azucar']
const masDeCincoYEmpiezaConA = (arreglo) =>
{
    let arreglo2 = []
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i].length > 5 && (arreglo[i].startsWith("a") || arreglo[i].startsWith("A")))
        {
            arreglo2.push(arreglo[i])
        }
    }
    return arreglo2
}
let arreglazo = masDeCincoYEmpiezaConA(nuevoNuevoArray)
console.log("El nuevo array es: ", arreglazo)

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.
console.log("Punto 26")
let arrayNumeros = [5, 2, 6, 11, 0, 8, 8, 4]
const mayorAXPT2 = (arreglo) =>
{
    let arreglo2 = []
    let num = 4
    for(let i = 0; i < arreglo.length; i++)
    {
        if(arreglo[i] > num)
        {
            arreglo2.push(arreglo[i])
        }
    }
    return arreglo2
}
let resultado = mayorAXPT2(arrayNumeros)
console.log("El nuevo arreglo es: ", resultado)
resultado.splice(3, 5)
console.log("Eliminamos elementos hasta dejar los primeros 3: ", resultado)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.
console.log("Punto 27")
const sumar1 = (arreglo) =>
{
    for(let i = 0; i < arreglo.length; i++)
    {
        arreglo[i]++
    }
    return arreglo
}
let arregloSumado = sumar1(arrayNumeros)
console.log("EL nuevo arreglo es: ", arregloSumado)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.
console.log("Punto 28")
const eliminar = (arreglo) =>
{
    arreglo.pop()
    return arreglo
}
let arregloEliminado = eliminar(arrayNumeros)
console.log("EL nuevo arreglo es: ", arregloEliminado)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.
console.log("Punto 29")
const eliminarPT2 = (arreglo) =>
{
    arreglo.pop()
    arreglo.shift()
    return arreglo
}
let arregloEli = eliminarPT2(arrayNumeros)
console.log("EL nuevo arreglo es: ", arregloEli)

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.
console.log("Punto 30")
let x = 3
const eliminarX = (arreglo, num) =>
{
    arreglo.splice(num, 1)
}
eliminarX(arrayNumeros, x)
console.log("El nuevo arreglo es: ", arrayNumeros)