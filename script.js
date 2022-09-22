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

let num1 = displayValue;
console.log(memArray);
function concat() {
  num1 = parseInt(memArray.join(''));
  console.log(num1);
  console.log(typeof(num1));
  return num1;
};

let result;
function operator(array, ...value) {
  value.forEach((item) => {
    const index = array.indexOf(item);
    if (index > -1) {
      result = array.splice(index, 1);
    };
  });
  console.log(array);
  console.log(result);
  return result;
};

buttons.item(14).addEventListener('click', operate(result, num1,));
buttons.item(15).addEventListener('click', () => location.reload());