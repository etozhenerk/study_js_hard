"use strict";

const input = document.querySelector("input"),
  p = document.querySelector("p");

function debounce(callBack, time) {
  return function () {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= time) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callBack(), time);
  };
}

let addText = () => {
  p.textContent = input.value;
};

input.addEventListener("input", debounce(addText, 300));
