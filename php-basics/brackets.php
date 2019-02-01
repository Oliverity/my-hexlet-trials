<?php

/*
https://ru.hexlet.io/challenges/php_basics_balanced_brackets
*/

namespace OliverityHexletTrials\Brackets; 

function isBalanced(string $str): bool
{
  $bracketQty = 0;
  for($i = 0; $i < strlen($str); $i += 1) {
    if ($str[$i] === '(') $bracketQty += 1;
    elseif ($str[$i] === ')') {
      $bracketQty -= 1;
      if ($bracketQty < 0) return false;
    } else return false;
  }
  return $bracketQty === 0;
}
