// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}
Pizza.prototype.addSize = function (size) {
  this.size = size;

}
Pizza.prototype.costForSize = function() {
  if(this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 10;
  } else if (this.size === "large") {
    this.cost += 12;
  };
  
  console.log(this.size);
}

function displayPrice(pizza) {
  var price = pizza.cost + pizza.size;
  $("#result").html(price);
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
    var newPizza = new Pizza(size, toppings)
    newPizza.costForSize();
    displayPrice(newPizza);
    console.log(selectedSize, toppings);
  });
});