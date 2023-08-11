let contacts= [{ id: 76, nombre: "Maria", telefono: 15, ubicacion: "Bogota norte"},{id: 85, nombre: "Carlos", telefono: 26, ubicacion: "Medellin sur-occidente"},{id: 75, nombre: "Carolina", telefono: 28, ubicacion: "Monteria noroccidente"}];
const addContact= (contact) => {
    console.log(contacts.push(contact))
    return contacts.push()
}
addContact({id: 58, nombre: "Camila", telefono: 21,ubicacion: "Barranquilla suroccidente"});
console.log(contacts);

const deleteContact= (a,b) =>{
    console.log(contacts.splice(a,b))
    return contacts
}
console.log(deleteContact(contacts.length-1,1));


const imprimeContacts= () =>{
    return contacts
}

console.log(imprimeContacts())
