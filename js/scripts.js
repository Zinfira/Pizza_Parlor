// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}


Pizza.prototype.calculateCost = function() {
  
  if (this.size === "Small") {
    this.cost = 8;
  } else if (this.size === "Medium") {
    this.cost = 10;
  } else if (this.size === "Large") {
    this.cost = 12;
  }
  if (this.toppings.includes("Cheese")) {
    this.cost += 1;
  }
  if (this.toppings.includes("Pepperoni")) {
    this.cost +=2;
  }
  if (this.toppings.includes("Sausage")) {
    this.cost +=3;
  }
  if (this.toppings.includes("Chicken")) {
    this.cost +=3;
  }
  if (this.toppings.includes("Anchovy")) {
    this.cost +=2;
  }
  if (this.toppings.includes("Artichoke")) {
    this.cost +=2;
  }
  if (this.toppings.includes("Mushrooms")) {
    this.cost +=2;
  }
  if (this.toppings.includes("Pepper")) {
    this.cost +=2;
  }
  if (this.toppings.includes("Onions")) {
    this.cost +=1;
  }
  if (this.toppings.includes("Caramelized onions")) {
    this.cost +=2;
  } 
  
  
  //console.log(this.cost);
  return this.cost;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

// UI Logic
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("input:radio[name=size]:checked").val();
    
    var selectedToppings = [];
    var newPizza = new Pizza(selectedSize, selectedToppings)
    newPizza.calculateCost();
    $("input:checkbox[name=toppings]:checked").each(function() {
      var pizzasToppings = $(this).val();
      newPizza.addTopping(pizzasToppings);
      
    });
    
   
    $(".show-pizza").show();
    $("#order").hide();
    //console.log(selectedSize, selectedToppings);
    $(".pizzaSize").text(selectedSize);
    $(".showTops").text(selectedToppings.join(", "));
    $(".price").html(newPizza.calculateCost());

    
  });
  
});