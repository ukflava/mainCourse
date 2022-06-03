
const vegetables = [
  {
    submitter: 'Old dn',
    redness: 110,
    plumpness: 35,
    mindness: 222,
    peaceness: "dfsdsddsdsf",
    Fuckness: 8489
  }, {
    submitter: 'Oldssfdn',
    redness: 150,
    plumpness: 65,
    mindness: 272,
    peaceness: "df9f",
    Fuckness: 8889
  }, {
    submitter: 'sfklin',
    redness: 1110,
    plumpness: 125,
    mindness: 2122,
    peaceness: "d23ff",
    Fuckness: 88439
  }, {
    submitter: '456ranklin',
    redness: 1340,
    plumpness: 545,
    mindness: 2562,
    peaceness: "dff",
    Fuckness: 88679
  }, {
    submitter: '15n',
    redness: 1870,
    plumpness: 34343435,
    mindness: 2433432,
    peaceness: "154651",
    Fuckness: 889
  }
  
];
const metric = 'peaceness';


function judgeVegetable(vegetables, metric) {

  let sortedVeg = vegetables.sort((v1, v2) => (v1[metric] < v2[metric]) ? 1 : (v1[metric] > v2[metric]) ? -1 : 0);
  console.log(vegetables[0].submitter);
  return vegetables[0].submitter;
}
// else if (metric == 'plumpness'){
//   let sortedVeg2 = vegetables.sort((v1, v2) => (v1.plumpness < v2.plumpness) ? 1: (v1.plumpness > v2.plumpness) ? -1 :0);
//   console.log(vegetables[0].submitter);
//   return vegetables[0].submitter

judgeVegetable(vegetables, metric);
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
 


 


// if (vegetables.redness == red[0]){ console.log("dfd")}
// console.log(red)

// console.log(submitter)