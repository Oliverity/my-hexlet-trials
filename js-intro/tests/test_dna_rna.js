/*
https://ru.hexlet.io/challenges/programming_basics_rna
*/

dnaToRna = require('../dna_rna.js').default;

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
