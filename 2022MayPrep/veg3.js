let vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
];
function judgeVegetable(vegetables, metric) {
  let sortedVeg = vegetables.sort((v1, v2) => (v1[metric] < v2[metric]) ? 1 : (v1[metric] > v2[metric]) ? -1 : 0);
  console.log(vegetables[0].submitter);
  return vegetables[0].submitter;
  // else if (metric == 'plumpness'){
  //   let sortedVeg2 = vegetables.sort((v1, v2) => (v1.plumpness < v2.plumpness) ? 1: (v1.plumpness > v2.plumpness) ? -1 :0);
  //   console.log(vegetables[0].submitter);
  //   return vegetables[0].submitter
}
const metric = 'd';
judgeVegetable(vegetables, metric);