"use strict";

const body = document.querySelector('body'),
  color = document.querySelector('#color'),
  button = document.querySelector('#change');

const changeColor = () => {
  let randomColor =`#${Math.random().toString(16).slice(2,8)}` ;
  body.style.background = randomColor;
  color.textContent = randomColor;
  button.style.color = randomColor;
};

button.addEventListener('click', changeColor);