const contactPhoneModel = {
  contacts: [],
  recentCalls: [],
  blockedPhones: [],
  currentId: 101,

  addContact(contact) {
    if (!contact.firstName || !contact.secondName || !contact.phone) return
    contact.isFavorite = false
    const createdContact = Object.assign({ id: this.currentId++ }, contact)
    this.contacts.push(createdContact)
  },

  updateContactById(id, contact) {
    const foundContact = this.contacts.find(contact => contact.id === id)
    if (!foundContact) return
    delete contact.id
    Object.assign(foundContact, contact)
  },

  markFavoriteById(id) {
    const contact = this.contacts.find(contact => contact.id === id)
    if (!contact) return
    contact.isFavorite = true
  },

  getFavorites() {
    return this.contacts.filter(contact => contact.isFavorite)
  },

  removeContactById(id) {
    this.removeContactFromAllLists(id)
  },

  removeContactFromAllLists(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
    this.recentCalls = this.recentCalls.filter(call => call.id !== id)
  },

  addToBlockedList(id) {
    const contact = this.contacts.find(contact => contact.id === id)
    if (!contact) return

    const isBlocked = this.blockedPhones.some(blocked => blocked.id === id)
    if (!isBlocked) {
      this.blockedPhones.push(contact)
    }
  },
}

contactPhoneModel.addContact({
  firstName: 'Иван',
  secondName: 'Иванов',
  phone: '0442467214',
})

contactPhoneModel.addContact({
  firstName: 'Мария',
  secondName: 'Сергеевна',
  phone: '0442467215',
})

contactPhoneModel.addContact({
  firstName: 'Ирина',
  secondName: 'Васильевна',
  phone: '0442467216',
})

console.log(contactPhoneModel.contacts)

contactPhoneModel.updateContactById(103, {
  firstName: 'Мария',
  phone: '0442467222',
})

console.log(contactPhoneModel.contacts)

contactPhoneModel.markFavoriteById(103)
contactPhoneModel.getFavorites(103)

console.log(contactPhoneModel.contacts)
