function contactList() {
    ulContact.innerHTML = ""; 
  
    listaContactos.forEach(contacto => {
      const li = document.createElement("li");
      li.textContent = `Nombre: ${contacto._name}, Teléfono: ${contacto._phone}`;
      ulContact.appendChild(li);
    });
  }
  
  contactList();

  function eliminarContacto(nombre) {
    listaContactos = listaContactos.filter(contacto => contacto._name !== nombre);
    contactList();
  }

  btnSearch.addEventListener("click", e => {
    e.preventDefault();
    const filter = inputfindName.value.toLowerCase().trim();
    const contact = listaContactos.find(contacto => contacto._name === filter);
  
    if (contact) {
      console.log(contact._phone);
    } else {
      console.log("Contacto no encontrado");
    }
  
    formFind.reset();
  });
  
  
  