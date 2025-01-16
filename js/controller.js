function handleAddContact(contact) {
  contactPhoneModel.addContact(contact)
  renderContacts(contactPhoneModel.contacts)
}

renderContacts(contactPhoneModel.contacts)
