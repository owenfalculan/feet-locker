function createPurchaseOrder(){
	let component = 
	`
	<form id="create-purchase-order-form">
	  <div class="form-group">
	    <label for="create-purchase-order-purchased-date">Purchased Date:</label>
	    <input type="text" class="form-control" placeholder="Enter purchased date" name="create-purchase-order-purchased-date">
	  </div>
	  <div class="form-group">
	    <label for="create-purchase-order-product-brand-info">Product Brand Info:</label>
	    <input type="text" class="form-control" placeholder="Enter product brand info" name="create-purchase-order-product-brand-info">
	  </div>
	  <div class="form-group">
	    <label for="create-purchase-order-size">Size:</label>
	    <input type="text" class="form-control" placeholder="Enter size" name="create-purchase-order-size">
	  </div>	
	  <div class="form-group">
	    <label for="create-purchase-order-colorway">Colorway:</label>
	    <input type="text" class="form-control" placeholder="Enter colorway" name="create-purchase-order-colorway">
	  </div>    
	  <div class="form-group">
	    <label for="create-purchase-order-quantity">Quantity:</label>
	    <input type="text" class="form-control" placeholder="Enter quantity" name="create-purchase-order-quantity">
	  </div>   
	  <div class="form-group">
	    <label for="create-purchase-order-price">Price:</label>
	    <input type="text" class="form-control" placeholder="Enter price" name="create-purchase-order-price">
	  </div>  
	  <div class="text-right">
	  	<button type="button" class="btn btn-outline-success" onclick="confirmPurchaseOrder()">Confirm</button>
	  </div>
	</form>
	`;
	return component;
}


function confirmPurchaseOrder(){
	let formValues = $("#create-purchase-order-form").serializeArray();
	let productBrandInfo = formValues[1]['value'];
	let details = [formValues[2]['value'], formValues[3]['value'], formValues[4]['value'], formValues[5]['value']];
	let counter = 0;
	$(`#inventory-list .card`).each((index, card)=>{
		let cardHeader = $(card).find('.card-header').text();
		if(cardHeader===productBrandInfo){
			let falseCounter = 0;
			$(card).find('td').each((index, td)=>{
				if($(td).text()!==details[index]){
					falseCounter++;
				}
			});		
			if(falseCounter===0){
				$(card).remove();
				counter++;
			}
		}
	});
	if(counter===0){
		alert('Product not found!');
	}
	if($(`#inventory-list .card`).length===0){
		$(`#inventory-list`).html(`<p class="text-center text-danger empty-inventory-list">Inventory list is empty.</p>`);
	}
	document.getElementById("create-purchase-order-form").reset();
}