var subtotal = (13 + 1) * 5;	// Shipping is 70 
var shippng = 0.5 * (13 + 1);	// Shipping is 7 

var total = subtotal + shipping;// Total is 77

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal; 

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;
