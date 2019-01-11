/*
https://ru.hexlet.io/challenges/intro_to_programming_angle_difference
*/

anglesDiff = require('../anglesDiff.js').default;

console.log(anglesDiff('аква', 5)); // undefined
console.log(anglesDiff(-45, 78)); // undefined
console.log(anglesDiff(34, 372)); // undefined
console.log(anglesDiff(217)); // 143 - в сумме со 217 дают 360
console.log(anglesDiff()); // 0
console.log(anglesDiff(0, 45)); // 45 - не 315, потому что 45 меньше
console.log(anglesDiff(0, 315)); // 45 - не 315, потому что 45 меньше
console.log(anglesDiff(0, 180)); // 180
console.log(anglesDiff(0, 190)); // 170 - не 190, потому что 170 меньше
console.log(anglesDiff(120, 280)); // 160
