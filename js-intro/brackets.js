/*
https://ru.hexlet.io/challenges/intro_to_programming_balanced_brackets
*/

const areBracketsBalanced = (str) => {
  let bracketQty = 0;
  for(let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') bracketQty += 1;
    else if (str[i] === ')') {
      bracketQty -= 1;
      if (bracketQty < 0) return false;
    } else return false;
  }
  return bracketQty === 0;
};

// export default areBracketsBalanced;

exports.default = areBracketsBalanced;
