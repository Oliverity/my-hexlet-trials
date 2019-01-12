/*
https://ru.hexlet.io/challenges/programming_basics_rna
*/

const dnaToRna = (sDNA) => {
  let sRNA = '';
  for (let i = 0; i < sDNA.length; i += 1) {
    switch (sDNA[i]) {
      case 'A':
        sRNA += 'U';
        break;
      case 'C':
        sRNA += 'G';
        break;
      case 'G':
        sRNA += 'C';
        break;
      case 'T':
        sRNA += 'A';
        break;
      default: // незнакомый нуклеотид
        return null;
    }
  }
  return sRNA;
};

// export default dnaToRna;

exports.default = dnaToRna;
