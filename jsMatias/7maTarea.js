const listaUsuario = document.querySelector('.lista-usuarios');

const obtenerUsuarios = async () => {
    try{
        let respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        let usuarios = await respuesta.json()
        console.log(usuarios[0])
        usuarios.forEach(usuario => {
        const li = document.createElement('li')
        listaUsuario.appendChild(li)
        let info = document.createElement('p')
        info.textContent = `
            Name: ${usuario.name}
            \nEmail: ${usuario.email}
            \nTel: ${usuario.phone}
            \nAddress: ${usuario.address.street} - ${usuario.address.city}
        `
        li.appendChild(info)
        // for(let i = 1; i < Object.keys(usuario).length; i++){
        //     let parr = document.createElement('p')
        //     if(Object.keys(usuario)[i] == 'address'){
        //         console.log(Object.values(Object.keys(usuario)[i] == 'address'))
        //     }
        //     parr.textContent = `
        //         ${Object.keys(usuario)[i]} : ${Object.values(usuario)[i]}
        //     `
        //     li.appendChild(parr)
        // }
        })
        // });
    }catch(err){
        console.log(err)
    }
}   
obtenerUsuarios()