// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}


Pizza.prototype.calculateCost = function() {
  if(this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 10;
  } else if (this.size === "large") {
    this.cost += 12;
  } 
  console.log(this.cost);
}





Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(toppings)
}






// UI Logic
$(document).ready(function() {
  $("form#order-pizza").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("input:radio[name=size]:checked").val();
    
    var selectedToppings = [];
    var newPizza = new Pizza(selectedSize, selectedToppings)
    $("input:checkbox[name=toppings]:checked").each(function() {
      var pizzaToppings = $(this).val();
      newPizza.addTopping(pizzaToppings);
      
    });
    
   
    
    console.log(selectedSize, toppings);
    (".total").html(newPizza.calculateCost());
  });
  
});