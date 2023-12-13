class Agenda{
    constructor(tamanio=10){
        this.tamanio = tamanio;
        this.contactos = [];
    }
    addContacto(contacto){
        if(this.agendaLlena()){
            return console.log("Cantidad maxima de contactos alcanzada, no se pudo almacennar")
        }
        if(this.existeContacto(contacto)){
            return console.log("El contacto ya existe")
        }
        this.contactos.push(contacto)
        let libres = this.huecosLibres();
        return console.log("Contacto añadido, quedan: " + libres + " lugares en la agenda")
    }
    existeContacto(contacto){
        let existe = false;
        this.contactos.forEach(element => {
            if(element.nombre === contacto.nombre){
                existe = true;
            }
        });
        if(existe) return console.log("el contacto ya existe")
        return console.log("el contacto no existe")
    }
    listarContactos(){
        return console.log(this.contactos);
    }
    huecosLibres(){
        let libres = this.tamanio - this.contactos.length;
        return libres;
    }
    agendaLlena(){
        if(this.contactos.length === this.tamanio) return true;
    }
    buscarContacto(nombre){
        let contacto = null;
        this.contactos.forEach(item => {
            if(item.nombre === nombre){
                contacto = item;
            }
        });
        return console.log(contacto);
    }
    eliminarContacto(contacto){
        let existe = false;
        this.contactos.forEach(element => {
            if(element.nombre === contacto.nombre){
                this.contactos.splice(this.contactos.indexOf(element), 1);
                existe = true;
            }
        });
        if(existe) return console.log("el contacto ha sido eliminado")
        return console.log("el contacto no existe")
    }
    guardarAgenda(){
        localStorage.setItem('contactos', JSON.stringify(this.contactos));
    }
    recuperarAgenda(){
        return JSON.parse(localStorage.getItem('contactos'))
    }
    vaciarAgenda(){
        localStorage.removeItem('contactos');
        return console.log("Agenda vacia")
    }
}

class Contacto{
    constructor(nombre,telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

const contacto1 = new Contacto('matias', '3704632110')
const contacto2 = new Contacto('diego', '3704632111')
const contacto3 = new Contacto('jose', '3704632112')

const agenda = new Agenda();
agenda.addContacto(contacto1)
agenda.addContacto(contacto2)
agenda.addContacto(contacto3)
agenda.listarContactos();
agenda.guardarAgenda();
let newContactos = agenda.recuperarAgenda()

console.log(newContactos)

agenda.buscarContacto("matias")
agenda.existeContacto(contacto1)
agenda.eliminarContacto(contacto1)