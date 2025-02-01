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

function handleMarkAsFavorite(contactId) {
  contactModel.markFavoriteById(+contactId)
  const favorites = contactModel.getFavorites()

  renderFavorites(favorites)
}

function handleMarkAsFavorite(contactId) {
  const contact = contactModel.getContactById(+contactId)
  if (!contact) return

  if (contact.isFavorite) {
    contactModel.unmarkFavoriteById(+contactId)
  } else {
    contactModel.markFavoriteById(+contactId)
  }

  renderFavorites(contactModel.getFavorites())
}

renderContacts(contactModel.contacts)
