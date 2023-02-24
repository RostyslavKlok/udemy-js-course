/* Values and Vriables
let js = 'amazing';  
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";

console.log(firstName);

let PI = 3.1415;
// /Values and Vriables 

// Data Types
let javascriptIsFun = true ;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Rostyk");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991; 
console.log(typeof year);

console.log(typeof null);
// /Data Types

// Let , const , var

let age = 30;
age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;
var job = "Programmer"
job = "Teacher";

lastName = "Klok"
console.log(lastName);

// /Let , const , var

// Basic Operators 

// Math operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = "Jonas";
const lastName = "Schedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15 
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; /// x= x - 1
x--;
console.log(x);

// Comparison operators 
console.log(ageJonas > ageSarah); // >, <, >=. <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// / Basic Operators

// Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10 , x = 10 and than y = 10 , execution is from right to left (=) 
console.log(x, y);

const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge);

// / Operator Precedence

// Strings and Template Literals

const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String 
multiple
lines`);

// / Strings and Template Literals

// if , else statements 

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 👧")
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too yung. Wait another ${yearsLeft} years` );
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// / if , else statements 

// Type Conversion and Coercion

// Convertion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); 
console.log(typeof NaN);

console.log(String(23));

// Coercion

console.log("I am " + 23 + " years old"); // number between 2 strings so JS automatically convert it to the string 
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");
console.log("b" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);

// / Type Conversion and Coercion

// Truthy and Falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Dont spend it all")
} else {
  console.log("You should get a job")
} // 0 is a falsy value , so else block is executed . 100 is a truthy value , so if block will execute 

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
} // height variable has no value so it is undefined . Undefined is a falsy value , so else block will execute . 0 is also falsy value . If we make the value of height 100 - the if block will execute because 100 is truthy value .

// / Truthy and Falsy values

// Equality Operators: == vs ===

const age = "18";

if (age === 18) console.log("You became adult (strict)");

if (age == 18) console.log("You became adult (loose)");

const favourite = Number(prompt("What is your fav number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // "23" == 23 ( it will convert a string "23" to a number because of == )
  console.log("Cool . 23 is amazing")
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if(favourite !== 23) console.log("Why not 23?");

// / Equality Operators: == vs ===

// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

// / Logical Operators

// Switch Statement

const day = "sunday";

switch(day) {
  case "monday": // day === "monday" , if true the code below after colon will execute
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory lectire");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory lectire");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// / Switch Statement

// Statements and Expressions

3 + 4 
1991
true && false && !false

if (23>10) {
  const str = "23 is bigger";
}

const me = "Rostyk";
console.log(`I'm ${2037 - 1991} years old ${me}`);

// / Statements and Expressions

// The Conditional ( Ternary ) operator

const age = 23;
// age >= 18 ? console.log("I like to drink wine 🔆") : console.log("I like to drink water 😁");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// / The Conditional ( Ternary ) operator

*/

