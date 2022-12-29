// create arithmetic functions 

function add(x,y) {
  let addResult = x + y
  return addResult
}
function subtract(x,y) {
  let subtractResult = x - y
  return subtractResult
}
function multiply(x,y) {
  let multiplyResult = x * y
  return multiplyResult
}
function divide(x,y) {
  let divideResult = x / y
  return divideResult
}

// select all buttons and the display

let buttons = document.querySelectorAll("button")
console.log(buttons)
const display = document.querySelector("#display")
console.log(display)

// add event listener to all the number buttons and display them

const numArr = []
for(let i=0;i<=9;i++) {
  buttons.item(i).addEventListener('click', () => {
    numArr.push(buttons.item(i).textContent)
    display.textContent = (numArr.join(''))
  })
}

// for loop that loops through the operator buttons
// stores the value on display on operator click
// uses global variable to get the value out of scope

let number1 = 0
for(let i=9;i<=13;i++) {
  buttons.item(i).addEventListener('click', () => {
    const num1 = display.textContent
    console.log(num1)
    number1 = num1
    console.log(number1)
  })
}