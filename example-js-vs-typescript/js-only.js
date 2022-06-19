const btn = document.querySelector('button');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

const add = (num1, num2) => num1 + num2;

btn.addEventListener('click', () => {
  console.log(add(num1.value, num2.value)); // 10 + 5 = 105 (JS is concateneting the values)
});
