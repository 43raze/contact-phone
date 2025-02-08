function onClickFab() {
  renderModal1AddContact()
}

function onClickAddContact() {
  const firstName = document.querySelector('#firstName').value.trim()
  const secondName = document.querySelector('#secondName').value.trim()
  const phone = document.querySelector('#phone').value.trim()

  const contact = {
    firstName,
    secondName,
    phone,
  }

  handleAddContact(contact)

  document.querySelector('#firstName').value = ''
  document.querySelector('#secondName').value = ''
  document.querySelector('#phone').value = ''
}

function onClickLiContactDetail(e) {
  const contactId = e.currentTarget.getAttribute('contact-id')
  handleDetailContact(contactId)
}

function onClickRemoveContact() {
  const elModal2 = document.querySelector('#modal2')
  const contactId = elModal2.getAttribute('contact-id')
  handleRemoveContact(contactId)
}

function onClickSpanAddToFavorite(e) {
  const elModal2 = document.querySelector('#modal2')
  const contactId = elModal2.getAttribute('contact-id')
  const hasNonFill = e.target.classList.contains('non-fill')

  if (hasNonFill) {
    handleMarkAsFavorite(contactId)
  } else {
    handleUnMarkAsFavorite(contactId)
  }
}

function onClickSpanOpenModalUpdate(e) {
  const elModal1 = document.querySelector('#modal1')
  const contactId = e.currentTarget.getAttribute('contact-id')
  elModal1.setAttribute('contact-id', contactId)

  const firstName = document.querySelector('#firstName').value.trim()
  const secondName = document.querySelector('#secondName').value.trim()
  const phone = document.querySelector('#phone').value.trim()

  const updateContact = { firstName, secondName, phone }

  handleUpdateContact(contactId, updateContact)

  document.querySelector('#firstName').value = ''
  document.querySelector('#secondName').value = ''
  document.querySelector('#phone').value = ''
}

// Renders
function renderContacts(contacts) {
  const elContacts = document.querySelector('#app-contacts')
  elContacts.innerHTML = ''

  contacts.forEach(contact => {
    const elContact = generateContact(contact)
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

function renderFavorites(contacts) {
  const elFavorites = document.querySelector('#app-favorites')
  elFavorites.innerHTML = ''

  contacts.forEach(contact => {
    const elFavorite = generateFavorite(contact)
    elFavorites.innerHTML += elFavorite
  })
}

function renderModal1AddContact() {
  const elModal1 = document.querySelector('#modal1')
  const elH5Title = elModal1.querySelector('h5')
  const elSpanButton = elModal1.querySelector('span')
  const elAAddContact = document.querySelector('#appAddContact')

  elH5Title.textContent = 'Добавить конткат'
  elSpanButton.textContent = 'Добавить'

  elAAddContact.addEventListener('click', onClickAddContact)
}

function renderModal1UpdateContact(contact) {
  const elModal1 = document.querySelector('#modal1')
  const elH5Title = elModal1.querySelector('h5')
  const elInputFirstName = elModal1.querySelector('#firstName')
  const elInputSecondName = elModal1.querySelector('#secondName')
  const elInputPhone = elModal1.querySelector('#phone')
  const elSpanButton = elModal1.querySelector('span')
  const elAAddContact = document.querySelector('#appAddContact')

  elH5Title.textContent = 'Редактировать контакт'
  elSpanButton.textContent = 'Редактировать'

  elModal1.setAttribute('contact-id', contact.id)

  elInputFirstName.value = `${contact.firstName}`
  elInputSecondName.value = `${contact.secondName}`
  elInputPhone.value = `${contact.phone}`

  elAAddContact.addEventListener('click', onClickFab)
}

// Generators

function generateContact({ id, firstName, secondName }) {
  return `
  <li
    onclick="onClickLiContactDetail(event)"
    contact-id="${id}" href="#modal2"
    class="contact modal-trigger collection-item transparent waves-effect">
    <div class="container">
      <div class="row valign-wrapper">
        <div class="col s4">
          <span class="teal darken-1 teal-text text-lighten-4 pic circle center-align material-symbols-outlined">
            person
          </span>
        </div>

        <div class="col s4">
          <span class=""><b>${firstName} ${secondName}</b></span>
        </div>

        <div class="col s4">
          <span class="badge new">phone</span>
        </div>
      </div>
    </div>
  </li>
`
}

function generateFavorite({ firstName, secondName }) {
  return `
  <div class="favorite col s6 m4 l3 xl2">
  <div class="card-panel teal lighten-2 waves-effect waves-light">
    <div class="center-align">
      <span class="transparent teal-text text-lighten-5 pic center-align        material-symbols-outlined">
        person
      </span>
    </div>

    <span class="white-text">
      ${firstName} ${secondName}
    </span>
  </div>
</div>
`
}
