/*
https://ru.hexlet.io/challenges/programming_basics_without_two_zeros
*/

withoutTwoZeros = require('../two0s.js').default;

console.log(withoutTwoZeros(2, 2)); // 3
console.log(withoutTwoZeros(1, 1)); // 2
console.log(withoutTwoZeros(1, 3)); // 4
console.log(withoutTwoZeros(2, 4)); // 10

console.log(withoutTwoZeros(2, 3)); // 6
console.log(withoutTwoZeros(2, 1)); // 1
console.log(withoutTwoZeros(2, 0)); // 0
console.log(withoutTwoZeros(3, 1)); // 0
console.log(withoutTwoZeros(3, 2)); // 1
console.log(withoutTwoZeros(4, 5)); // 15
console.log(withoutTwoZeros(4, 6)); // 35
