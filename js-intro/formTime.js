/*
https://ru.hexlet.io/challenges/programming_basics_time
*/

const addLeadingZeros = (num, requiredLength) => {
  num = String(num);
  for (let i = 0; i < requiredLength - num.length; i += 1) num = '0' + num;
  return num;
};

const formattedTime = (minutes) => {
  let res = '';

  if (minutes >= 1440) minutes %= 1440;

  res += addLeadingZeros(Math.floor(minutes / 60), 2);
  res += ':';
  res += addLeadingZeros(minutes % 60, 2);
  
  return res;
};

//export default formattedTime;

exports.default = formattedTime;
