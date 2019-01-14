/*
https://ru.hexlet.io/challenges/intro_to_programming_balanced_brackets
*/

areBracketsBalanced = require('../brackets.js').default;

const testAreBracketsBalanced = (str) => {
  console.log(`${str} - эти скобки сбалансированы?   \t${areBracketsBalanced(str)}`);
};

testAreBracketsBalanced('(');
testAreBracketsBalanced(')');
testAreBracketsBalanced(')(');
testAreBracketsBalanced('');
testAreBracketsBalanced('(a)b');
testAreBracketsBalanced('(())');
testAreBracketsBalanced('((())');
testAreBracketsBalanced('())(');
