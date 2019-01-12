/*
https://ru.hexlet.io/challenges/programming_basics_reverse_string
*/

reverseString = require('../revStr.js').default;

const testReverseString = (s) => console.log(`Ответ: ${reverseString(s)}`);

testReverseString('Сорок тысяч обезьян!');
testReverseString('');
testReverseString(34664326);
testReverseString(false);
testReverseString(true);
testReverseString(null);
testReverseString(NaN);
testReverseString(undefined);
testReverseString('Ф');
