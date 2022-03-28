// create variable for the welcome message
var greeting = 'Howdy';
var name = 'Molly';
var message -'., please check your order:';

// concatenate the 3 variables above to create the welcome message
var welcome = greeting + name + message;

// create variables to hold details abt the sign
var sign = 'Montage House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal +shipping;

// get the element that has an id of greeting
var el = document.getElementById('greeting');
// replace the content of that  element with the personalized welcome message
el.textContent = sign;

// get 