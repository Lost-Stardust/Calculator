// arithmetic functions to perform calculations

function addition(x,y) {
  let addResult = x + y
  return addResult
}
function subtraction(x,y) {
  let subtractResult = x - y
  return subtractResult
}
function multiplication(x,y) {
  let multiplyResult = x * y
  return multiplyResult
}
function division(x,y) {
  let divideResult = x / y
  return divideResult
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
      const num1 = display.textContent
      number1 = num1
      console.log(`num1 is ${number1}`)
      console.log(add)
    }
  })
}

//Changes background color of operator buttons on click

for(let i=10;i<=13;i++) {
  buttons.item(i).addEventListener('click', () => {
    buttons.item(i).style.backgroundColor = '#FFC480';
    console.log(buttons.item(i).className)
  })
}

 
buttons.item(10).addEventListener('click', () => {
  if(display.textContent != '0') {
    add = true;
    console.log( `add is ${add}`)    
  }
})
buttons.item(11).addEventListener('click', () => {
  if(display.textContent != '0') {
    subtract = true;
    console.log( `subtract is ${subtract}`)   
  }
})
buttons.item(12).addEventListener('click', () => {
  if(display.textContent != '0') {
    multiply = true;
    console.log( `multiply is ${multiply}`)   
  }
})
buttons.item(13).addEventListener('click', () => {
  if(display.textContent != '0') {
    divide = true;
    console.log( `divide is ${divide}`)   
  }
})

// loop to get the value of num2 via display and make it global
const numArr2 = []
let number2 = 0;
for(let i=0;i<=9;i++) {
  buttons.item(i).addEventListener('click', () => {
    if (add || subtract || multiply || divide) {
      display.textContent = '';
      numArr2.push(buttons.item(i).textContent)
      display.textContent = (numArr2.join(''))
      const num2 = display.textContent
      number2 = num2
      console.log(`num2 is ${number2}`) 
    }     
  })
}

