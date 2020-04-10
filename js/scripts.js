// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}


Pizza.prototype.calculateCost = function() {
  
  if (this.size === "small") {
    this.cost += 8;
  } else if (this.size === "medium") {
    this.cost += 10;
  } else if (this.size === "large") {
    this.cost += 12;
  };
  if (this.toppings.includes("cheese")) {
    this.cost += 1;
  };
  if (this.toppings.includes("pepperoni")) {
    this.cost +=2;
  };
  if (this.toppings.includes("sausage")) {
    this.cost +=3;
  };
  if (this.toppings.includes("chicken")) {
    this.cost +=3;
  };
  if (this.toppings.includes("anchovy")) {
    this.cost +=2;
  };
  if (this.toppings.includes("artichoke")) {
    this.cost +=2;
  };
  if (this.toppings.includes("mushrooms")) {
    this.cost +=2;
  };
  if (this.toppings.includes("pepper")) {
    this.cost +=2;
  };
  if (this.toppings.includes("onions")) {
    this.cost +=1;
  };
  if (this.toppings.includes("caramel-onions")) {
    this.cost +=2;
  };
  
  console.log(this.cost);
};





Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
}






// UI Logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("input:radio[name=size]:checked").val();
    
    var selectedToppings = [];
    var newPizza = new Pizza(selectedSize, selectedToppings)
    $("input:checkbox[name=toppings]:checked").each(function() {
      var pizzasToppings = $(this).val();
      newPizza.addTopping(pizzasToppings);
      
    });
    
   
    
    //console.log(selectedSize, selectedToppings);
    (".total").html(newPizza.calculateCost());
  });
  
});