var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var add = function (input1, input2) { return input1 + input2; };
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
