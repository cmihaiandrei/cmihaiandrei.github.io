mainPage.innerHTML += `
<div id="welcome" class="alert alert-info" role="alert">
	Bun venit pe GSM Shop!
</div>
<div class="media">
  <img src="https://previews.123rf.com/images/houbacze/houbacze1701/houbacze170100253/69176246-red-easy-vector-illustration-isolated-paper-bubble-banner-important-this-element-is-well-adapted-for.jpg" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Important news!</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
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