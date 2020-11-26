"use strict";
/* ==LESSON 2==
 let num = 266219;

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
 multOfNumbers(num);
 */


/* ==LESSON 3==
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
function consol() {
  let namePerson = "Артём";
  let consolName =
    namePerson === "Артём"
      ? "директор"
      : namePerson === "Максим"
      ? "преподаватель"
      : "студент";
  console.log(consolName);
}

languageIf("en", ruWeek, engWeek);
languageSwitch("ru", ruWeek, engWeek);
languageArr("ru", ruWeek, engWeek);
consol();
*/


/* ==LESSON 4==
*/
function getString(string) {
  if(typeof(string)!=='string'){
    return 'Это не строка';
  }else{
    let line = string.trim();
    return line.length > 50 ? line.slice(0, 50) + '...' : line;
  }
}

console.log(getString(11));
console.log(getString('      1234          '));
console.log(getString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut necessitatibus excepturi odio nobis eum quibusdam eligendi magnam aliquam accusamus ducimus ex veniam harum consectetur, hic enim animi! Iusto dolor nulla numquam nobis, laborum dolorem autem veniam tenetur explicabo. Voluptate, inventore distinctio? Dolorum, delectus quas. Dolor sed molestias praesentium doloribus harum, ratione consequuntur adipisci ducimus nemo perferendis! Eveniet, nihil voluptates!'));