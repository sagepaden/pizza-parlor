// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function() {
  let cost = 0;

  switch (this.size) {
    case "small":
      cost += 8;
      break;
    case "medium":
      cost += 10;
      break;
    case "large":
      cost += 12;
      break;
  }
  this.toppings.forEach(function(topping) {
    switch (topping) {
      case "cheese":
        cost += 1;
        break;
      case "pepperoni":
        cost += 2;
        break;
      case "pineapple":
        cost += 1;
        break;
      case "jalapeno":
        cost += 1;
        break;
      case "anchovy":
        cost += 4;
        break; 
    }
  });
  return cost;
};

// UI Logic

function onlyOneCheckBox() {
  const checkboxgroup = document.querySelectorAll('.user-topping-selection input[type="checkbox"]');
  const limit = 2;
  let checkedcount = 0;

  for (let i = 0; i < checkboxgroup.length; i++) {
    checkboxgroup[i].addEventListener("change", function() {
      if (this.checked) {
        checkedcount++;
      } else {
        checkedcount--;
      }
      if (checkedcount > limit) {
        this.checked = false;
        checkedcount--;
      }
    });
  }
}

document.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedSize = document.querySelector('input[name="ui-pizza-size"]:checked').value;
  const selectedToppings = [];
  const checkboxes = document.querySelectorAll('.user-topping-selection input[type="checkbox"]');
  for (let i = 0; i< checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedToppings.push(checkboxes[i].value);
    }
  }
  const myPizza = new Pizza(selectedToppings, selectedSize);
  document.getElementById("user-total").innerText = "Your order total is $" + myPizza.calculateCost();
});

document.addEventListener("DOMContentLoaded", function() {
  onlyOneCheckBox();
});
