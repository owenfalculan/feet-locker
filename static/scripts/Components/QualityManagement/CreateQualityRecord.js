function createQualityRecord(){
	let component =
	`
	 <form id="create-quality-record-form">
	  <div class="form-group">
	    <label for="create-quality-record-product-brand-info">Product Brand Info:</label>
	    <input type="text" class="form-control" placeholder="Enter product brand info" name="create-quality-record-product-brand-info">
	  </div>
	  <div class="form-group">
	    <label for="create-quality-record-size">Size:</label>
	    <input type="text" class="form-control" placeholder="Enter size" name="create-quality-record-size">
	  </div>	
	  <div class="form-group">
	    <label for="create-quality-record-colorway">Colorway:</label>
	    <input type="text" class="form-control" placeholder="Enter colorway" name="create-quality-record-colorway">
	  </div>    
	  <div class="form-group">
	    <label for="create-quality-record-quantity">Quantity:</label>
	    <input type="text" class="form-control" placeholder="Enter quantity" name="create-quality-record-quantity">
	  </div>   
	  <div class="form-group">
	    <label for="create-quality-record-price">Quality:</label>
	    <input type="text" class="form-control" placeholder="Enter quality" name="create-quality-record-quality">
	  </div>  
	  <div class="text-right">
	  	<button type="button" class="btn btn-outline-success" onclick="addQualityRecord()">Confirm</button>
	  </div>
	</form>
	`;
	return component;
}

function addQualityRecord(){
	let formValues = $("#create-quality-record-form").serializeArray();
	let productBrandInfo = formValues[0]['value'];
	let size = formValues[1]['value'];
	let colorway = formValues[2]['value'];
	let quantity = parseInt(formValues[3]['value']);
	let quality = formValues[4]['value'];
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
	        <th class="w-25">Quality:</th>
	        <td class="text-center">${quality}</td>
	      </tr>
	    </tbody>
	   </table>
	  </div>
	</div>
	`;
	if($(`#quality-records > .empty-quality-records`).length === 0){
		$(`#quality-records`).append(component);
	}else{
		$(`#quality-records`).html(component);
	}
	document.getElementById("create-quality-record-form").reset();
}