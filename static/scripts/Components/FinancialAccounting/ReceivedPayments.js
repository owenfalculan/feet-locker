function receivedPayments(){
	let component = 
	`
	<section id="table-received-payments">
		<table class="table table-hover table-sm table-bordered mb-4">
		    <tbody>
		      <tr>
		        <th class="w-25">Name:</th>
		        <td class="text-center">Jezreel Dalde</td>
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
		<form id="add-received-payments-form">
		  <div class="form-group">
		    <label for="add-received-payment-name">Name:</label>
		    <input type="text" class="form-control" placeholder="Enter name" name="add-received-payment-name">
		  </div>
		  <div class="form-group">
		    <label for="add-received-payment-amount">Amount:</label>
		    <input type="text" class="form-control" placeholder="Enter amount" name="add-received-payment-amount">
		  </div>    
		  <div class="text-right">
		  	<button type="button" class="btn btn-outline-success" onclick="addReceivedPayment()">Confirm</button>
		  </div>
		</form>
	</section>
	`;
	return component;
}

function addReceivedPayment(){
	let formValues = $("#add-received-payments-form").serializeArray();
	let name = formValues[0]['value'];
	let amount = formValues[1]['value'];
	let output = 
	`
	<table class="table table-hover table-sm table-bordered mb-4">
	    <tbody>
	      <tr>
	        <th class="w-25">Name:</th>
	        <td class="text-center">${name}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Amount:</th>
	        <td class="text-center">${amount}</td>
	      </tr>
	    </tbody>
	</table>
	`;
	$(`#table-received-payments`).append(output);
	document.getElementById("add-received-payments-form").reset();
}