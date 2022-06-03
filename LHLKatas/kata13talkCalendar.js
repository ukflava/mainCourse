const talkingCalendar = function(date) {
  let day = date.slice(-2);
  let date22 = new Date(date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  let result = monthNames[date22.getMonth()] + " "  + date22.getDate();
  let result2 = date22.getFullYear();
  if (day === "01" || day === 21 || day === 31) {
    return result + "st, " + result2;
  } else if (day === "02") {
    return result + "nd, " + result2;
  } else if (day === "03" || day === 23) {
    return result + "rd, " + result2;
  } else {
    return result + "th, " + result2;
  }
};


console.log(talkingCalendar("2017/12/01"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1985/01/02"));
console.log(talkingCalendar("1987/01/03"));
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987