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
  
function multiply(array) {
  let result = array.reduce((a,b) => a*b, 1);
  console.log(result);
  return result
}
  
function divide(a, b) {
  let result = a / b;
  console.log(result);
  return result
}