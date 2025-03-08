function generateLiContact({ id, firstName, secondName }) {
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

function generateDivFavorite({ firstName, secondName }) {
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

function generateLiFind({ firstName, secondName, phone }) {
  return `
    <li class="collection-item avatar">
      <i class="material-icons circle green">assessment</i>
      <span class="title">${firstName} ${secondName}</span>
      <p>${phone}</p>
      <a href="#!" class="secondary-content">
        <i class="material-icons">phone</i>
      </a>
    </li>
  `
}

function generateRecentCall({ phone, timecall }) {
  const seconds = ((Date.now() - timecall) / 1000).toFixed(0)

  return `
  <li class="recent-call waves-effect collection-item avatar transparent z-depth-1">
    <i class="material-icons circle teal darken-3">person</i>
    <span class="title"><b>${phone}</b></span>
    <p>
      <i>${seconds} секунд назад</i>
    </p>
    <a href="#!" class="secondary-content">
      <i class="material-icons">phone</i>
    </a>
  </li>
  `
}
