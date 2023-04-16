// # Название:

// Persistent Bugger

// # Описание:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// # Решение:

function persistence(num) {
  let count = 0;
  let str = String(num);
  while (str.length !== 1) {
    str = String(str.split('').reduce((accum, item) => +accum * +item, 1));
    count++;
  }
  return count;
}

// # Комментарии:
// Пыталась решать через рекурсию, но не удалось нормально посчитать count, только res:
function persistence(num) {
  const str = String(num).split('');
  let res = str.reduce((accum, item) => accum * item, 1);
  if (String(res).length > 1) {
    return persistence(res);
  } else {
    return res;
  }
}
// Подсмотрела, что можно решить через while
