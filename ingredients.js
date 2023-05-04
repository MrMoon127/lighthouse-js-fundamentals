const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let y = 0;
while (y < ingredients.length) {
  console.log(ingredients[y])
  y++;
}

// Write a for loop that prints out the contents of ingredients:
for (let x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let z = ingredients.length - 1; z >= 0; z--) {
  console.log(ingredients[z]);
}