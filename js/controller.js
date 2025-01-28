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

function handleFavorite(contactId) {
  contactModel.markFavoriteById(+contactId)
  contactModel.getFavorites()

  renderFavorites()
}

renderContacts(contactModel.contacts)
