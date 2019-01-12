/*
https://ru.hexlet.io/challenges/programming_basics_happy_ticket

Счастливый билет
*/

const notDigit = (ch) => (ch < '0' || ch > '9') ? true : false;

const notTicket = (s) => {
  if (s.length !== 6) return true;
  for (let i = 0; i < 6; i += 1) if (notDigit(s[i])) return true;
  return false;
};

const summarizeStr = (s) => {
  let res = 0;
  for (let i = 0; i < s.length; i += 1) res += Number(s[i]);
  return res;
};

const isHappyTicket = (ticket) => {
  const s = String(ticket);
  if (notTicket(s)) return false;
  if (summarizeStr(s.substring(0,3)) === summarizeStr(s.substring(3))) return true;
  return false;
};

//export default isHappyTicket;

exports.default = isHappyTicket;
