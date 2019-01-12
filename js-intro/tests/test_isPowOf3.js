/*
https://ru.hexlet.io/challenges/programming_basics_power3
*/

isPowerOfThree = require('../isPowOf3.js').default;

console.log(NaN + ' - степерь 3? ' + isPowerOfThree(NaN));
console.log(undefined + ' - степерь 3? ' + isPowerOfThree(undefined));
console.log(Infinity + ' - степерь 3? ' + isPowerOfThree(Infinity));

const checkto = 3334;

for (let i = -1; i < checkto; i += 1) if (isPowerOfThree(i)) console.log(i);

console.log(`Проверены числа по ${checkto - 1} включительно.\n`);
