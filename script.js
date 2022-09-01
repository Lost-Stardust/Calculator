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

let displayValue = parseInt(display.textContent);
console.log(displayValue)
let array = [];

one.addEventListener('click', () => {
  displayValue = display.textContent = 1;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
two.addEventListener('click', () => {
  displayValue = display.textContent = 2;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
three.addEventListener('click', () => {
  displayValue = display.textContent = 3;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
four.addEventListener('click', () => {
  displayValue = display.textContent = 4;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
five.addEventListener('click', () => {
  displayValue = display.textContent = 5;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
six.addEventListener('click', () => {
  displayValue = display.textContent = 6;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
seven.addEventListener('click', () => {
  displayValue = display.textContent = 7;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
eight.addEventListener('click', () => {
  displayValue = display.textContent = 8;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
nine.addEventListener('click', () => {
  displayValue = display.textContent = 9;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})
zero.addEventListener('click', () => {
  displayValue = display.textContent = 0;
  array.push(displayValue)
  console.log(array)
  console.log(displayValue)
  display.innerHTML = array.join('')
})