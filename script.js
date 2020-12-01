"use strict";

let arr = [
  "13143141",
  "213141423",
  "42343123",
  "123412",
  "14124214",
  "4124121",
  "1421423142",
];
arr.forEach(function (item, i) {
  if (item[0] == 2 || item[0] == 4) {
    console.log(item);
  }
});

function isNatural(number) {
  for (var i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  if (isNatural(i)) {
    console.log(`Число ${i}, делители этого числа 1 и ${i}`);
  }
}
