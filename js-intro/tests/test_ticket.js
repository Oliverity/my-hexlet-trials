/*
https://ru.hexlet.io/challenges/programming_basics_happy_ticket
*/

isHappyTicket = require('../ticket.js').default;

const testHappyTicket = (num) => {
  console.log(`${num} - счастливый билет? Ответ: ${isHappyTicket(num)}.`);
};

testHappyTicket('билет');
testHappyTicket('');
testHappyTicket('1');
testHappyTicket('12');
testHappyTicket('123');
testHappyTicket('1234');
testHappyTicket('12345');
testHappyTicket('123456');
testHappyTicket('1234567');
testHappyTicket('qwerty');
testHappyTicket('385916');
testHappyTicket(385916);
testHappyTicket('231002');
testHappyTicket(231002);
testHappyTicket('128722');
testHappyTicket(128722);
testHappyTicket('054702');
testHappyTicket(054702);
testHappyTicket('222222');
testHappyTicket(222222);
testHappyTicket('111111');
testHappyTicket(111111);
testHappyTicket('268736');
testHappyTicket(268736);
testHappyTicket('078708');
testHappyTicket(078708);
console.log('');