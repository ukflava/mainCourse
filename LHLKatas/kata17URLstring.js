const urlDecode = function(text) {
  let result = text.replace(/%20/g, " ").replace(/&/g, ",").replace(/=/g, ",").trim().split(",");
  let answer = {};
  for (let i = 0; i < result.length; i += 2) {
    answer[result[i]] = result[(i + 1)];
  }
  return answer;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"

// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2