"use strict";
// let num = 266219;

// function multOfNumbers(number) {
//   let string = String(number);
//   let num2 = 0;
//   for (let i = 0; i <= string.length; i++) {
//     num2 += number % 10;
//     number = Math.round(number / 10);
//   }

//   console.log(num2);
//   num2 **= 3;
//   console.log(num2);
//   alert(String(num2).substring(0, 2));
// }
let ruWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let engWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function languageIf(lang, ruWeek, engWeek) {
  if (lang === "ru") {
    console.log(ruWeek);
  } else if (lang === "en") {
    console.log(engWeek);
  } else {
    console.log("Что-то пошло не так");
  }
}
function languageSwitch(lang, ruWeek, engWeek) {
  switch (lang) {
    case "ru":
      console.log(ruWeek);
      break;
    case "en":
      console.log(engWeek);
      break;
    default:
      console.log("Что-то пошло не так");
      break;
  }
}
function languageArr(lang, ruWeek, engWeek) {
  let week = {
    ru: ruWeek,
    en: engWeek,
  };
  console.log(week[lang]);
}

languageIf("en", ruWeek, engWeek);
languageSwitch("ru", ruWeek, engWeek);
languageArr("ru", ruWeek, engWeek);
// multOfNumbers(num);
