let contacts= [{id: 76, nombre: "Maria", telefono: 15, ubicaciones: {ciudad: "Bogota", direccion: "norte"}}, {id: 85, nombre: "Carlos", telefono: 26, ubicaciones: {ciudad: "Medellin", direccion: "sur-occidente"}}, {id: 75, nombre: "Carolina", telefono: 28, ubicaciones: {ciudad:"Monteria", direccion: "noroccidente"}}];

// function add(id, nombre, telefono, ciudad, direccion) {
//   const objectUser = {
//     id,
//     nombre,
// telefono: telefono,
// ubicaciones: {ciudad, direccion}
// };
//  return contacts.push(objectUser);
// }

//  add(78, "Felix", 457473, "Bogota", "nororiente");
//  console.log(contacts);

// const deleteContact= (a,b) =>{
//     console.log(contacts.splice(a,b))
//     return contacts
// }
// console.log(deleteContact(contacts.length-1,1));

// const imprimeContacts= () =>{
//     return contacts
// }

// console.log(imprimeContacts())

function actualizarTelefono(id, tel) {
  const contactosActualizados = contacts.map((contact) => {
    if (contact.id == id) {
      return {
        ...contact,
        telefono: tel
      };
    }
  });
return contactosActualizados}


console.log(actualizarTelefono(75, 76453));
