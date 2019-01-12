/*
https://ru.hexlet.io/challenges/programming_basics_power3
*/

const iterDivBy3 = (n) => {
  if (n === 1) return true;
  return n % 3 ? false : iterDivBy3(n / 3);
};
  
const isPowerOfThree = (num) => {
  const n = Number(num);
  if (n === Infinity) return undefined;
  if (n < 1 || n !== Math.floor(n)) return false; // NaN, undefined
  
  return iterDivBy3(n);
};

//export default isPowerOfThree;

exports.default = isPowerOfThree;
