// create arithmetic functions 

function additon(x,y) {
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

let add = buttons.item(10)
let subtract = buttons.item(11)
let multiply = buttons.item(12)
let divide = buttons.item(13)


add.onclick = () => {
  add = true
  console.log(`add is ${add}`)
}
subtract.onclick = () => {
  subtract = true
  console.log(`subtract is ${subtract}`)
}
multiply.onclick = () => {
  multiply = true
  console.log(`multiply is ${multiply}`)
}
divide.onclick = () => {
  divide = true
  console.log(`divide is ${divide}`)
}
