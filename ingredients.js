var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let num = 0;
while (num < ingredients.length) {
  console.log(ingredients[num]);
  num++;
}

for (num = 0; num < ingredients.length; num++){
  console.log(ingredients[num]);
}
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[ingredients.length-1-i]);
  i++;
}