const calculateChange = function(total, cash) {
  const money = {tenDollar: 1000, fiveDollars: 500, twoDollar: 200,
    oneDollar: 100, quarter: 25, dime: 10, nickel: 5, penny: 1  };
  let result = cash - total;
  let change = {};
  // Object.create(money);
  let moneyVal = Object.values(money);
  let moneyKeys = Object.keys(money);
  for (let i = 0; i < moneyVal.length; i++) {
    if ((result > moneyVal[i])) {
      change[moneyKeys[i]] = Math.floor(result / moneyVal[i]);
      result = result % moneyVal[i];
            
    }
    // console.log(result)
  }

  return change;

};



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 10000));



// const calculateChange = function(total, cash) {
//   const money = {tenDollar: 1000, fiveDollars: 500, twoDollar: 200,
//     oneDollar: 100, quarter: 25, dime: 10, nickel: 5, penny: 1  }
//     let result = cash - total;
//     let change = []
//     Object.create(money);
//     // console.log(result);
//         let money1 = Object.values(money)
//         for (let i = 0; i< money1.length; i++) {
//            while ((result - money1[i]) >= 0) {
//              result = result - money1[i]; change.push(money1[i]);}

//       //  let count = 0; for (let i =0; i< money1.length; i++){
// //       count = count + 1; result = result - money1[i];  console.log(result, money1[i], count)
// //       }}
// //      }
     
//     //  let change = Object.create(money); {
        

//     //  }
// //      change.tenDollar = 2;
// console.log(result)}
// return change
// // console.log(money1, count)
// // return money1
// // console.log(change)

// }



// console.log(calculateChange(1787, 2000));
// // console.log(calculateChange(2623, 4000));
// // console.log(calculateChange(501, 1000));

// // { twoDollar: 1, dime: 1, penny: 3 }
// // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }


// // console.log(130 % 51)


