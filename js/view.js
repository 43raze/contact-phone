const elDivFavorites = document.querySelector('#app-favorites')
const elUlRecentCalls = document.querySelector('#app-recent-calls')
const elInputSearch = document.querySelector('#search')
const elAAddContact = document.querySelector('#appAddContact')

//* Listeners
elAAddContact.addEventListener('click', onClickAddContact)

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

function renderFavorites(favorites) {}
function renderRecentCalls(recentCalls) {}
function renderFindeContact(contacts) {}

function renderModal2DetailContact(contact) {
  const elModal2 = document.querySelector('#modal2')
  const elH5FullName = elModal2.querySelector('h5')
  const elBPhone = elModal2.querySelector('span.title> b')
  elH5FullName.textContent = contact.firstName + ' ' + contact.secondName
  elBPhone.textContent = contact.phone
}

//* Generators
function generateContact({ firstName, secondName }) {
  return `
<li
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
function generateFavorites(params) {}
function generateRecentCalls(params) {}
function generateFindeContactt(params) {}
