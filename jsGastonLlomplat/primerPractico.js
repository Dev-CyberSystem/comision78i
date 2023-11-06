// Crear Variables con let y const
// Variables con tipos de datos: Number, String, Boolean
// Usar la consola, Usar script en html.
// Tienen que tener un index.html y un archivo .js
// Nombres de los archivos primerPractico.js

function saludo () {
    let nombre = prompt("Ingresa tu nombre")
    console.log(`Tu nombre es: ${nombre}`)
    let edad = parseInt(prompt("Ingresa tu edad"))
    console.log(`Tu edad es: ${edad} años`)
    let broma =""
    if (edad > 40) {
        broma = "¡Estas viejito/a!"
    }
    else {
        broma = "¡Sos joven/a!"
    }
    alert(`¡Hola ${nombre}! Tu edad es de ${edad} años. ${broma}`);
}

saludo()

function perimetroCircunferencia () {
    const PI = 3.1415
    let radio = parseInt(prompt("Ingrese el radio de la circunferencia (cm)"))
    console.log(`El radio de circunferencia es de ${radio} cm`)
    let perimetro = (2 * PI * radio).toFixed(2)
    alert(`El perímetro de la circunferencia es de ${perimetro} cm`)
}

perimetroCircunferencia()
