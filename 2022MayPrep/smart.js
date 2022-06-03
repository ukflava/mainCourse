function smartGarbage(trash, bins) {
  if (trash == "recycling") {
    bins.recycling = bins.recycling + 1;
  } else if (trash == "compost") {
    bins.compost = bins.compost + 1;
  } else if (trash == "waste") {
    bins.waste = bins.waste + 1;
  }
  //  console.log(bins)
  return bins;
}
 
// else {bins.waste = bins.waste++
// }


smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 });

