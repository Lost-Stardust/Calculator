// arithmetic functions to perform calculations

function addition(x,y) {
  let addResult = x + y
  console.log(addResult)
  number1 = addResult
  console.log(`num1 is ${number1}`)
  const array = [addResult]
  display.textContent = (array.join(''))
}
function subtraction(x,y) {
  let subtractResult = x - y
  console.log(subtractResult)
  number1 = subtractResult
  console.log(`num1 is ${number1}`)
  const array = [subtractResult]
  display.textContent = (array.join(''))
}
function multiplication(x,y) {
  let multiplyResult = x * y
  console.log(multiplyResult)
  number1 = multiplyResult
  console.log(`num1 is ${number1}`)
  const array = [multiplyResult]
  display.textContent = (array.join(''))
}
function division(x,y) {
  let divideResult = x / y
  console.log(divideResult)
  number1 = divideResult
  console.log(`num1 is ${number1}`)
  const array = [divideResult]
  display.textContent = (array.join(''))
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

 
buttons.item(10).addEventListener('click', () => {
  if(display.textContent != '0') {
    add = true;
    console.log( `add is ${add}`)    
  }
  if(add) {
    buttons.item(10).style.backgroundColor = '#FFC480';
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
})
buttons.item(12).addEventListener('click', () => {
  if(display.textContent != '0') {
    multiply = true;
    console.log( `multiply is ${multiply}`)   
  }
  if(multiply) {
    buttons.item(12).style.backgroundColor = '#FFC480';
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