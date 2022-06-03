const makeCase = function(input, cases) {
  let result = input;
  let styles = [];

  if (Array.isArray(cases)) {
    for (let selectStyle of cases) {
      styles.push(selectStyle);
    }
  } else styles.push(cases);

  for (let style of styles) {
    switch (style) {
    case "camel": result = camelCase(result);
      break;
    case 'pascal': result = pascalCase(result);
      break;
    case 'snake': result = snakeCase(result);
      break;
    case 'kebab': result = kebabCase(result);
      break;
    case 'title': result = titleCase(result);
      break;
    case 'vowel': result = vowelCase(result);
      break;
    case 'consonant': result = consonantCase(result);
      break;
    case 'upper': result = result.toUpperCase();
      break;
    case 'lower': result = result.toLowerCase();
    }
  }
  return result;
};

const camelCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
};

const pascalCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index == 0 ? word.toUpperCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
};

const snakeCase = (input) =>{
  return input.replace(/\s+/g, "_");
};

const kebabCase = (input) =>{
  return input.replace(/\s+/g, "-");
};

const titleCase = (input) =>{
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index == 0 ? word.toUpperCase() : word.toUpperCase();
  });
};

const vowelCase = (input) =>{
  return input.replace(/[aeiouAEIOU]/g, (word) => word.toUpperCase());
};

const consonantCase = (input) =>{
  return input.replace(/[^aeiouAEIOU]/g, (word) => word.toUpperCase());
};

console.log(makeCase("THIS IS A STRING", ['lower', 'snake']));

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake", "vowel", "camel"]));