function handleAddContact(contact) {
  contactModel.addContact(contact)
  renderContacts(contactModel.contacts)

  renderModal2DetailContact(contact)
}

renderContacts(contactModel.contacts)
renderFavoriteContact(contactModel.contacts)
