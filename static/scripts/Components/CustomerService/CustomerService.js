function customerService(){
	let component =
	`
	<form id="customer-service-form">
	  <div class="form-group">
	    <label for="customer-service-email">Email:</label>
	    <input type="email" class="form-control" placeholder="Enter email" name="customer-service-email">
	  </div>
	  <div class="form-group">
	    <label for="customer-service-contact-number">Contact number:</label>
	    <input type="text" class="form-control" placeholder="Enter size" name="customer-service-contact-number">
	  </div>	
	  <div class="form-group">
	    <label for="customer-service-concerns">Concerns/Issues:</label>
	    <textarea class="form-control" rows="5" name="customer-service-concerns" placeholder="Enter concerns/issues"></textarea>
	  </div>
	  <div class="text-right">
	  	<button type="button" class="btn btn-outline-success" onclick="confirmCustomerService()">Confirm</button>
	  </div>
	</form>
	`;
	return component;
}

function confirmCustomerService(){
	alert('Issues submitted');
	document.getElementById("customer-service-form").reset();

}