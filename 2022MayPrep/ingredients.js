const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = (Number(ingredients.length) - 1);
while (i >= 0) {
  console.log(ingredients[i]);
  i--;
}
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// // let ingredientsCount = ingredients.length;
// for (let i = 8; i = 0; i--) {
//   console.log(ingredients[i]);
// }
i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}