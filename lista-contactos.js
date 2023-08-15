let contacts= [{id: 76, nombre: "Maria", telefono: 15, ubicaciones: {ciudad: "Bogota", direccion: "norte"}}, {id: 85, nombre: "Carlos", telefono: 26, ubicaciones: {ciudad: "Medellin", direccion: "sur-occidente"}}, {id: 75, nombre: "Carolina", telefono: 28, ubicaciones: {ciudad:"Monteria", direccion: "noroccidente"}}];

function add(id, nombre, telefono, ciudad, direccion) {
  const objectUser = {
    id,
    nombre,
telefono,
ubicaciones: {ciudad, direccion}
};
 return contacts.push(objectUser);

 add("78", "Felix", "457473", "Bogota", "nororiente");
 console.log(contacts);
// }
// Neider Urbano17:59
// { 
//     id: 1,
//         name: "neider",
//         mascotas: [1, 2, 3, 4, 5],
//         ubicaciones: { 
//         id: 1,
//                 nombre: "Medellin"
//         }    
// }

// const addContact= (contact) => {
//     console.log(contacts.push(contact))
//     return contacts.push()
// }
// addContact({id: 58, nombre: "Camila", telefono: 21,ubicacion: "Barranquilla suroccidente"});
// console.log(contacts);

// const deleteContact= (a,b) =>{
//     console.log(contacts.splice(a,b))
//     return contacts
// }
// console.log(deleteContact(contacts.length-1,1));

// const imprimeContacts= () =>{
//     return contacts
// }

// console.log(imprimeContacts())





// function add(id, name, apellido, ubicacion) {
//   const objectUser = {
//     id: id,
//     name: name,
//   };
//   arrayContacts.push(objectUser);
// }
// Neider Urbano17:59
// { 
//     id: 1,
//         name: "neider",
//         mascotas: [1, 2, 3, 4, 5],
//         ubicaciones: { 
//         id: 1,
//                 nombre: "Medellin"
//         }    
// }

// function actualizarNombre(id, nuevoNombre, ubicaciones) {
//   const contactosactualizados = contacts.map((contact) => {
//     if (contact.id == id) {
//       return {
//         ...contact,
//         ubicaciones: ubicaciones,
//       };
//     }
//   });
// }
