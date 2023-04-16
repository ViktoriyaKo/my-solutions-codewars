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

function persistence(num) {
  const str = String(num).split('');
  let res = str.reduce((accum, item) => accum * item, 1);
  if (String(res).length > 1) {
    count++;
    return persistence(res);
  } else {
    return res;
  }
}

console.log(persistence(4));
