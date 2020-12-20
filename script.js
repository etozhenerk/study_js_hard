'use strict';

const box  = document.querySelector('.box'),
  start = document.querySelector('.start'),
  reset = document.querySelector('.reset');

let count = 0,
interval;
const getAnimate = () =>{
  interval = requestAnimationFrame(getAnimate);
  count++;
  if(count < 350){
    box.style.left = count * 2 + 'px';
  }
};
let animate = false;

start.addEventListener('click', () => {
  if(!animate){
    animate = true;
    interval = requestAnimationFrame(getAnimate);
  }else{
    animate = false;
    cancelAnimationFrame(interval);
  }
    
});

reset.addEventListener('click', () =>{
  cancelAnimationFrame(interval);
  count = 0;
  box.style.left = 0 + 'px';
})
