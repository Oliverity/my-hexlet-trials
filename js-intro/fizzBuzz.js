/*
https://ru.hexlet.io/challenges/intro_to_programming_fizzbuzz
*/

const fizzBuzz = (begin, end) => {
  let res;
  for (let i = begin; i <= end; i += 1) {
    res = '';
    if (!(i % 3)) res = 'Fizz';
    if (!(i % 5)) res += 'Buzz';
    if (res === '') res = String(i);
    console.log(res);
  }
};

//export default fizzBuzz;

exports.default = fizzBuzz;
