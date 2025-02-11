function onClickFAB() {
  renderModal1ContactAdding()
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
  console.log(contactId)

  const updateContact = { firstName, secondName, phone }

  handleUpdateContact(contactId, updateContact)

  document.querySelector('#firstName').value = ''
  document.querySelector('#secondName').value = ''
  document.querySelector('#phone').value = ''
}
