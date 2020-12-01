"use strict";
function getFormatA() {
  let now = new Date();
  let hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  let element = document.querySelector(".time1");

  let h = "",
    m = "",
    s = "";
  if (hours % 10 === 1) {
    h = "час";
  } else if (hours % 10 === 2 || hours % 10 === 3 || hours % 10 === 4) {
    h = "часа";
  } else {
    h = "часов";
  }
  if (minutes % 10 === 1) {
    m = "минута";
  } else if (minutes % 10 === 2 || minutes % 10 === 3 || minutes % 10 === 4) {
    m = "минуты";
  } else {
    m = "минут";
  }
  if (seconds % 10 === 1) {
    s = "секунда";
  } else if (seconds % 10 === 2 || seconds % 10 === 3 || seconds % 10 === 4) {
    s = "секунды";
  } else {
    s = "секунд";
  }
  element.innerHTML = `Сегодня ${now.toLocaleString(
    "ru",
    options
  )} ${hours} ${h} ${minutes} ${m} ${seconds} ${s}`;
}
function getFormatB() {
  let now = new Date();

  let element = document.querySelector(".time2");
  element.innerHTML = now.toLocaleString("ru") ;
}

setInterval(getFormatA, 1000);
setInterval(getFormatB, 1000);
