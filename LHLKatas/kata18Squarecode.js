const squareCode = function(message) {
  let text = message.replace(/\s/g, '');
  let counted = (Math.ceil(Math.sqrt(text.length)));
  let result = ""; let answer = [];
  
  do {
    answer.push(text.slice(0, counted));
  }
  while ((text = text.slice(counted, text.length)));
  
  for (let i = 0; i < counted; i++) {
    result += answer.map(s => s[i]) + " ";
  }
  let finalRes = result.replace(/,/g, "").toString();
  
  return finalRes;
};
  
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
  
// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
  