const add = function(a, b) {
    let sum = a + b;
    return sum;
  };
  
  const subtract = function(a, b) {
      let result = a - b;
    return result;
  };
  
  const sum = function(array) {
    let result = array.reduce((a,b) => a+b, 0);
    return result
  }
  
  const multiply = function(array) {
    let result = array.reduce((a,b) => a*b, 1);
    return result
  };
  
  const power = function(a, b) {
      let result = a ** b;
    return result;
  };
  
  const factorial = function(a) {
    let array = [];
      for (let i = 1; i <= a; i++) {
      array.push(i)
      console.log(array)
    }
    let result = array.reduce((a,b) => a*b, 1);
    return result;
  };
  