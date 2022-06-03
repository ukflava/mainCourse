function orderWeight(str) {
  let strArr = str.trim().split(" ");

  function sumDigits(num) {
    return num.split("").reduce((s, v) => s + Number(v), 0);
  }

  // strArr.sort((a,b) => a.localeCompare(b, 'en'))
  strArr.sort(
  
    function(a, b) {
      if (sumDigits(a) != sumDigits(b)) return sumDigits(a) - sumDigits(b);
      else {
        return a.localeCompare(b, 'en');
      }
    });
  return strArr.join(" ");

}
console.log(orderWeight("50 14 27 117 137 65 84 84 404301 139 96 109510 196 205433 230259 434092 465008 344356 475741 154783 91979"));
// console.log( orderWeight("12 112 150 33 115 35 44 180 73 28 176 441340 6316 70093 210746 125970 290275 75905 464634 418676 473497"));



// 14 50 117 27 137 65 404301 84 84 139 96 109510 196 205433 230259 434092 465008 344356 154783 475741 91979
// 14 50 117 27 137 65 404301 84 84 139 96 109510 196 205433 230259 434092 465008 344356 154783 475741 91979