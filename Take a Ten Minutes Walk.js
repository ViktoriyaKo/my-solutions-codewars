// # Название:

// Take a Ten Minutes Walk

// # Описание:

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

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
// Задачу можно решить многими способами, например, отфильтровать массив по каждому направлению, посчитав длину, затем сравнить полученные длины массива.
// Я выбрала другой способ. Начертила ось координат, проставила направления, написала цикл. Обязательное условие: true возвращается только при длине массива = 10
