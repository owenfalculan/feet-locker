function createInventory(){
	let component = 
	`
	<form id="create-inventory-form">
	  <div class="form-group">
	    <label for="create-inventory-product-brand-info">Product Brand Info:</label>
	    <input type="text" class="form-control" placeholder="Enter product brand info" name="create-inventory-product-brand-info">
	  </div>
	  <div class="form-group">
	    <label for="create-inventory-size">Size:</label>
	    <input type="text" class="form-control" placeholder="Enter size" name="create-inventory-size">
	  </div>	
	  <div class="form-group">
	    <label for="create-inventory-colorway">Colorway:</label>
	    <input type="text" class="form-control" placeholder="Enter colorway" name="create-inventory-colorway">
	  </div>    
	  <div class="form-group">
	    <label for="create-inventory-quantity">Quantity:</label>
	    <input type="text" class="form-control" placeholder="Enter quantity" name="create-inventory-quantity">
	  </div>   
	  <div class="form-group">
	    <label for="create-inventory-price">Price:</label>
	    <input type="text" class="form-control" placeholder="Enter price" name="create-inventory-price">
	  </div>  
	  <div class="text-right">
	  	<button type="button" class="btn btn-outline-success" onclick="addInventory()">Confirm</button>
	  </div>
	</form>
	`;
	return component;
}

let inventoryListDetails = {

}

function addInventory(){
	let formValues = $("#create-inventory-form").serializeArray();
	let productBrandInfo = formValues[0]['value'];
	let size = formValues[1]['value'];
	let colorway = formValues[2]['value'];
	let quantity = parseInt(formValues[3]['value']);
	let price = formValues[4]['value'];
	let component = 
	`
	<div class="card mb-4">
	  <div class="card-header text-center">${productBrandInfo}</div>
	  <div class="card-body">
	   <table class="table table-bordered table-sm table-hover">
	    <tbody>
	      <tr>
	        <th class="w-25">Size:</th>
	        <td class="text-center">${size}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Colorway:</th>
	        <td class="text-center">${colorway}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Quantity:</th>
	        <td class="text-center">${quantity}</td>
	      </tr>
	      <tr>
	        <th class="w-25">Price:</th>
	        <td class="text-center">${price}</td>
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
	document.getElementById("create-inventory-form").reset();

	if(productBrandInfo in inventoryListDetails){
		if(!(inventoryListDetails[productBrandInfo]['size'].includes(size))){
			inventoryListDetails[productBrandInfo]['size'].push() = size;
		}
		if(!(inventoryListDetails[productBrandInfo]['colorway'].includes(colorway))){
			inventoryListDetails[productBrandInfo]['colorway'].push() = colorway;
		}
		inventoryListDetails[productBrandInfo]['quantity'] += quantity;

	}else{
		inventoryListDetails[productBrandInfo] = {
			'size' : [size],
			'colorway' : [colorway],
			'quantity' : quantity
		}
	}
	let updatedStockList = updateStocksList(inventoryListDetails);
	if($(`#stocks-list > .empty-stock-list`).length !== 0){
		$(`#stocks-list > .empty-stock-list`).remove();
	}
	$(`#stocks-list`).html(updatedStockList);
}

function updateStocksList(obj){
	let output = ``;
	$.each( obj, function( key, value ) {
		console.log(value);
	  let section =
	  `	
		 <div class="card mb-4">
		  <div class="card-header text-center">${key}</div>
		  <div class="card-body">
		   <table class="table table-bordered table-sm table-hover">
		    <tbody>
		      <tr>
		        <th class="w-25">Size:</th>
		        <td class="text-center">${value['size'].join(', ')}</td>
		      </tr>
		      <tr>
		        <th class="w-25">Colorway:</th>
		        <td class="text-center">${value['colorway'].join(', ')}</td>
		      </tr>
		      <tr>
		        <th class="w-25">Quantity:</th>
		        <td class="text-center">${value['quantity']}</td>
		      </tr>
		    </tbody>
		   </table>
		  </div>
		</div>
	 `;
	 output+=section;
	});
	return output;
}