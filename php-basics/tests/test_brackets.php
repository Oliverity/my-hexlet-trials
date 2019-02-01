<?php

/*
https://ru.hexlet.io/challenges/intro_to_programming_balanced_brackets
*/

require_once('../brackets.php');
use function OliverityHexletTrials\Brackets\isBalanced;

function testAreBracketsBalanced(string $str)
{
  $res = isBalanced($str) ? 'true' : 'false';
  print_r("{$str} - эти скобки сбалансированы?   \t{$res}\n");
};

testAreBracketsBalanced('(');
testAreBracketsBalanced(')');
testAreBracketsBalanced(')(');
testAreBracketsBalanced('');
testAreBracketsBalanced('(a)b');
testAreBracketsBalanced('(())');
testAreBracketsBalanced('((())');
testAreBracketsBalanced('())(');
