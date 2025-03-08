const contactModel = {
  contacts: [],
  recentCalls: [],
  currentId: 101,

  addContact(contact) {
    const requiredProps = ['firstName', 'secondName', 'phone']
    const isCorrect = requiredProps.every(prop => !!contact[prop])
    if (!isCorrect) return
    const createdContact = Object.assign({ id: this.currentId++ }, contact)
    createdContact.isFavorite = false
    this.contacts.push(createdContact)
  },

  getContactById(id) {
    return this.contacts.find(contact => contact.id === id)
  },

  updateContactById(id, contact) {
    delete contact.id
    const foundContact = this.getContactById(id)
    if (foundContact) Object.assign(foundContact, contact)
  },

  markFavoriteById(id) {
    this.updateContactById(id, { isFavorite: true })
  },

  unmarkFavoriteById(id) {
    this.updateContactById(id, { isFavorite: false })
  },

  getFavorites() {
    return this.contacts.filter(contact => contact.isFavorite)
  },

  removeContactById(id) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  },

  addToBlockedList(id) {
    const contact = this.getContactById(id)
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

  findContacts(query) {
    if (!query || typeof query !== 'string') return []

    const lowerCaseQuery = query.toLowerCase()

    return this.contacts.filter(
      contact =>
        contact.firstName.toLowerCase().includes(lowerCaseQuery) ||
        contact.secondName.toLowerCase().includes(lowerCaseQuery) ||
        contact.phone.includes(lowerCaseQuery) ||
        (contact.firstName + ' ' + contact.secondName)
          .toLowerCase()
          .includes(lowerCaseQuery)
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

// console.log('Контакты после добавления:', contactModel.contacts)

// contactModel.markFavoriteById(101)
// console.log('Избранные контакты:', contactModel.getFavorites())

// console.log(contactModel.contacts)

// contactModel.addRecentCall({
//   phone: '0442467214',
// })

// console.log(contactModel.recentCalls)
