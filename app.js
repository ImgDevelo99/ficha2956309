// Obtener elementos del DOM
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const contactsList = document.getElementById('contactsList');
const searchInput = document.getElementById('search');

// Lista de contactos
let contacts = [];

// Función para agregar un nuevo contacto
function addContact() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (name && phone && email) {
        const contact = { name, phone, email };//crea un objeto
        contacts.push(contact);//añada en objeto al final del arreglo contacs
        renderContacts();//Actualiza para mostrar la lista de contactos actualizada. 
        clearInputs();//Limpia los campos de entrada del formulario,
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Función para limpiar los campos de entrada
function clearInputs() {
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
}

// Función para renderizar la lista de contactos
function renderContacts() {
    contactsList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td class="actions">
                <button onclick="editContact(${index})">Editar</button>
                <button onclick="deleteContact(${index})">Eliminar</button>
            </td>
        `;
        contactsList.appendChild(row);
    });
}
// Función para editar un contacto
function editContact(index) {
    const contact = contacts[index];
    nameInput.value = contact.name;
    phoneInput.value = contact.phone;
    emailInput.value = contact.email;
    deleteContact(index);
}
// Función para eliminar un contacto
function deleteContact(index) {
    contacts.splice(index, 1);//para eliminar un solo elemento
    renderContacts();
}

// Función para buscar contactos por nombre
function searchContact() {
    const query = searchInput.value.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(query));
    renderFilteredContacts(filteredContacts);
}

// Función para renderizar la lista filtrada de contactos
function renderFilteredContacts(filteredContacts) {
    contactsList.innerHTML = '';
    filteredContacts.forEach((contact, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td class="actions">
                <button onclick="editContact(${index})">Editar</button>
                <button onclick="deleteContact(${index})">Eliminar</button>
            </td>
        `;
        contactsList.appendChild(row);
    });
}
