var add = function(number1, number2) {
  return number1 + number2;
};

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(add)(number1,number2);
// alert("it is even number");
// }
// else{
// ("it is a odd number");
// }
// var cafe = prompt("whatdo you want to be served?")
// if(cafe==coffee){
// alert("welcome");
// }
// else if (cafe==tea){
// alert("it is available");
// // }
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);
//
// var subtract=function (number1, number2){
//  return number1 - number2;
// };
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter a number"));
// var result = subtract(number1, number2);
// alert(result);
//
// var multiply= function(number1, number2) {
//  return number1 * number2;
// };
// var number1 = parseInt(prompt("Enter number"));
// var number2=parseInt(prompt("Enter number"));
// var result = multiply(number1, number2);
// alert(result);
// var division= function(number1,number2){
//   return number1 / number2;
// };
// var number1 = parseInt(prompt("Enter a number"));
// var number2 = parseInt(prompt("Enter a number"));
// var result = division(number1,number2);
// // alert(result);
// $(document).ready(function() {
//  var number1 = parseInt(prompt("Enter a number:"));
//  var number2 = parseInt(prompt("Enter another number:"));
//  alert(add(number1, number2));
// });
// $("#add1").val();
// $("#add2").val();
// $(document).ready(function() {
// $("form#add").submit(function(event) {
// event.preventDefault();
// var number1 = parseInt($("#add1").val());
// var number2 = parseInt($("#add2").val());
// alert(add(number1, number2));
// });
// });
var add = function(number1, number2) {
return number1 + number2;
};
var subtract = function(number1, number2) {
return number1 - number2;
};
var multiply = function(number1, number2) {
return number1 * number2;
};
var divide = function(number1, number2) {
return number1 / number2;
};

$(document).ready(function() {
$("form#add").submit(function(event) {
event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
var result = add(number1, number2);
$("#output").text(result);
});
});
