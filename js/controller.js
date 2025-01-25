function handleAddContact(contact) {
  contactModel.addContact(contact)
  renderContacts(contactModel.contacts)
}

function handleDetailContact(contactId) {
  const contact = contactModel.getContactById(+contactId)
  renderModal2DetailContact(contact)
}

function handleRemovelContact(contactId) {
  contactModel.removeContactById(+contactId)
  renderContacts(contactModel.contacts)
}

renderContacts(contactModel.contacts)
// renderFavoriteContact(contactModel.contacts)
