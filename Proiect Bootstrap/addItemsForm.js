// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Admin Console
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <form id="addPhone">
      <div class="form-group">
        <label for="formGroupExampleInput"></label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nume" name="phoneName">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Pret" name="phonePrice">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="An aparitie" name="phoneRelease">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Adaugat" name="phoneAdded">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Imagine" name="phonePic">
      </div>
          <input type="submit" class="btn btn-warning" value="Adauga telefon">
      </form>
  </div>
</div>
`;


function addFormFunctionality() {

  function addPhone(name, price, release, added, pic) {
    const phones = APP.getPhones();

    phones.push({
      name: name,
      price: price,
      release: release,
      added: added,
      pic: pic
    });

    APP.addPhones(phones);

    APP.renderPhoneList(phones);
  }

  const form = document.querySelector('#addPhone');
  form.onsubmit = function (event) {

    event.preventDefault();

    const name = event.target.phoneName.value;
    const price = Number(event.target.phonePrice.value);
    const release = event.target.phoneRelease.value;
    const added = dateAdded();
    const pic = event.target.phonePic.value;

    addPhone(name, price, release, added, pic);
  }
}


window.addEventListener('load', addFormFunctionality);