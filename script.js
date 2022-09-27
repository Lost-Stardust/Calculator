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

function operate(operator, x, y) {
  if (operator == '+') {
    console.log(addition(x, y));
  };
  if (operator == '-') {
    console.log(subtraction(x, y));
  };
  if (operator == '*') {
    console.log(multiplication(x, y))
  };
  if (operator == '/') {
    console.log(division(x, y))
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
  num1 = parseInt(array.join(''));
  console.log(num1);
  console.log(typeof(num1));
  return num1;
};

let result;
let index;
function operator(array, ...value) {
  value.forEach((item) => {
    const index = array.indexOf(item);
    if (index > -1) {
      result = array.splice(index, 1);
    };
    removeFromArr(index, index)
  });
  console.log(array);
  console.log(result);
  return result;
};


function removeFromArr(indice, count) {
  
  let start = indice - count -1
  if(start < 0) start = 0
  let end = indice + count
  memArray.splice(start, end)  

  return console.log(memArray)
}

buttons.item(14).addEventListener('click', function() {
  console.log(memArray)
  let num2 = parseInt(memArray.join(''));
  console.log(result)
  console.log(num1)
  console.log(num2)

  operate(result, num1, num2);
});
buttons.item(15).addEventListener('click', () => location.reload());