/*
https://web.archive.org/web/20170215120955/https://ru.hexlet.io/challenges/programming_basics_palindrom
*/

const isPalindrome = (str) => {
  if (str.length < 2) return true;
  maxIndex = str.length - 1;
  return (str[0] !== str[maxIndex]) ? false : isPalindrome(str.substring(1, maxIndex));
};

//export default isPalindrome;

exports.default = isPalindrome;
