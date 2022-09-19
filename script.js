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

let array = [];
let displayValue;
function popDisplay(input) {
  displayValue = display.textContent = `${input}`;
  array.push(displayValue);
  console.log(array);
  display.innerHTML = array.join('');
};
