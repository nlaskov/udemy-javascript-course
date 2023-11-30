//LECTURE: Values and Variables 
const country = "Bulgaria";
const continent = "Europe";
const population = 7;

console.log(country);
console.log(continent);
console.log(population);

//LECTURE: Data Types
const isIsland = false;
var language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//LECTURE: let, const and var
language = "bulgarian";

//LECTURE: Basic Operators
console.log(population / 2);
console.log(population + 1);
console.log(6 < population);
console.log(33 > population);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

//LECTURE: Strings and Template Literals
const templateDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(templateDescription);

//LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}