/*
https://ru.hexlet.io/challenges/programming_basics_happy_numbers
*/

isHappyNumber = require('../happy_7.js').default;

for (let i = 0; i < 22; i += 1) {
  console.log(`${i} - счастливое число?\t${isHappyNumber(i)}`);
}
