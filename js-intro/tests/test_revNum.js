/*
https://ru.hexlet.io/challenges/programming_basics_reverse_integer
*/

reverseInt = require('../revNum.js').default;

const testReverseInt = (s) => console.log(`Дано: ${s}. Ответ: ${reverseInt(s)}`);

testReverseInt('Сорок тысяч обезьян!');
testReverseInt(3.14159265);
testReverseInt(-3.14159265);
testReverseInt(NaN);
testReverseInt(undefined);
testReverseInt('undefined');
testReverseInt(Infinity);
testReverseInt(-Infinity);
testReverseInt('-0');
testReverseInt(-0);
testReverseInt(0);
testReverseInt('');
testReverseInt(13);
testReverseInt(123);
testReverseInt(-13);
testReverseInt(-123);
testReverseInt('13');
testReverseInt('123');
testReverseInt('-13');
testReverseInt('-123');
testReverseInt('4');
testReverseInt(4);
