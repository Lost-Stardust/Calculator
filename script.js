// arithmetic functions to perform calculations
// added numArr2 = [] to empty the array to take the next num2 value.
function addition(x,y) {
  let addResult = x + y
  console.log(addResult)
  number1 = addResult
  console.log(`num1 is ${number1}`)
  const array = [addResult]
  display.textContent = (array.join(''))
  numArr2 = []
}
function subtraction(x,y) {
  let subtractResult = x - y
  console.log(subtractResult)
  number1 = subtractResult
  console.log(`num1 is ${number1}`)
  const array = [subtractResult]
  display.textContent = (array.join(''))
  numArr2 = []
}
function multiplication(x,y) {
  let multiplyResult = x * y
  console.log(multiplyResult)
  number1 = multiplyResult
  console.log(`num1 is ${number1}`)
  const array = [multiplyResult]
  display.textContent = (array.join(''))
  numArr2 = []
}
function division(x,y) {
  let divideResult = x / y
  console.log(divideResult)
  number1 = divideResult
  console.log(`num1 is ${number1}`)
  const array = [divideResult]
  display.textContent = (array.join(''))
  if(display.textContent == Infinity) {
    display.textContent = 'Its over 9000!!'
    setTimeout(() => {location.reload()}, 2100)
  }
  numArr2 = []
}

let buttons = document.querySelectorAll("button")
console.log(buttons)
const display = document.querySelector("#display")
console.log(display)

// operation variables to determine 
// when to run the loop for num1 and num2

let add = false
let subtract = false
let multiply = false
let divide = false

// loop to get the value of num1 via display and make it global

const numArr = []
let number1 = 0
for(let i=0;i<=9;i++) {
  buttons.item(i).addEventListener('click', () => {
    if (!add && !subtract && !multiply && !divide) {
      numArr.push(buttons.item(i).textContent)
      display.textContent = (numArr.join(''))
      const num1 = parseInt(display.textContent)
      number1 = num1
      console.log(`num1 is ${number1}`)
      console.log(add)
    }
  })
}

// these listeners are used to set the operator variables true 
// depending on which button was clicked. Also sets the color of that button to orange
// add in if statements that allow user to chain operations
// Operations are chained by adding conditions for each operation.
// if one operation is true alongside one more then the first operator 
// automatically calculates the first pair of operation e.g., 1+2 is a pair

buttons.item(10).addEventListener('click', () => {
  if(display.textContent != '0') {
    add = true;
    console.log( `add is ${add}`)    
  }
  if(add) {
    buttons.item(10).style.backgroundColor = '#FFC480';
  }
  if(subtract) {
    subtract = false
    buttons.item(11).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    subtraction(number1, number2)
  }
  if(multiply) {
    multiply = false
    buttons.item(12).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    multiplication(number1, number2)
  }
  if(divide) {
    divide = false
    buttons.item(13).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    division(number1, number2)
  }
})
buttons.item(11).addEventListener('click', () => {
  if(display.textContent != '0') {
    subtract = true;
    console.log( `subtract is ${subtract}`)   
  }
  if(subtract) {
    buttons.item(11).style.backgroundColor = '#FFC480';
  }
  if(add) {
    add = false
    buttons.item(10).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    addition(number1, number2)
  }
  if(multiply) {
    multiply = false
    buttons.item(12).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    multiplication(number1, number2)
  }
  if(divide) {
    divide = false
    buttons.item(13).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    division(number1, number2)
  }
})
buttons.item(12).addEventListener('click', () => {
  if(display.textContent != '0') {
    multiply = true;
    console.log( `multiply is ${multiply}`)   
  }
  if(multiply) {
    buttons.item(12).style.backgroundColor = '#FFC480';
  }
  if(add) {
    add = false
    buttons.item(10).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    addition(number1, number2)
  }
  if(subtract) {
    subtract = false
    buttons.item(11).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    subtraction(number1, number2)
  }
  if(divide) {
    divide = false
    buttons.item(13).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    division(number1, number2)
  }
})
buttons.item(13).addEventListener('click', () => {
  if(display.textContent != '0') {
    divide = true;
    console.log( `divide is ${divide}`)   
  }
  if(divide) {
    buttons.item(13).style.backgroundColor = '#FFC480';
  }
  if(add) {
    add = false
    buttons.item(10).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    addition(number1, number2)
  }
  if(subtract) {
    subtract = false
    buttons.item(11).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    subtraction(number1, number2)
  }
  if(multiply) {
    multiply = false
    buttons.item(12).style.backgroundColor = '#c79fd1f8';
    console.log(add)
    multiplication(number1, number2)
  }
})

// loop to get the value of num2 via display and make it global
// numArr2 is declared with let so that it can be reassigned as empty 
// to reset number2 and let it take the next value
let numArr2 = []
let number2 = 0;
for(let i=0;i<=9;i++) {
  buttons.item(i).addEventListener('click', () => {
    if (add || subtract || multiply || divide) {
      display.textContent = '';
      numArr2.push(buttons.item(i).textContent)
      display.textContent = (numArr2.join(''))
      const num2 = parseInt(display.textContent)
      number2 = num2
      console.log(`num2 is ${number2}`) 
    }     
  })
}


// when pressed the equals button sets the operator variables as false to start over
// calls the arithmetic functions from before.
// rests the color of the operator buttons from orange (when clicked) to default
buttons.item(14).addEventListener('click', () => {
  console.log('equals')
  !add
  !subtract
  !multiply
  !divide
  
  if(add) {
    addition(number1, number2)
  }
  if(subtract) {
    subtraction(number1, number2)
  }
  if(multiply) {
    multiplication(number1, number2)
  }
  if(divide) {
    division(number1, number2)
  }
  for(let i=10;i<=13;i++) {
    buttons.item(i).style.backgroundColor = '#EFEFEF';
  }
  console.log(numArr2)
  numArr2 = []
  console.log(numArr2)
})

buttons.item(15).addEventListener('click', () => {
  location.reload();
})