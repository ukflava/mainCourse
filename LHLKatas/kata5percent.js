const urlEncode = function(text) {
  let text2 = ""; for (let letter of text.trim()) {
    if (letter === " ") {
      letter = "%20";
      text2 += letter;
    } else {
      text2 += letter;
    }
  }
  return text2;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));