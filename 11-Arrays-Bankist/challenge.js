// Challenges

//Challenge 1
const checkDogs = function (dogsJulia, dogsKate) {
  const sampleJulia = dogsJulia.slice(1, dogsJulia.length - 2);
  console.log(sampleJulia);

  const combinedData = [...sampleJulia, ...dogsKate];
  console.log(combinedData);

  combinedData.forEach(function (age, i) {
    console.log(
      `Dog number ${i + 1} is ${
        age > 3 ? `adult, and is ${age} years old` : `a puppy :)`
      }`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Challenge 2 + 3
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, age) => acc + age, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//Challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
  console.log(`Sarah's dog is overfed`);
} else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
  console.log(`Sarah's dog is underfed`);
} else {
  console.log(`Sarah's dog is fed just right`);
}

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(
  dogs.some(dog => dog.curFood === dog.recommendedFood) ? true : false
);

console.log(
  dogs.some(
    dog =>
      dog.curFood >= dog.recommendedFood * 0.9 &&
      dog.curFood <= dog.recommendedFood * 1.1
  )
    ? true
    : false
);

const okFood = dogs.some(
  dog =>
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
);
