/*
https://ru.hexlet.io/challenges/intro_to_programming_sum_square_difference
*/

const sumSquareDifference = (n) => {
  let nSumSquares = 0;
  let nSum = 0;
  for (let i = 1; i <= n; i += 1) {
    nSum += i;
    nSumSquares += i ** 2;
  }
  return (nSum ** 2) - nSumSquares;
};

//export default sumSquareDifference;

exports.default = sumSquareDifference;
