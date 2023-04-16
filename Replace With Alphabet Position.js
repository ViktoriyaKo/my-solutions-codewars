// # Название:

// Replace With Alphabet Position

// # Описание:

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// # Решение:

function alphabetPosition(text) {
  const textUpperCase = text.toUpperCase();
  const numberLetters = 26;
  const startCodeASCII = 64;
  let res = [];
  for (let i = 0; i < text.length; i++) {
    res.push(textUpperCase.charCodeAt(i) - startCodeASCII);
  }
  return res.filter((item) => item > 0 && item <= numberLetters).join(' ');
}

// # Комментарии:
// item <= numberLetters - для того, чтобы исключить все символы, оставив только буквы.
