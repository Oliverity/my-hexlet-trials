/*
https://ru.hexlet.io/challenges/programming_basics_ackermann
*/

Ackermann = require('../ackermann.js').default;

const testAckermann = (i, j) => {
  console.log(`m = ${i}, n = ${j}. Ackermann(m, n) = ${Ackermann(i, j)}.`)
};

console.log('\n\n       ФУНКЦИЯ АККЕРМАНА\n\n');
testAckermann(undefined, undefined);
testAckermann(undefined, NaN);
testAckermann(NaN, undefined);
testAckermann(NaN, NaN);
testAckermann(undefined, -3.2);
testAckermann(undefined, -1);
testAckermann(undefined, 0);
testAckermann(undefined, 1);
testAckermann(undefined, 4.7);
testAckermann(NaN, -3.2);
testAckermann(NaN, -1);
testAckermann(NaN, 0);
testAckermann(NaN, 1);
testAckermann(NaN, 4.7);
testAckermann(-3.2, undefined);
testAckermann(-1, undefined);
testAckermann(0, undefined);
testAckermann(1, undefined);
testAckermann(4.7, undefined);
testAckermann(-3.2, NaN);
testAckermann(-1, NaN);
testAckermann(0, NaN);
testAckermann(1, NaN);
testAckermann(4.7, NaN);
testAckermann(-3.2, 0);
testAckermann(-3.2, 1);
testAckermann(-1, 0);
testAckermann(-1, 1);
testAckermann(4.7, 0);
testAckermann(4.7, 1);
testAckermann(0, -3.2);
testAckermann(1, -3.2);
testAckermann(0, -1);
testAckermann(1, -1);
testAckermann(0, 4.7);
testAckermann(1, 4.7);
console.log('');

for (let i = 0; i < 4; i += 1) {
  for (let j = 0; j < 6; j += 1) testAckermann(i, j);
  console.log('');
}

testAckermann(4, 0);
//testAckermann(4, 1);
//testAckermann(5, 0);
