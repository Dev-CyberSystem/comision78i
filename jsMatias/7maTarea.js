const listaUsuario = document.querySelector('.lista-usuarios');

const obtenerUsuarios = async () => {
    try{
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        let usuarios = await respuesta.json()
        console.log(usuarios[0])
        console.log(typeof usuarios[0].address)
        usuarios.forEach(usuario => {
        const li = document.createElement('li')
        listaUsuario.appendChild(li)
        for(let i = 1; i < Object.keys(usuario).length; i++){
            let parr = document.createElement('p')
            parr.textContent = `${Object.keys(usuario)[i]} : ${Object.values(usuario)[i]}`
            li.appendChild(parr)
        }
        })
        // });
    }catch(err){
        console.log(err)
    }
}   
obtenerUsuarios()