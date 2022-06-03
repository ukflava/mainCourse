function solution(number) {
  let result = [0];
  if (number  <= 0) {
    return 0;
  } else {
    for (let i = 1; i < number; i++) {
      if ((i % 3 == 0) || (i % 5 == 0)) {
        result.push(i);
      }
    } return result.reduce((a,b) => a + b);
  }

}
console.log(solution(10));