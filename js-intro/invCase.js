/*
https://ru.hexlet.io/challenges/programming_basics_invert_case
*/

const invertCase = (str) => {
  let letter = '';
  let upLetter = '';
  let res = '';
  for(let i = 0; i < str.length; i+= 1) {
    letter = str[i];
    upLetter = letter.toUpperCase();
    if (letter === upLetter) {
      res += letter.toLowerCase();
    } else res += upLetter;
  }
  return res;
};

// export default invertCase;

exports.default = invertCase;
