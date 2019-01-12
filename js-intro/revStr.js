/*
https://ru.hexlet.io/challenges/programming_basics_reverse_string
*/

const recurRevStr = (str) => {
  const maxIndex = str.length - 1;
  if (maxIndex < 1) return str;
  return str[maxIndex] + recurRevStr(str.substr(0, maxIndex));
};

const reverseString = (s) => {
  const sInput = String(s);
  return recurRevStr(sInput);
};

//export default reverseString;

exports.default = reverseString;
