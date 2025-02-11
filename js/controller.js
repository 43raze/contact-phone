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

function handleUpdateContact(contactId) {
  const idContact = contactModel.getContactById(+contactId)
  // contactModel.updateContactById(idContact, contact)
  console.log(idContact)

  renderModal1ContactUpdating(idContact)
}

renderUlContacts(contactModel.contacts)
