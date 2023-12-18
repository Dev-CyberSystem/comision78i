//Tarea

// ○ Nos piden realizar una agenda telefónica de contactos.
// ○ Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// ○ Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).
// ○ Las funciones serán:
// ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
// agenda no puede almacenar mas contactos indicar por pantalla.
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no.
// ■ listarContactos(): Lista toda la agenda
// ■ buscarContacto(nombre): busca un contacto por su nombre y muestra
// su teléfono.
// ■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
// si se ha eliminado o no por pantalla
// ■ agendaLlena(): indica si la agenda está llena.
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar.
// ○ Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos




class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre,
        this.telefono = telefono
    }
}

class Agenda{
    constructor(tamaño = 10){
        this.tamaño = tamaño,
        this.contacto = []
    }

    
    existeContacto(nombre){
        return this.contacto.some(contacto => contacto.nombre === nombre)
    }
    
    añadirContacto(nombre, telefono){
        if(!this.agendaLlena()){
            if(!this.existeContacto(nombre)){
                const nuevoContacto = new Contacto(nombre, telefono)
                this.contacto.push(nuevoContacto)
                this.guardarContacto()
                return true
            }else{
                console.log("Contacto existente")
                return false
            }
        }
        else{
            console.log("Agenda llena")
            return false
        }
    }
    
    
    buscarContacto(nombre){
        const existe = (this.contacto.some(contacto => contacto.nombre === nombre))
        if(existe){
            console.log(`El contacto ${nombre} existe`)
        }
        else{
            console.log(`El contacto ${nombre} no existe`)
        }
        return true
    }
    
    listarContactos(nombre, telefono){
        this.contacto.forEach(contacto => {
            console.log(`Nombre: ${contacto.nombre} - Telefono ${contacto.telefono}`)
        });
    }
    
    eliminarContacto(nombre){
        const index = this.contacto.findIndex(contacto => contacto.nombre === nombre)
        if(index !== -1){
            this.contacto.splice(index, 1)
            this.guardarContacto()
            console.log(`El contacto ${nombre} se elimino de la agenda`)
            return true
        }
        else{
            console.log(`El contacto ${nombre} no existe`)
            return false
        }
    }
    
    guardarContacto(){
        localStorage.setItem("contactos", JSON.stringify(this.contacto));
    }
    
    agendaLlena(){
        return (this.tamaño <= this.contacto.length)
    }
    
    huecosLibres(){
        return this.tama - this.contacto.length
    }
}


const agenda = new Agenda()

agenda.añadirContacto("Javier", "381-440-1527")
agenda.añadirContacto("Federico", "381-502-5212")
agenda.añadirContacto("Gero", "385-420-9167")
agenda.añadirContacto("Jo", "381-237-7262")

// console.log("Agenda actual")
// agenda.listarContactos()

// console.log("Buscar contactos en la agenda")
// agenda.buscarContacto("Javier")

// console.log("agrego un contacto que ya existe Jo , 381-237-7262 ")
// agenda.añadirContacto("Jo", "381-237-7262")

console.log("Elimino un contacto")
agenda.eliminarContacto("Federico")

console.log("Agenda actual")
agenda.listarContactos()

