function saludar(){
    const nombre = prompt("Por favor, ingresa tu nombre:")
    const genero = prompt("Ingresa m) si sos hombre o f) si sos mujer:")
    switch (genero.toLowerCase()) {
        case "m":
            console.log("Hola " + nombre + ", que facha que estas!")
            break;
        case "f":
            console.log("Hola " + nombre + ", que linda que estas!")
            break;
        default:
            console.log("Que onda " + nombre)
            break;
    }
   
}

saludar()   