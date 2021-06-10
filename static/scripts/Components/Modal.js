function modalComponent(id,title,icon,content){
	let component = 
	`
	<div class="modal fade" id="${id}">
		<div class="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
			<div class="modal-content">

			  <!-- Modal Header -->
			  <div class="modal-header">
			    <h4 class="modal-title text-dark">
			    ${title}
			    <span class="iconify" data-inline="false" data-icon="${icon}"></span>
				</h4>
			    <button type="button" class="close" data-dismiss="modal">&times;</button>
			  </div>

			  <!-- Modal body -->
			  <div class="modal-body p-4">
				${content}
			  </div>
			</div>
		</div>
	</div>
	`;
	return component;
}