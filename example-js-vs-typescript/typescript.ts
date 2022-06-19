const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

const add = (input1: number, input2: number) => input1 + input2;

button.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value));
});
