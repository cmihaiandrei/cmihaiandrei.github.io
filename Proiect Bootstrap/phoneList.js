mainPage.innerHTML += `
<div id="welcome" class="alert alert-info" role="alert">
	Bun venit pe GSM Shop!
</div>
<div id="phone-list"></div>



</div>

`;
// 
APP.renderPhoneList = (productArray) => {

	const phoneList = document.querySelector('#phone-list');
	phoneList.innerHTML = '';
	productArray.forEach((elem) => {

		phone = new Phone(elem.name, elem.price, elem.release, elem.added, elem.pic);

		phone.renderPhone();
	});
}