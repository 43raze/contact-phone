// const elUlRecentCalls = document.querySelector('#app-recent-calls')
// const elInputSearch = document.querySelector('#search')
const elAAddContact = document.querySelector('#appAddContact')
// const elUlDetailContacts = document.querySelector('.contact')

//* Listeners
elAAddContact.addEventListener('click', onClickAddContact)
// elUlDetailContacts.addEventListener('click', onClickLiContactDetail)

function onClickLiContactDetail(e) {
  const contactId = e.currentTarget.getAttribute('contact-id')
  handleDetailContact(contactId)
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

//* Renders
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

  elH5FullName.textContent = contact.firstName + ' ' + contact.secondName
  elBPhone.textContent = contact.phone
  if (contact.isFavorite) {
    elSpanFavorite.classList.remove('non-fill')
  } else {
    elSpanFavorite.classList.add('non-fill')
  }
}

// function renderFavoriteContact(contacts) {
//   const elDivFavorites = document.querySelector('#app-favorites')
//   elDivFavorites.innerHTML = ''

//   contacts.forEach(contact => {
//     const elContactFavorite = generateFavoriteContact(contact)
//     elDivFavorites.innerHTML += elContactFavorite
//   })
// }

// Generators

function generateContact({ id, firstName, secondName }) {
  return `
<li
  onclick="onClickLiContactDetail(event)"
  contact-id="${id}"
  href="#modal2"
  class="contact modal-trigger collection-item transparent waves-effect">
  <div class="container">
    <div class="row valign-wrapper">
      <div class="col s4">
        <span
          class="teal darken-1 teal-text text-lighten-4 pic circle center-align material-symbols-outlined"
          >person</span
        >
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

// function generateFavoriteContact({ firstName, secondName, phone }) {
//   return `
//   <div class="col s6 m4 l3 xl2">
//   <div class="card-panel teal lighten-2 waves-effect waves-light">
//     <div class="center-align">
//       <span class="transparent teal-text text-lighten-5 pic center-align material-symbols-outlined">
//         person
//       </span>
//     </div>
//     <span class="white-text">
//       ${firstName} ${secondName}
//     </span>

//     <p class="white-text">
//       ${phone}
//     </p>
//   </div>
// </div>
// `
// }
