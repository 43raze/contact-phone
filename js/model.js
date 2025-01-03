const contactPhoneModel = {
  contacts: [],
  // favorites: [],
  recentCalls: [],
  blockedPhones: [],
  currentId: 101,

  addContact(contact) {
    if (!contact.firstName || !contact.secondName || !contact.phone) return
    delete contact.id
    const createdContact = Object.assign({ id: this.currentId++ }, contact)
    contact.isFavorite = false
    this.contacts.push(createdContact)
  },

  updateContactById(id, contact) {
    const findedContact = this.contacts.find(contact => contact.id === id)
    if (!findedContact) return
    delete contact.id
    Object.assign(findedContact, contact)
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

  markFavoriteById(id) {
    const contact = this.contacts.find(contact => contact.id === id)
    if (!contact) return
    contact.isFavorite = true
  },

  getFavorites() {
    return this.contacts.filter(contact => contact.isFavorite)
  },

  searchContact(query) {
    const lowerQuery = query.toLowerCase()

    return this.contacts.filter(contact => {
      return (
        contact.firstName.toLowerCase().includes(lowerQuery) ||
        contact.secondName.toLowerCase().includes(lowerQuery) ||
        contact.phone.includes(query)
      )
    })
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

contactPhoneModel.updateContactById(103, {
  firstName: 'Мария',
  phone: '0442467222',
})

console.log(contactPhoneModel.editContact)

// const searchResultsByName = contactPhoneModel.searchContact('Ирина')
// console.log(searchResultsByName)
// console.log(contactPhoneModel.filteredContacts)

contactPhoneModel.addToBlockedList(contactPhoneModel.contacts[0].id)
console.log(contactPhoneModel.blockedPhones)

contactPhoneModel.removeContactFromAllLists(contactPhoneModel.contacts[0].id)
console.log(contactPhoneModel.blockedPhones)
