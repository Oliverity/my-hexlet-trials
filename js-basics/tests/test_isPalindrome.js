/*
https://web.archive.org/web/20170215120955/https://ru.hexlet.io/challenges/programming_basics_palindrom
*/

isPalindrome = require('../isPalindrome.js').default;

const testPalindrome = (s) => {
  console.log(`"${s}" - палиндром? \t${isPalindrome(s)}`);
};

testPalindrome('radar'); // true
testPalindrome('a'); // true
testPalindrome('abs'); // false
testPalindrome('радар'); // true
testPalindrome('топот'); // true
testPalindrome('слон'); // false
testPalindrome('АББА'); // true
testPalindrome(''); // true
