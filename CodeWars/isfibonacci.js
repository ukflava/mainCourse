function productFib(num, a = 0, b = 1) {
  let checker = a + b; let previousNumber = checker - a; let answer = [];
  if (num === 0 || num === 1) {
    return true;
  }
  if ((checker * previousNumber) === num) {
    answer.push(previousNumber, checker, true);  return answer;
  } else if (checker * previousNumber > num) {
    answer.push(previousNumber, checker, false);  return answer;
  }

  console.log(checker, previousNumber);
  return productFib(num, b, checker);
}

