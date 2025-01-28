const contactModel = {
  contacts: [],
  recentCalls: [],
  currentId: 101,

  addContact(contact) {
    if (!contact.firstName || !contact.secondName || !contact.phone) return
    contact.isFavorite = false
    const createdContact = Object.assign({ id: this.currentId++ }, contact)
    this.contacts.push(createdContact)
  },

  getContactById(id) {
    return this.contacts.find(contact => contact.id === id)
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
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  },

  addToBlockedList(id) {
    const contact = this.contacts.find(contact => contact.id === id)
    if (!contact) return

    const isBlocked = this.blockedPhones.some(blocked => blocked.id === id)
    if (!isBlocked) {
      this.blockedPhones.push(contact)
    }
  },

  addRecentCall(recentCall) {
    const findedContact = this.contacts.find(
      contact => contact.phone === recentCall.phone
    )
    recentCall.contact = findedContact ?? null
    this.recentCalls.unshift(recentCall)
  },

  findContact(query) {
    if (!query || typeof query !== 'string') return []

    const lowerCaseQuery = query.toLowerCase()

    return this.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(lowerCaseQuery) ||
        contact.secondName.toLowerCase().includes(lowerCaseQuery) ||
        contact.phone.includes(lowerCaseQuery)
    )
  },
}

contactModel.addContact({
  firstName: 'Мария',
  secondName: 'Сидорова',
  phone: '0442467214',
})

contactModel.addContact({
  firstName: 'Иван',
  secondName: 'Иванов',
  phone: '0442467215',
})

contactModel.addContact({
  firstName: 'Петр',
  secondName: 'Петров',
  phone: '0442467216',
})

console.log('Контакты после добавления:', contactModel.contacts)

contactModel.markFavoriteById(101)
console.log('Избранные контакты:', contactModel.getFavorites())
