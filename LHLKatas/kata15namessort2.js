const organizeInstructors = function(instructors) {
  let result = {};
  //  const sorted = instructors.sort((a,b) => (b.course > a.course) ? 1 : ((a.course > b.course) ? -1 : 0))
  //  const reformat = sorted.map(({ name, course}) => ({ [course] : name }));
  result = instructors.reduce(function(r, a) {
    r[a.course] = r[a.course] || [];
    r[a.course].push(a.name);
    return r;
  },
  Object.create(result));
  return result;
};
 

console.log(organizeInstructors([
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Samuel", course: "iOS"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));


