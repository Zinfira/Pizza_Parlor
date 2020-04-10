// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.addSize = function(size) {
  if(this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 10;
  } else if (this.size === "large") {
    this.cost += 12;
  };
  console.log(this.cost);
}












// UI Logic
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var pizzaToppings = $(this).val();
      toppings.push(pizzaToppings);
      
    });
    console.log(selectedSize, toppings);
  });
});