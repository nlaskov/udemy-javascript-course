'use strict';

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
}
console.log(percentageOfWorld2(1441));

//LECTURE: Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(1441));

//LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is aboout ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation("Bulgaria", 1441));

//LECTURE: Introduction to Arrays
const populations = [6, 15, 23, 4];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

//LECTURE: Basic Array Operations (Methods)
const neighbours = ["Greece", "Macedonia", "Serbia", "Romania", "Turkey"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();

!neighbours.includes("Germany") ? console.log("Probably not a central European country :D") : null;

neighbours[neighbours.indexOf("Macedonia")] = "North Macedonia";
console.log(neighbours);