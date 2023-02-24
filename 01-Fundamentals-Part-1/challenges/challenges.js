// Coding Challenge #1 

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

// Data 1

// let marksWeight = 78;
// let marksHeight = 1.69;

// let johnsWeight = 92;
// let johnsHeight = 1.95;

// let marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);

// let johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI);

// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

// Data 2 

// let marksWeight = 95;
// let marksHeight = 1.88;

// let johnsWeight = 85;
// let johnsHeight = 1.76;

// let marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);

// let johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(johnsBMI);

// let markHigherBMI = marksBMI > johnsBMI;
// console.log(markHigherBMI);

// / Coding Challenge 1

// Coding Challenge 2

/*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

let marksWeight = 78;
let marksHeight = 1.69;

let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
console.log(marksBMI);

let johnsBMI = johnsWeight / johnsHeight ** 2;
console.log(johnsBMI);

let markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI})!`);
} else {
  console.log(`Mark's BMI (${marksBMI}) is lower than John's BMI (${johnsBMI})`);
}

// / Coding Challenge 2

// Coding Challenge 3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// First data

// const dolphinsScoreOne = 96;
// const dolphinsScoreTwo = 108;
// const dolphinsScoreThree = 89;

// const dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
// console.log(dolphinsAverageScore);

// const koalasScoreOne = 88;
// const koalasScoreTwo = 91;
// const koalasScoreThree = 110;

// const koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
// console.log(koalasAverageScore);

// if (dolphinsAverageScore === koalasAverageScore) {
//   console.log("It's a draw");
// } else if (dolphinsAverageScore < koalasAverageScore) {
//   console.log("Koala team is a winner!");
// } else if (dolphinsAverageScore > koalasAverageScore) {
//   console.log("Dolphins team is a winner!");
// } else {
//   console.log("No team wins a trophy.");
// }

// Second data

// const dolphinsScoreOne = 97;
// const dolphinsScoreTwo = 112;
// const dolphinsScoreThree = 101;

// const dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
// console.log(dolphinsAverageScore);

// const koalasScoreOne = 109;
// const koalasScoreTwo = 95;
// const koalasScoreThree = 123;

// const koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
// console.log(koalasAverageScore);

// if (dolphinsAverageScore === koalasAverageScore) {
//   console.log("It's a draw");
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100 ) {
//   console.log("Koala team is a winner!");
// } else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100 ) {
//   console.log("Dolphins team is a winner!");
// } else {
//   console.log("No team wins a trophy.");
// }

// Third data

const dolphinsScoreOne = 97;
const dolphinsScoreTwo = 112;
const dolphinsScoreThree = 101;

const dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
console.log(dolphinsAverageScore);

const koalasScoreOne = 109;
const koalasScoreTwo = 95;
const koalasScoreThree = 106;

const koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
console.log(koalasAverageScore);

if (dolphinsAverageScore === koalasAverageScore && (dolphinsAverageScore && koalasAverageScore) >= 100 ) {
  console.log("It's a draw");
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100 ) {
  console.log("Koala team is a winner!");
} else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100 ) {
  console.log("Dolphins team is a winner!");
} else {
  console.log("No team wins a trophy.");
}

// / Coding Challenge 3

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430 Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉

// let bill = Number(prompt());
// console.log(bill);

// let tipFifteenPercentage = 15;
// let tipTwentyPercentage = 20;

// let tip = bill >= 50 && bill <= 300 ? (tipFifteenPercentage / 100) * bill : (tipTwentyPercentage / 100) * bill;
// console.log(tip);

// let totalValue = bill + tip;
// console.log(totalValue);

// console.log(`The bill was ${bill} , the tip from the bill was ${tip} , and the total value was ${totalValue} .`);

// or

let bill = Number(prompt());

let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

let totalValue = bill + tip;

console.log(`The bill was ${bill} , the tip from the bill was ${tip} , and the total value was ${totalValue} .`);

*/

