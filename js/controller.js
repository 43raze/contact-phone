function handleAddContact(contact) {
  contactModel.addContact(contact)
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

function handleUpdateContact(contactId, contact) {
  const updateContact = contactModel.getContactById(+contactId)
  contactModel.updateContactById(updateContact, contact)
  console.log(updateContact)

  renderModal1ContactUpdating(updateContact)
}

renderUlContacts(contactModel.contacts)
