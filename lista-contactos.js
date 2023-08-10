let contacts = ["Maria Restrepo", "Carlos Gomez", "Carolina Guzman"];
const addContact = (contact) => {
  console.log(contacts.push(contact));
  return contacts.push();
};
addContact("Camila Rodriguez");
console.log(contacts);

const deleteContact = (a, b) => {
  console.log(contacts.splice(a, b));
  return contacts;
};
console.log(deleteContact(contacts.length - 1, 1));

const imprimeContacts = () => {
  return contacts;
};

console.log(imprimeContacts());
