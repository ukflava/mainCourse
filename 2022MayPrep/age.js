// let userinfo = ["name", 1985, 2022]
// let trueAge = userinfo[2] - userinfo[1];
// let UserName = userinfo[0]
// // for (let ageCalculator )=

// return (UserName + "is" + trueAge + "years old")
// console.log(trueAge)

// let ageCalculator = (fullname, a, b) {}}

// console.log(ageCalculator("Miranda", 1983, 2015));

function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.");
}

console.log(ageCalculator("Denis", 1985, 2022));