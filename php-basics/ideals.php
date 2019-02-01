<?php

/*
https://ru.hexlet.io/challenges/php_basics_perfect_numbers
*/

namespace OliverityHexletTrials\Ideals;

function isPerfect(int $num): bool
{
  $delimsSum = 0;
  for ($i = 1; $i <= ($num / 2); $i += 1) {
    if ($num % $i === 0) $delimsSum += $i;
  }
  return $delimsSum === $num;
}
