function onClickFAB() {
  renderModal1ContactAdding()
}

function onClickConfirmAddContact() {
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

function onClickConfirmUpdateContact() {
  const firstName = document.querySelector('#firstName').value.trim()
  const secondName = document.querySelector('#secondName').value.trim()
  const phone = document.querySelector('#phone').value.trim()
  const elModal1 = document.querySelector('#modal1')
  const contactId = elModal1.getAttribute('contact-id')
  const contact = {
    firstName,
    secondName,
    phone,
  }

  handleUpdateContactById(contactId, contact)

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

function onClickSpanOpenModalUpdate() {
  const elModal2 = document.querySelector('#modal2')
  const contactId = elModal2.getAttribute('contact-id')

  handleOpenContactForUpdating(contactId)
}

function onClickInputSearch(e) {
  const inputSearchValue = e.target.value

  handleFindContact(inputSearchValue)
}

function onClickRecentCall(e) {
  const elLi = e.currentTarget
  const phone = elLi.querySelector('span')

  handleAddRecentCall(phone.textContent)
}
