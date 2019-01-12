/*
https://ru.hexlet.io/challenges/programming_basics_without_two_zeros
*/

const withoutTwoZeros = (qZero, qUnit) => {
  if (qZero - 1 > qUnit) return 0;
  let nRes = 1;
  for (let i = 1; i <= qZero; i += 1) nRes *= (qUnit + 2 - i) / i;
  return nRes;
};

// можно было бы сделать рекурсивный процесс построения подходящих сочетаний
// нулей и единиц с накопительным счётчиком успешных завершений строки
// -- но это вроде как не требуется в задаче и слишком нагружает машину

//export default withoutTwoZeros;

exports.default = withoutTwoZeros;
