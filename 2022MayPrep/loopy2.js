function loopyLighthouse(range, multiples, words) {
  for  (let rangeloop = range[0]; rangeloop <= range[1]; rangeloop++) {
    if (rangeloop % Number(multiples[0]) == 0 && rangeloop % Number(multiples[1]) == 0) {
      console.log(words[0] + words[1]);
    } else if (rangeloop % Number(multiples[0]) == 0) {
      console.log(words[0]);
    } else if (rangeloop % Number(multiples[1]) == 0) {
      console.log(words[1]);
    } else console.log(rangeloop);
  }
  
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);