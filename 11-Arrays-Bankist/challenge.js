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

//Challenge 2
const calcAverageHumanAge = function (ages) {
  return (humanAges = ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, age) => acc + age, 0));
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
