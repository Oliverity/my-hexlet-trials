/*
https://ru.hexlet.io/challenges/programming_basics_time
*/

formattedTime = require('../formTime.js').default;

console.log(formattedTime(1440)); // 00:00
console.log(formattedTime(1441)); // 00:01 - прошло БОЛЕЕ СУТОК
console.log(formattedTime(1456)); // 00:16 - сверх суток
console.log(formattedTime(2887)); // 00:07 - сверх двух суток
console.log(formattedTime(4359)); // 00:39 - сверх трёх суток

console.log(formattedTime(5)); // 00:05
console.log(formattedTime(15)); // 00:15
console.log(formattedTime(60)); // 01:00
console.log(formattedTime(67)); // 01:07
console.log(formattedTime(175)); // 02:55
console.log(formattedTime(600)); // 10:00
console.log(formattedTime(754)); // 12:34
