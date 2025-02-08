function renderUlContacts(contacts) {
  const elContacts = document.querySelector('#app-contacts')
  elContacts.innerHTML = ''

  contacts.forEach(contact => {
    const elContact = generateLiContact(contact)
    elContacts.innerHTML += elContact
  })
}

function renderModal2DetailContact(contact) {
  const elModal2 = document.querySelector('#modal2')
  const elH5FullName = elModal2.querySelector('h5')
  const elBPhone = elModal2.querySelector('span.title > b')
  const elSpanFavorite = elModal2.querySelector('span')

  elModal2.setAttribute('contact-id', contact.id)

  elH5FullName.textContent = `${contact.firstName} ${contact.secondName}`
  elBPhone.textContent = `${contact.phone}`

  if (contact.isFavorite) {
    elSpanFavorite.classList.remove('non-fill')
  } else {
    elSpanFavorite.classList.add('non-fill')
  }
}

function renderDivFavorites(contacts) {
  const elFavorites = document.querySelector('#app-favorites')
  elFavorites.innerHTML = ''

  contacts.forEach(contact => {
    const elFavorite = generateDivFavorite(contact)
    elFavorites.innerHTML += elFavorite
  })
}

function renderModal1ContactAdding() {
  const elModal1 = document.querySelector('#modal1')
  const elH5Title = elModal1.querySelector('h5')
  const elSpanButton = elModal1.querySelector('span')
  const elAAddContact = document.querySelector('#app-modal1-confirm')

  elH5Title.textContent = 'Добавить конткат'
  elSpanButton.textContent = 'Добавить'

  elAAddContact.addEventListener('click', onClickAddContact)
}

function renderModal1ContactUpdating(contact) {
  const elModal1 = document.querySelector('#modal1')
  const elH5Title = elModal1.querySelector('h5')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elSpanButton = elModal1.querySelector('span')
  const elAAddContact = document.querySelector('#app-modal1-confirm')

  elH5Title.textContent = 'Редактировать контакт'
  elSpanButton.textContent = 'Редактировать'

  elModal1.setAttribute('contact-id', contact.id)

  elInputFirstName.value = `${contact.firstName}`
  elInputSecondName.value = `${contact.secondName}`
  elInputPhone.value = `${contact.phone}`

  elAAddContact.addEventListener('click', onClickFAB)
}
