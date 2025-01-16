function handleAddContact(contact) {
  contact = contact.value
  if (!contact) return

  renderContacts(contactPhoneModel.contact)
}
