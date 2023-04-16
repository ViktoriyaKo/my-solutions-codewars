// function alphabetPosition(text) {
//   const textUpperCase = text.toUpperCase();
//   const numberLetters = 26;
//   const startCodeASCII = 64;
//   let res = [];
//   for (let i = 0; i < text.length; i++) {
//     res.push(textUpperCase.charCodeAt(i) - startCodeASCII);
//   }
//   return res.filter((item) => item > 0 && item <= numberLetters).join(' ');
// }
// 65 - 90;

// function persistence(num) {
//   const str = String(num).split('');
//   let res = str.reduce((accum, item) => accum * item, 1);
//   if (String(res).length > 1) {
//     count++;
//     return persistence(res);
//   } else {
//     return res;
//   }
// }

// console.log(persistence(4));

// function order(words) {
//   if (words.length < 1) {
//     return '';
//   }
//   const regex = /[1-9]/g;
//   const numbers = words.match(regex);
//   const separateWords = words.split(' ');
//   let res = Object.assign(
//     ...numbers.map((item, index) => ({ [item]: separateWords[index] }))
//   );
//   return Object.entries(res)
//     .map((item) => item[1])
//     .join(' ');
// }

// console.log(order('1of 2For pe4ople g3ood th5e the'));

// function order(words) {
//   return words
//     .split(' ')
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(' ');
// }
