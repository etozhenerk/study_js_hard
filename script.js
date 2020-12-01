'use strict';

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let now = new Date().getDay();
week.forEach(function(item, i){
  if(i === (now-1)){
    document.querySelector('.week').innerHTML += `<b>${item}</b><br>`;
  }else if(i === 5 || i ===6){
    document.querySelector('.week').innerHTML += `<i>${item}</i><br>`;
  }else{
    document.querySelector('.week').innerHTML += `${item}<br>`;
  }

  
});