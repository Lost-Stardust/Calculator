/* create arithmetic functions */
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

/*select all buttons and the display*/ 
let buttons = document.querySelectorAll("button")
console.log(buttons)
const display = document.querySelector("#display")
console.log(display)

/*add event listener to all the number buttons and 
store the number clicked in a array and display it*/
const numArr = []
for(let i=0;i<=9;i++) {
  buttons.item(i).addEventListener('click', () => {
    numArr.push(buttons.item(i).textContent)
    console.log(numArr.join(''))
    display.textContent = (numArr.join(''))
  })
}