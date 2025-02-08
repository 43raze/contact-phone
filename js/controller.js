function handleAddContact(contact) {
  contactModel.addContact(contact)
  renderContacts(contactModel.contacts)
}

function handleDetailContact(contactId) {
  const contact = contactModel.getContactById(+contactId)
  renderModal2DetailContact(contact)
}

function handleRemoveContact(contactId) {
  contactModel.removeContactById(+contactId)
  renderContacts(contactModel.contacts)
  renderFavorites(contactModel.getFavorites())
}

function handleMarkAsFavorite(contactId) {
  contactModel.markFavoriteById(+contactId)
  const favorites = contactModel.getFavorites()

  renderFavorites(favorites)
}

function handleUnMarkAsFavorite(contactId) {
  contactModel.unmarkFavoriteById(+contactId)
  const unmarkFavorites = contactModel.getFavorites()

  renderFavorites(unmarkFavorites)
}

function handleUpdateContact(contactId, contact) {
  const updateContact = contactModel.getContactById(+contactId)
  contactModel.updateContactById(updateContact, contact)
  console.log(updateContact)

  renderModal1UpdateContact(updateContact)
}

renderContacts(contactModel.contacts)
