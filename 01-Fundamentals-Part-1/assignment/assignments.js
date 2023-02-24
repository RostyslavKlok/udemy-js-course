// Assignment 1 Values and Variables
const country = "Ukraine";
let population = 42000000;
const continent = "Europe";

console.log(country);
console.log(population);
console.log(continent);

// Assignment 2 , 3 Data Types . Let , const , var
const isIsland = false ;
let language = "ukrainian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Assignment 4 Basic Operators
let firstHalf = population / 2;
let secondHalf = population / 2;
console.log(firstHalf , secondHalf);

population++;
console.log(population);

let populationOfFinland = 6000000;
console.log(population > populationOfFinland);

console.log(population < 33000000);

// Assignment 5 Strings and Template Literals

let description = `${country} is in ${continent} , and its ${population} people speak ${language}`;
console.log(description);

// Assignment 6 if / else statements

let avaragePopulation = 33000000 ;

if (population >= avaragePopulation) {
  console.log(`Ukraine's population is above average`);
} else {
  console.log(`Ukraine's population is ${avaragePopulation - population} million below avarage`);
}

// Assignment 7 Type Conversion and Coercion

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617 
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Assignment 8 Equality Operators: == vs. ===

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border")
// } else {
//   console.log("No borders")
// }

// Assignment 9 Logical Operators

if (language === "english" && population < 50000000 && isIsland) {
  console.log("It's a perfect country for Sarah");
} else {
  console.log("Sarah should look up for another country");
}

// Assignment 10 Switch Statement

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speaker!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers!");
  case "english":
    console.log("3rd place!");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language!");
    break;
  default:
    console.log("Great language too :D!");
}

// Assignment 11 Ternary Operator

population > 33000000 ? console.log("Ukraine's population is above average") : console.log("Ukraine's population is below average")



