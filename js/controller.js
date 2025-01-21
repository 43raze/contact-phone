function handleAddContact(contact) {
  contactModel.addContact(contact)
  renderContacts(contactModel.contacts)
}

function handleDetailContact() {
  contactModel.getContactById(contact.id)
  renderModal2DetailContact(contactModel.contacts)
}

renderContacts(contactModel.contacts)
// renderFavoriteContact(contactModel.contacts)
