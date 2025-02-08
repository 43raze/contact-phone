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
