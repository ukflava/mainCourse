// let recipes2 = '';
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let k = 0; k < recipes.length; k++) {
    let recipes2 = Object.values(recipes[k].ingredients);
    const found = bakeryA.some(r=> recipes2.includes(r));
    const found2 = bakeryB.some(r=> recipes2.includes(r));
    if (found2 === true && found === true) {
      return recipes[k].name;
    }
  }
};





let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// bakeryA = ['potatoes', 'bay leaf', 'raisins'];
// bakeryB = ['red bean', 'dijon mustard', 'apples', 'dijon mustard'];
// recipes = [
//     {
//         name: 'Potato Ganache',
//         ingredients: ['potatoes', 'chocolate']
//     },{
//       name: 'Potato Gasdhe',
//       ingredients: ['potatoes', 'chocolate']
//   },{
//     name: 'Potato snache',
//     ingredients: ['potatoes', 'chocolate']
// },{
//   name: 'Potato Ganache',
//   ingredients: ['potatoes', 'chocolate']
// },{
//   name: '0101011000',
//   ingredients: ['bay leaf', 'apples']
// },{
//   name: 'Potato Gadsdshe',
//   ingredients: ['potatoes', 'chocolate']
// },
//     {
//         name: 'Sweet Fish',
//         ingredients: ['anchovies', 'honey']
//     },
//     {
//         name: "Nima's Famous Dijon Raisins",
//         ingredients: ['dijon musdsdsdd', 'raisins']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

