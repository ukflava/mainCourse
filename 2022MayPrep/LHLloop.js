// const lhlNumber = 0;
for (let repeat = 100; repeat <= 200; repeat++) {
    
  if (repeat % 3 == 0 && repeat % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (repeat % 3 == 0) {
    console.log("Loopy");
  } else if (repeat % 4 == 0) {
    console.log("Lighthouse");
  } else console.log(repeat);
}
  
//   console.log("final");

// function loopyLighthouse(range, multiples, words){
//   for  (let rangeloop = range[0]; rangeloop <= range[1]; rangeloop++){
//     if (repeat % 3 == 0 && repeat % 4 == 0) {console.log("LoopyLighthouse")}
//     else if (repeat % 3 == 0){console.log("Loopy")}
//     else if (repeat % 4 == 0){console.log("Lighthouse")}
//     else console.log(repeat);
//   }
//   )

// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);