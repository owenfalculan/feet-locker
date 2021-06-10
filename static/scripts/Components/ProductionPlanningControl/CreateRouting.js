function createRouting(){
	let component = 
	`
	<form id="create-routing-form">
	  <h3 class="text-center p-3 text-dark">Shipment Route</h3>	
	  <div class="form-group">
	    <label for="create-routing-point-a">Point A:</label>
	    <input type="text" class="form-control" placeholder="Enter point a" name="create-routing-point-a">
	  </div>
	  <div class="form-group">
	    <label for="create-routing-point-b">Point B:</label>
	    <input type="text" class="form-control" placeholder="Enter point b" name="create-routing-point-b">
	  </div>	
	  <div class="form-group">
	    <label for="create-routing-point-c">Point C:</label>
	    <input type="text" class="form-control" placeholder="Enter colorway" name="create-routing-point-c">
	  </div>    
	  <div class="text-right">
	  	<button type="button" class="btn btn-outline-success" onclick="confirmRouting()">Confirm</button>
	  </div>
	</form>
	`;
	return component;
}

function confirmRouting(){
	document.getElementById("create-routing-form").reset();
	alert('Shipment delivery confirmed');
}