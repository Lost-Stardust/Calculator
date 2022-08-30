function add(a, b) {
  let result = a + b;
  console.log(result);
  return result;
};
  
function subtract(a, b) {
  let result = a - b;
  console.log(result);
  return result;
};
  
function multiply(a, b) {
  let result = a * b;
  console.log(result);
  return result
}
  
function divide(a, b) {
  let result = a / b;
  console.log(result);
  return result
}

function operate(operator, num1, num2) {
  if (operator == '+') {
    add(num1, num2);
  };
  if (operator == '-') {
    subtract(num1, num2);
  };
  if (operator == '*') {
    multiply(num1, num2);
  };
  if (operator == '/') {
    divide(num1, num2);
  };
};