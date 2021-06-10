function materialUsed(){
	let component = 
	`
	<ul class="materials-used list-group">
	  <li class="list-group-item">Action Leather</li>
	  <li class="list-group-item">Fabric</li>
	</ul>
	<div class="d-flex mt-4">
	  <div class="form-group flex-grow-1">
	    <input type="text" class="form-control" placeholder="Enter material" id="add-materia-used">
	  </div>
	  <div>
	  	<button type="button" class="btn btn-danger ml-2" onclick="addMaterial()">Add material</button>
	  </div>
	</div>
	`;
	return component;
}

function addMaterial(){
	let material = $(`#add-materia-used`).val();
	$(`.materials-used.list-group`).append(`<li class="list-group-item">${material}</li>`);
	$(`#add-materia-used`).val('');
}