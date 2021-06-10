function listOfPayments(){
	let component = 
	`
	<section id="table-list-of-payments">
		<table class="table table-hover table-sm table-bordered mb-4">
		    <tbody>
		      <tr>
		        <th class="w-25">Name:</th>
		        <td class="text-center">Jezreel Dalde</td>
		      </tr>
		      <tr>
		        <th class="w-25">Mode of Payment:</th>
		        <td class="text-center">Gcash</td>
		      </tr>
		      <tr>
		        <th class="w-25">Amount:</th>
		        <td class="text-center">Php 7,995.00</td>
		      </tr>
		    </tbody>
		</table>
	</section>
	<section class="p-2 mt-2">
		<div class="text-center p-2"><h5>Add information:</h5></div>
		<form id="add-list-of-payments-form">
		  <div class="form-group">
		    <label for="add-list-of-payment-name">Name:</label>
		    <input type="text" class="form-control" placeholder="Enter name" name="add-list-of-payment-name">
		  </div>
		  <div class="form-group">
		    <label for="add-list-of-payment-mode">Mode of Payment:</label>
		    <input type="text" class="form-control" placeholder="Enter mode of payment" name="add-list-of-payment-mode">
		  </div>	
		  <div class="form-group">
		    <label for="add-list-of-payment-amount">Amount:</label>
		    <input type="text" class="form-control" placeholder="Enter amount" name="create-inventory-colorway">
		  </div>    
		  <div class="text-right">
		  	<button type="button" class="btn btn-outline-success" onclick="addListOfPayment()">Confirm</button>
		  </div>
		</form>
	</section>
	`;
	return component;
}

function addListOfPayment(){
	let formValues = $("#add-list-of-payments-form").serializeArray();
	let name = formValues[0]['value'];
	let mode = formValues[1]['value'];
	let amount = formValues[2]['value'];
	let output = 
	`
	<table class="table table-hover table-sm table-bordered mb-4">
	    <tbody>
	      <tr>
	        <th class="w-25">Name:</th>
	        <td class="text-center">${name}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Mode of Payment:</th>
	        <td class="text-center">${mode}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Amount:</th>
	        <td class="text-center">${amount}</td>
	      </tr>
	    </tbody>
	</table>
	`;
	$(`#table-list-of-payments`).append(output);
	document.getElementById("add-list-of-payments-form").reset();
}