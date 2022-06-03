const camelCase = function(input) {
  // input.split('');replace(/ /g,'')

  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let checker = input[i];
    if (checker === " ") {
      checker = input[i + 1].toUpperCase(); i = i + 1;
    }
    answer = answer + checker;
   
  }
  return answer;

};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


