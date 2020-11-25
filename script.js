let num = 266219;

function multOfNumbers(number) {
  let string = String(number);
  let num2 = 0;
  for (let i = 0; i <= string.length; i++) {
    num2 += number % 10;
    number = Math.round(number / 10);
  }

  console.log(num2);
  num2 **= 3;
  console.log(num2);
  alert(String(num2).substring(0, 2));
}

multOfNumbers(num);
