$(`main`).append(modalComponent('create-inventory-modal', 'Create Inventory', 'ic:baseline-inventory', createInventory()));
$(`main`).append(modalComponent('inventory-list-modal', 'Inventory List', 'ic:round-inventory', inventoryList()));
$(`main`).append(modalComponent('create-purchase-order-modal', 'Create Purchase Order', 'bx:bxs-purchase-tag-alt', createPurchaseOrder()));
$(`main`).append(modalComponent('create-shipments-modal', 'Create Shipments', 'ic:baseline-local-shipping', createShipments()));
$(`main`).append(modalComponent('material-used-modal', 'Material Used in Product', 'file-icons:service-fabric', materialUsed()));
$(`main`).append(modalComponent('create-routing-modal', 'Create Routing', 'fa-solid:route', createRouting()));
$(`main`).append(modalComponent('monitor-stocks-modal', 'Monitor Stocks', 'vaadin:stock', monitorStocks()));
$(`main`).append(modalComponent('create-quality-record-modal', 'Create Quality Record', 'ic:baseline-create-new-folder', createQualityRecord()));
$(`main`).append(modalComponent('display-quality-record-modal', 'Display Quality Record', 'vaadin:records', displayQualityRecord()));
$(`main`).append(modalComponent('list-of-payments-modal', 'List of Payments', 'fa-solid:clipboard-list', listOfPayments()));
$(`main`).append(modalComponent('incoming-payments-modal', 'Incoming Payments', 'mdi:email-receive', incomingPayments()));
$(`main`).append(modalComponent('received-payments-modal', 'Received Payments', 'ri:user-received-2-fill', receivedPayments()));
$(`main`).append(modalComponent('customer-service-modal', 'Customer Service', 'ri:customer-service-fill', customerService()));


function handleBoxHover(element){
	$(element).css('box-shadow','0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
	$(element).find('.iconify').css('color', 'var(--info)');
}

function handleBoxUnhover(element){
	$(element).css('box-shadow','unset');
	$(element).find('.iconify').css('color', 'var(--dark)');
}

