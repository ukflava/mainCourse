function spinWords(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split("").reverse().join("");
      console.log(words[i]);
    }
  } return words.join(" ");
}
console.log(spinWords("This is another test"));
// spinWords( "This is another test" )=> returns "This is rehtona test"