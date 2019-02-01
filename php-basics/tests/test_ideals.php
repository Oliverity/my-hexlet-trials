<?php

/*
https://ru.hexlet.io/challenges/php_basics_perfect_numbers
*/

require_once('../ideals.php');
use function OliverityHexletTrials\Ideals\isPerfect;

for ($i = 1; $i < 8200; $i += 1) {
  if (isPerfect($i)) print_r("{$i}\n");
}

$i = 33550336;
if (isPerfect($i)) print_r("{$i}\n");
