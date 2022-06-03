const makeCase = function(input, cases) {
  if (cases.constructor !== Array) {
    cases = cases.split();
  }
  let order = {camel: 1, pascal :2 , snake: 3, kebab: 4, title: 5, vowel: 6, consonant: 7, upper: 8, lower: 9};
  cases.sort(function(a, b) {
    return order[a] - order[b];
  });
  console.log(cases);
  
  for (let loopedCase of cases) {
    switch (loopedCase) {
    case "camel": input = input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, i) {
      return i === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, ""); break;
    case 'snake': input = input.replace(/\s+/g, "_"); break;
    case 'kebab': input = input.replace(/\s+/g, "-"); break;
    case 'pascal': input = input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, i) {
      return i === 0 ? word.toUpperCase() : word.toUpperCase();
    }).replace(/\s+/g, ""); break;
    case 'title': input = input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, i) {
      return i === 0 ? word.toUpperCase() : word.toUpperCase();
    }); break;
    case 'vowel': input = input.replace(/[aeiouAEIOU]/g, (word) => word.toUpperCase()); break;
    case 'consonant': input = input.replace(/[^aeiouAEIOU]/g, (word) => word.toUpperCase()); break;
    case 'upper': input = input.toUpperCase(); break;
    case 'lower': input = input.toLowerCase();
    }
  } return input;
 
};
// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "kebab", "vowel",'lower', "snake" ]));
// console.log(makeCase("this is a string", "upper"));