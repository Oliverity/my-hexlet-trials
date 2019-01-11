/*
https://ru.hexlet.io/challenges/intro_to_programming_perfect_numbers
*/

isPerfect = require('../ideals.js').default;

for (let i = 1; i < 8200; i += 1) {
  if (isPerfect(i)) console.log(i);
}

i = 33550336;
if (isPerfect(i)) console.log(i);
