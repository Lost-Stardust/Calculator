let memArray = [];

function addition(a, b) {
  let result = a + b;
  console.log(result);
  return result;
};
  
function subtraction(a, b) {
  let result = a - b;
  console.log(result);
  return result;
};
  
function multiplication(a, b) {
  let result = a * b;
  console.log(result);
  return result
}
  
function division(a, b) {
  let result = a / b;
  console.log(result);
  return result
}

function operate(operator, num1, num2) {
  if (operator == '+') {
    addition(num1, num2);
  };
  if (operator == '-') {
    subtraction(num1, num2);
  };
  if (operator == '*') {
    multiplication(num1, num2);
  };
  if (operator == '/') {
    division(num1, num2);
  };
};

let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button')
console.log(buttons);
let array = [];
let displayValue;
function popDisplay(input) {
  displayValue = display.textContent = `${input}`;
  array.push(displayValue);
  memArray.push(displayValue);
  console.log(array);
  display.innerHTML = array.join('');
  concat(displayValue)
};

console.log(memArray);
function concat(num) {
  num = parseInt(memArray.join(''));
  console.log(num);
  console.log(typeof(num))

}