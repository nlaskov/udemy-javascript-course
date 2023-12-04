"use strict";

//LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
}

const bulgariaDescription = describeCountry("Bulgaria", 6, "Sofia");
const greeceDescription = describeCountry("Greece", 12, "Athens");

console.log(bulgariaDescription);
console.log(greeceDescription);

//LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld2(1441));

//LECTURE: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));

//LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is aboout ${percentageOfWorld1(
    population
  )}% of the world.`;
}

console.log(describePopulation("Bulgaria", 1441));

//LECTURE: Introduction to Arrays
const populations = [6, 15, 23, 4];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

//LECTURE: Basic Array Operations (Methods)
const neighbours = ["Greece", "Macedonia", "Serbia", "Romania", "Turkey"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();

!neighbours.includes("Germany")
  ? console.log("Probably not a central European country :D")
  : null;

neighbours[neighbours.indexOf("Macedonia")] = "North Macedonia";
console.log(neighbours);

//LECTURE: Introduction to Objects
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 6,
  neighbours: ["Greece", "Macedonia", "Serbia", "Romania", "Turkey"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring contries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(myCountry);

//LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring contries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
myCountry["population"] -= 2;

//LECTURE: Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

//LECTURE: Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//LECTURE: Looping Arrays, Breaking and Continuing

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log("Populations:", populations);
console.log("Percentages:", percentages);
console.log("Percentages2:", percentages2);

//LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

//LECTURE: The while Loop

const percentages3 = [];

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log("Populations:", populations);
console.log("Percentages:", percentages);
console.log("Percentages2:", percentages3);
