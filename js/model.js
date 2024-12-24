const contactPhoneModel = {
  contacts: [],
  favorites: [],
  recentCalls: [],
  blockedPhones: [],
  editContact: {},
  currentId: 101,

  addContact(contact) {
    this.currentId++
    if (!contact.firstName || !contact.secondName || !contact.phone) return
    // explain mutation contact
    const createdContact = Object.assign({ id: this.currentId }, contact)
    this.contacts.push(createdContact)
  },

  updateContactById(id, contact) {
    const existingContact = this.contacts.find(contact => contact.id === id)

    if (!existingContact) return

    existingContact.firstName = contact.firstName || existingContact.firstName
    existingContact.secondName =
      contact.secondName || existingContact.secondName
    existingContact.phone = contact.phone || existingContact.phone
  },

  markFavoriteById(id) {
    const contact = this.contacts.find(contact => contact.id === id)
    if (!contact) return

    const isFavoriteContact = this.favorites.some(
      favorite => favorite.id === id
    )
    if (!isFavoriteContact) {
      this.favorites.push(contact)
    }
  },

  searchContact(query) {
    return this.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
        contact.secondName.toLowerCase().includes(query.toLowerCase()) ||
        contact.phone.includes(query)
    )
  },

  removeContactById(id) {
    this.removeContactFromAllLists(id)
  },

  removeContactFromAllLists(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
    this.favorites = this.favorites.filter(favorite => favorite.id !== id)
    this.recentCalls = this.recentCalls.filter(call => call.id !== id)
    this.blockedPhones = this.blockedPhones.filter(block => block.id !== id)
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

// contactPhoneModel.removeContactById(contactPhoneModel.contacts[0].id)
// console.log(contactPhoneModel.contacts)

contactPhoneModel.markFavoriteById(contactPhoneModel.contacts[0].id)
console.log(contactPhoneModel.favorites)

contactPhoneModel.updateContactById(104, {
  firstName: 'Мария',
  phone: '0442467222',
})

console.log(contactPhoneModel.contacts)

const searchResults = contactPhoneModel.searchContact('Ирина')
console.log(searchResults)

contactPhoneModel.addToBlockedList(contactPhoneModel.contacts[0].id)
console.log(contactPhoneModel.blockedPhones)

contactPhoneModel.removeContactFromAllLists(contactPhoneModel.contacts[0].id)
console.log(contactPhoneModel.blockedPhones)
