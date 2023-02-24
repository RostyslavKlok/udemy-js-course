// Functions 

// function describeCountry (country, population, capitalCity) {
//   const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return description;
// }

// const firstDescription = describeCountry("Ukraine", 54000000, "Kyiv");
// console.log(firstDescription);

// const firstTestDescription = describeCountry(window.prompt("Enter the country please", "Maybe you will write Ukraine"), window.prompt("Enter the population please"), window.prompt("Enter the capital city please"));
// console.log(firstTestDescription);

// const secondDescription = describeCountry ("Great Britain", 20000000, "London");
// console.log(secondDescription);

// const thirdDescription = describeCountry ("Germany", 34000000, "Berlin");
// console.log(thirdDescription);

// / Functions 

// Function declarations vs. expressions

// const worldPopulation = 7900000000

// Function declaration 

// function percentageOfWorld1 (population) {
//   return `China has ${population} people , so its about ${(population / worldPopulation) * 100}% of the world population`;
// }

// function percentageOfWorld2 (population) {
//   return `America has ${population} people , so its about ${(population / worldPopulation) * 100}% of the world population`;
// }

// function percentageOfWorld3 (population) {
//   return `Ukraine has ${population} people , so its about ${(population / worldPopulation) * 100}% of the world population`;
// }

// const world1 = percentageOfWorld1(1400000000);
// console.log(world1);

// const world2 = percentageOfWorld2(2500000000);
// console.log(world2);

// const world3 = percentageOfWorld3(54000000);
// console.log(world3);

// Function expression

// const percentageOfWorld1 = function(population) {
//   return `China has ${population} people , so its about ${(population / worldPopulation) * 100}% of the world population`;
// } 

// const world1 = percentageOfWorld1(1400000000);
// console.log(world1);

// / Function declarations vs. expressions

// const worldPopulation = 7900000000

// const percentageOfWorld1 = population => `${(population / worldPopulation) * 100}`;

// // console.log(percentageOfWorld1(1400000000));

// // / Function declarations vs. expressions

// // Functions calling other Functions

// const describePopulation = function(country, population) {
//   const percentageOfPopulation = percentageOfWorld1(population);

//   return `${country} has ${population} million people , which is about ${percentageOfPopulation}% of the world`;
// }

// console.log(describePopulation("China", 1400000000));

// / Functions calling other Functions

// Arrays 

// const populations = [54000000, 1400000000, 100000000, 250000000];

// if (populations.length <= 4) {
//   console.log("true");
// } else {
//   console.log("Length of array is below 0 or higher then 4");
// }

// const worldPopulation = 7900000000;

// const percentageOfWorld1 = population => `${(population / worldPopulation) * 100}`;

// const percentages = [percentageOfWorld1(54000000), percentageOfWorld1(1400000000), percentageOfWorld1(100000000), percentageOfWorld1(250000000)];
// console.log(percentages);

// // / Arrays 

// // Basic Array Operations (Methods)

// const neighbours = ["Poland", "Hungary", "Romain"];
// neighbours.push("Utopia");
// neighbours.pop();

// if (neighbours.includes("Germany")) {
//   console.log("The one of the central countries of the Europe")
// } else {
//   console.log("Probably not the central country of the Europe")
// }

// console.log(neighbours.indexOf("Hungary"));
// neighbours[1] = "Moldavia";
// console.log(neighbours);

// // / Basic Array Operations (Methods)

// // Introduction to Objects 

// const myCountry = {
//   country: "Ukraine",
//   capital: "Kyiv",
//   language: "ukrainian",
//   population: 54000000,
//   neighbours: ["Poland", "Romania", "Moldova"]
// }
// console.log(myCountry);

// // / Introduction to Objects 

// // Dot vs. Bracket notation

// console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2000000;
// console.log(myCountry);
// myCountry["population"] -= 2000000;
// console.log(myCountry);

// / Dot vs. Bracket notation

// Object Methods

// const myCountry = {
//   country: "Ukraine",
//   capital: "Kyiv",
//   language: "ukrainian",
//   population: 54000000,
//   neighbours: ["Poland", "Romania", "Moldova"],
//   describe: function() {
//     return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length}-neighbouring countries and a capital called ${this.capital}.`;
//   },
//   checkIslands: function() {
//     this.isIsland = this.neighbours.length <= 0 ? this.isIsland = "It is an island." : this.isIsland = "It is not an island.";
//     return this.isIsland;
//   },
// }

// console.log(myCountry.describe());
// console.log(myCountry.checkIslands());
// console.log(myCountry);

// / Object Methods

// The for Loop

// for(let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting.`);
// }

// / The for Loop

// Looping Arrays , Breaking and Continuing

// const populations = [54000000, 1400000000, 100000000, 250000000];

// const percentages2 = [];

// const worldPopulation = 7900000000;

// for ( let i = 0; i < populations.length; i++) {
//   const percentageOfWorld1 = function() {
//     const percentage = (populations[i] / worldPopulation) * 100;
//     return percentage;
//   }
//   percentages2.push(percentageOfWorld1());
// }

// console.log(percentages2);

// // / Looping Arrays , Breaking and Continuing

// // Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"], 
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for(let y = 0; i < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}.`);
//   }
// };

// / Looping Backwards and Loops in Loops

// The while Loop 

const populations = [54000000, 1400000000, 100000000, 250000000];

const percentages2 = [];

const worldPopulation = 7900000000;

let countryIndex = 0;

while (countryIndex < populations.length) {
  const percentageOfWorld1 = function() {
    const percentage = (populations[countryIndex] / worldPopulation) * 100;
    return percentage;
  }
  percentages2.push(percentageOfWorld1());
  countryIndex++;
}

console.log(percentages2);

// / The while Loop 






