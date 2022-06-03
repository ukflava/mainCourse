// let red = [];
// let plum = [];
// let i = 0;
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 99998
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Hamid',
    redness: 14,
    plumpness: 93
  },
  {
    submitter: 'Hamidson',
    redness: 44,
    plumpness: 33
  }
];


function judgeVegetable(vegetables, metric) {
  if (metric == 'redness') {
    let sortedVeg = vegetables.sort((v1, v2) => (v1.redness < v2.redness) ? 1 : (v1.redness > v2.redness) ? -1 : 0);
    console.log(vegetables[0].submitter);
    return vegetables[0].submitter;
  } else if (metric == 'plumpness') {
    let sortedVeg2 = vegetables.sort((v1, v2) => (v1.plumpness < v2.plumpness) ? 1 : (v1.plumpness > v2.plumpness) ? -1 : 0);
    console.log(vegetables[0].submitter);
    return vegetables[0].submitter;
  }
}
// for (let i = 0; i < vegetables.length; i++){ console.log(vegetables[i].redness)
      
// let k = i+1
// if (vegetables[k].redness > vegetables[i].redness){console.log(vegetables[i].redness)

// }
        
//


// red.push(vegetable.redness);
// red.sort(function(a,b){ return a+b});
//         } console.log(red[0])
              
  

// console.log(red)

//  console.log(red)


// let text = [];
// for (let x in person) {
//   text = push.person[x];
// }
// let redness = 0;
//   for (let redness in vegetables){ if (vegetables.redness > vegetable) { console.log(vegetable);
//     return vegetables.submitter}
 


 

const metric = 'redness';

judgeVegetable(vegetables, metric);
// if (vegetables.redness == red[0]){ console.log("dfd")}
// console.log(red)

// console.log(submitter)