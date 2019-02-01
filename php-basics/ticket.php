<?php

/*
https://ru.hexlet.io/challenges/php_basics_happy_ticket
*/

namespace OliverityHexletTrials\Ticket;

function notDigit(string $char): bool
{
  return ($char < '0' || $char > '9') ? true : false;
}

function notTicket(string $str): bool
{
  if (strlen($str) !== 6) return true;
  for ($i = 0; $i < 6; $i += 1) if (notDigit($str[$i])) return true;
  return false;
}

function summarizeStr(string $str): int
{
  $res = 0;
  for ($i = 0; $i < strlen($str); $i += 1) $res += (int) $str[$i];
  return $res;
}

function isHappy(string $ticket): bool
{
  if (notTicket($ticket)) return false;
  if (summarizeStr(substr($ticket, 0, 3)) === summarizeStr(substr($ticket, 3))) return true;
  return false;
}
