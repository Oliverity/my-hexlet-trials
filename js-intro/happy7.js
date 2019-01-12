/*
https://ru.hexlet.io/challenges/programming_basics_happy_numbers
*/

const sumOfSquareDigits = (s) => {
  let res = 0;
  for (let i = 0; i < s.length; i++) res += Number(s[i]) ** 2;
  return res;
};

const isHappyNumber = (num) => { // не проверяем входные параметры
  let n = Number(num);
  if (n === 1) return true;
  for (let i = 1; i <= 10; i += 1) {
     n = sumOfSquareDigits(String(n));
     if (n === 1) return true;
  }
  return false;
};

//export default isHappyNumber;

exports.default = isHappyNumber;
