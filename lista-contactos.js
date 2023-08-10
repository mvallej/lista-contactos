let contacts= [{nombre: "Maria", edad: 15},{nombre: "Carlos", edad: 26},{nombre: "Carolina", edad: 28}];
const addContact= (contact) => {
    console.log(contacts.push(contact))
    return contacts.push()
}
addContact({nombre: "Camila", edad: 21});
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
