/*
https://ru.hexlet.io/challenges/programming_basics_ackermann
*/

const isPositiveInfinite = (n) => {
  return (n === Infinity) ? true : false;
};

const neitherZeroNorPositiveInt = (n) => {
  if (isNaN(n)) return true;
  return ((n < 0) || (Math.floor(n) !== n)) ? true : false;
};

const iterAckermann = (m, n) => {
  if (m === 0) return (n + 1);
  if (n === 0) return iterAckermann(m - 1, 1); // m > 0
  return iterAckermann(m - 1, iterAckermann(m, n - 1)); // m > 0, n > 0
};

const Ackermann = (iM, iN) => {
  const nM = Number(iM); // Number(NaN) returns NaN
  const nN = Number(iN); // Number(undefined) returns NaN too
  if (isPositiveInfinite(iM) || isPositiveInfinite(iN)) return Infinity;
  if (neitherZeroNorPositiveInt(nM) || neitherZeroNorPositiveInt(nN)) return undefined;

  return iterAckermann(nM, nN);
};

//export default Ackermann;

exports.default = Ackermann;
