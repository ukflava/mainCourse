const blocksAway = function(directions) {
  let answer = { east: 0, north: 0 }; let compass = "";

  for (let i = 0; i < directions.length; i += 2) {
    if (directions[i] === "right" && i < 1) {
      answer.east += directions[i + 1], compass = "east";
    } else if (directions[i] === "left" && i < 1) {
      answer.north += directions[i + 1], compass = "north";
    } else if (compass === "east" && directions[i] === "left" && i > 1) {
      answer.north += directions[i + 1], compass = "north";
    } else if (compass === "east" && directions[i] === "right" && i > 1) {
      answer.north -= directions[i + 1], compass = "south";
    } else if (compass === "north" && directions[i] === "left" && i > 1) {
      answer.east -= directions[i + 1], compass = "west";
    } else if (compass === "north" && directions[i] === "right" && i > 1) {
      answer.east += directions[i + 1], compass = "east";
    } else if (compass === "south" && directions[i] === "left" && i > 1) {
      answer.east += directions[i + 1], compass = "east";
    } else if (compass === "south" && directions[i] === "right" && i > 1) {
      answer.east -= directions[i + 1], compass = "west";
    } else if (compass === "west" && directions[i] === "left" && i > 1) {
      answer.north -= directions[i + 1], compass = "south";
    } else if (compass === "west" && directions[i] === "right" && i > 1) {
      answer.north += directions[i + 1], compass = "north";
    }
  }
  return answer;
  
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 4, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}