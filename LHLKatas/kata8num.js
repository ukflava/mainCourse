const repeatNumbers = function(data) {
  let answer = [];
  for (let data1 of data)  {
    let ARR = '';  for (let i = 0; i < data1[1]; i++) {
      ARR = ARR + data1[0];
    }answer.push(ARR);
  } return answer.toString();
};
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));