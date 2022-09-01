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

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');

let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

