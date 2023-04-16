// # Название:

// Your order, please

// # Описание:

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// # Решение:

function order(words) {
  if (words.length < 1) {
    return '';
  }
  const regex = /[1-9]/g;
  const numbers = words.match(regex);
  const separateWords = words.split(' ');
  let res = Object.assign(
    ...numbers.map((item, index) => ({ [item]: separateWords[index] }))
  );
  return Object.entries(res)
    .map((item) => item[1])
    .join(' ');
}

// # Комментарии:
// Да, эту задачу можно было решить используя только регулярку и sort. Но я не ищу легких путей.
