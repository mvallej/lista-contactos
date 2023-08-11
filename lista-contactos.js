let contacts = ["Maria Restrepo", "Carlos Gomez", "Carolina Guzman"];
const addContact = (contact) => {
  console.log(contacts.push(contact));
  return contacts.push();
};
addContact("Camila Rodriguez");
console.log(contacts);

const deleteContact = (nombre) => {
  const contactosActualizados = contacts.filter((name)=> { 
    if (name !== nombre) {return name
    }
  })
  // console.log(contacts.splice(a, b));
  return contactosActualizados;
};
console.log(deleteContact("Carlos Gomez"));

const imprimeContacts = () => {
  return contacts;
};

console.log(imprimeContacts());
