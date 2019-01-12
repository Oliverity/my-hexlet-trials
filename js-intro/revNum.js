/*
https://ru.hexlet.io/challenges/programming_basics_reverse_integer
*/

const isNegativeZero = (n) => {
  if (n !== 0) return false;
  return (-Infinity === 1 / n) ? true : false;
};

const reverseInt = (num) => {
  if (num === undefined) return undefined;

  const n = Number(num);

  if (isNaN(n)) return NaN;
  if (n === Infinity) return Infinity;
  if (n === -Infinity) return -Infinity;
  if (isNegativeZero(n)) return '-0';

  const sN = String(n);
  let sRes = '';
  let minIndex;
  
  if (n < 0) {
    sRes += '-';
    minIndex = 1;
  } else minIndex = 0;
  
  for (let i = sN.length - 1; i >= minIndex; i -= 1) sRes += sN[i];

  return Number(sRes);
};

//export default reverseInt;

exports.default = reverseInt;

