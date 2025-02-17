function handleAddContact(contact) {
  contactModel.addContact(contact)
  renderUlContacts(contactModel.contacts)
}

function handleUpdateContactById(id, contact) {
  contactModel.updateContactById(+id, contact)
  renderUlContacts(contactModel.contacts)
}

function handleDetailContact(contactId) {
  const contact = contactModel.getContactById(+contactId)
  renderModal2DetailContact(contact)
}

function handleRemoveContact(contactId) {
  contactModel.removeContactById(+contactId)
  renderUlContacts(contactModel.contacts)
  renderDivFavorites(contactModel.getFavorites())
}

function handleMarkAsFavorite(contactId) {
  contactModel.markFavoriteById(+contactId)
  const favorites = contactModel.getFavorites()
  renderDivFavorites(favorites)
}

function handleUnMarkAsFavorite(contactId) {
  contactModel.unmarkFavoriteById(+contactId)
  const unmarkFavorites = contactModel.getFavorites()
  renderDivFavorites(unmarkFavorites)
}

function handleOpenContactForUpdating(contactId) {
  const contact = contactModel.getContactById(+contactId)
  renderModal1ContactUpdating(contact)
}

renderUlContacts(contactModel.contacts)
