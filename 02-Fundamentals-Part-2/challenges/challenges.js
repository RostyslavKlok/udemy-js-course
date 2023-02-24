// Challenge 1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// My solution

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins = function (dolphinsScore1, dolphinsScore2, dolphinsScore3) {
//   const avgDolhins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
//   return avgDolhins;
// }

// const avgKoalas = function (koalasScore1, koalasScore2, koalasScore3) {
//   const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
//   return avgKoalas;
// }

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2 ) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`)
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`)
//   } else {
//     console.log("Match was cancelled.")
//   }
// }

// const winner = avgDolphins(44, 23, 71);
// const winner2 = avgKoalas(65, 54, 49);

// Jonas solution

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test 1
// let scoreDolphins = calcAverage(44, 23 , 71);
// let scoreKoalas = calcAverage(65, 54 , 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`)
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`)
//   } else {
//     console.log("No team wins...");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Test 2

// scoreDolphins = calcAverage(85, 54 , 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// / Challenge 1

// Challenge 2

// const calcTip = function(bill) {
//   if (bill >= 50 && bill <= 300 ) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }
// console.log(calcTip(150));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// / Challenge 2

// Challenge 3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.marksBMI = this.mass / this.height ** 2;
//     return this.marksBMI;
//   },
// }

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.johnsBMI = this.mass / this.height ** 2;
//     return this.johnsBMI;
//   },
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// console.log(`${mark.fullName}'s BMI (${mark.marksBMI}) is ${mark.marksBMI > john.johnsBMI ? "higher" : "lower"} than ${john.fullName}'s BMI (${john.johnsBMI})!`);

// / Challenge 3

// Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
  const calcTip = function(bill) {
      if (bill >= 50 && bill <= 300 ) {
        return bill * 0.15;
      } else {
        return bill * 0.2;
      }
}
tips.push(calcTip(bills[i])); 
totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(calcAverage([2, 3, 7]));
  console.log(calcAverage(totals));
  
  // / Challenge 4


