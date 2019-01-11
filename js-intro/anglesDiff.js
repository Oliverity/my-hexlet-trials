/*
https://ru.hexlet.io/challenges/intro_to_programming_angle_difference
*/

const Perigon = 360;

const notAngle = (a) => {
  if (a < 0) return true;
  if (a > Perigon) return true;
  if (Math.floor(a) !== a) return true;
  return false;
};

const diff = (a1 = 0, a2 = 0) => {
  a1 = Number(a1);
  a2 = Number(a2);

  if (notAngle(a1) || notAngle(a2)) return undefined;

  const angleDiff = Math.abs(a1 - a2);
  return Math.min(angleDiff, Perigon - angleDiff);
};

//export default diff;

exports.default = diff;
