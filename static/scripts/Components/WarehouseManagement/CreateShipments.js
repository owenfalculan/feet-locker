function createShipments(){
	let component = 
	`
	<form id="create-shipments-form">
	  <div class="form-group">
	    <label for="create-shipments-shipping-from">Shipping From:</label>
	    <input type="text" class="form-control" placeholder="Shipping from" name="create-shipments-shipping-from">
	  </div>
	  <div class="form-group">
	    <label for="create-shipments-shipping-to">Shipping To:</label>
	    <input type="text" class="form-control" placeholder="Shipping to" name="create-shipments-shipping-to">
	  </div>	
	  <div class="form-group">
	    <label for="create-shipments-order-info">Order Info:</label>
	    <input type="text" class="form-control" placeholder="Enter order info" name="create-shipments-order-info">
	  </div>    
	  <div class="form-group">
	    <label for="create-shipments-customer-info">Customer's Info:</label>
	    <input type="text" class="form-control" placeholder="Enter customer's info" name="create-shipments-customer-info">
	  </div>   
	  <div class="form-group">
	    <label for="create-shipments-total-bill">Total Bill:</label>
	    <input type="text" class="form-control" placeholder="Enter total bill" name="create-shipments-total-bill">
	  </div>  
	  <div class="text-right">
	  	<button type="button" class="btn btn-outline-success" onclick="confirmShipment()">Confirm</button>
	  </div>
	</form>
	`;
	return component;
}

function confirmShipment(){
	let formValues = $("#create-shipments-form").serializeArray();
	let shippingFrom = formValues[0]['value'];
	let shippingTo = formValues[1]['value'];
	let orderInfo = formValues[2]['value'];
	let customersInfo = formValues[3]['value'];
	let totalBill = formValues[4]['value'];
	let component = 
	`
	<div class="card mb-4 purchased">
	  <div class="card-header text-center">${orderInfo} <span class="text-danger ml-2">(Purchased)</span></div>
	  <div class="card-body">
	   <table class="table table-bordered table-sm table-hover">
	    <tbody>
	      <tr>
	        <th class="w-25">Shipping From:</th>
	        <td class="text-center">${shippingFrom}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Shipping To:</th>
	        <td class="text-center">${shippingTo}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Customer's Info:</th>
	        <td class="text-center">${customersInfo}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Total Bill:</th>
	        <td class="text-center">${totalBill}</td>
	      </tr>
	    </tbody>
	   </table>
	  </div>
	</div>
	`;
	if($(`#inventory-list > .empty-inventory-list`).length === 0){
		$(`#inventory-list`).append(component);
	}else{
		$(`#inventory-list`).html(component);
	}
	document.getElementById("create-shipments-form").reset();
}