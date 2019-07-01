class Phone {

	constructor(name, price, release, added, pic) {
		this.name = name;
		this.price = price;
		this.release = release;
		this.added = added;
		this.pic = pic;
	}

	renderPhone() {
		const phoneList = document.querySelector('#phone-list');
		phoneList.innerHTML += `
		<div class="card" style="width: 18rem;">
			<img src=${this.pic} class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">${this.name}</h5>
					<p class="card-text">Pret: <strong>${this.price}</strong></p>
					<p class="card-text">An aparitie:<strong> ${this.release}</strong></p>
					<p class="card-text">Adaugat: <strong>${this.added}</strong></p>
				</div>
		</div>
		`;
	}
}

// <div class="card" style="width: 18rem;">
//   <img src=${this.pic} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${this.name}</h5>
// 	<p class="card-text">Pret: <strong>${this.price}</strong></p>
// 	<p class="card-text">An aparitie:<strong> ${this.release}</strong></p>
// 	<p class="card-text">Adaugat: <strong>${this.added}</strong></p>
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>