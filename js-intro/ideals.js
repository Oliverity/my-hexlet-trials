/*
https://ru.hexlet.io/challenges/intro_to_programming_perfect_numbers
*/

const isPerfect = (num) => {
  let delimsSum = 0;
  for (let i = 1; i <= (num / 2); i += 1) if (!(num % i)) delimsSum += i;
  return (delimsSum === num);
};

// export default isPerfect;

exports.default = isPerfect;
