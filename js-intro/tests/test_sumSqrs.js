/*
https://ru.hexlet.io/challenges/intro_to_programming_sum_square_difference
*/

sumSquareDifference = require('../sumSqrs.js').default;

const testSumSquareDifference = (n) => {
  console.log(`n = ${n}. sumSquareDifference = ${sumSquareDifference(n)}.`);
};

for (let i = 0; i < 34; i += 1) testSumSquareDifference(i);
