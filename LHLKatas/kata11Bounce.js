const PI = 3.14159;

const sphereVolume = function(radius) {
  let volume = (4 / 3) * PI * (radius * radius * radius); return volume;
};
const coneVolume = function(radius, height) {
  let volume = (1 / 3) * PI * (radius * radius) * height; return volume;
};
const prismVolume = function(height, width, depth) {
  let volume = (depth * width) * height; return volume;
};
const totalVolume = function(solids) {
  let result = [];  for (let element of solids) {
    if (element.type === 'sphere') {
      result.push(sphereVolume(element.radius));
    } else if (element.type === 'cone') {
      result.push(coneVolume(element.radius, element.height));
    } else if (element.type === 'prism') {
      result.push(prismVolume(element.height, element.width, element. depth));
    } else {
      break;
    }
  }
  const answer = result.reduce((a, b) => a + b, 0); console.log(answer); return answer;
};



const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);