// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
  this.totalCost = totalCost;
}

Pizza.prototype.addSize = function(size) {
  if(this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 10;
  } else if (this.size === "large") {
    this.cost += 12;
  };
  console.log(this.cost)
}












// UI Logic
$(document).ready(function() {
  $("#order-pizza").submit(function(event) {
    event.preventDefault();
    // var toppings = [];
    // $("input:checkbox[name=toppings]:checked").each(function() {
    //   var pizzaToppings = $(this).val();
    //   toppings.push(pizzaToppings);
    });
  });
// });