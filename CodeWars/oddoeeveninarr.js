// function findOutlier(integers) {const even = integers.filter(a=>a%2==0)
//   if (even.length > 1){return integers.find(a=>a%2!=0)}
//    else{ return integers.find(a=>a%2==0)}}
// let checker = integers.reduce((a,b) => a+b);
// if (checker % 2 != 0){ return integers.find( a => a%2 != 0)
// else {return integers.find( a => a%2 == 0)}
 


function findOutlier(integers) {
  const even = integers.filter(a=>a % 2 == 0);
  return even.length > 1 ? integers.find(a=>a % 2 != 0) : integers.find(a=>a % 2 == 0);
}
 

console.log(findOutlier([-1118871,162513429,126173683,-43600629,124553979,70512165,-123795123,114875805,150336251,-98854393,-182933339,75563479,91494799,158397157,-112944213,182255647,85929013,85872508,-95659145,-100841815,-41378327,-28358755,156246435,45410913,46378227,-156288477,-74623683,-98518033,-22222733,114628865,70908839,197520309,116875247,-34542113,34793609,-52692189,-165878597,-26882571,-17523925,-43407661,85714685,174755853,198661195,-35177631,11416109,141549457,135086415,-16948581]));
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)