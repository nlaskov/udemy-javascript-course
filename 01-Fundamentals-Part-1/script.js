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
language = "english";

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

//Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//LECTURE: Equality Operators: == vs. ===
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) console.log("Only one border!");
// else if (numNeighbours > 1) console.log("More than one border!")
// else console.log("No borders")

//LECTURE: Logical Operators
if (language === "english" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does't meet your criteria`);
}