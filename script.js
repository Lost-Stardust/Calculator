/* create arithmetic functions */
function add(x,y) {
  let addResult = x + y
  return addResult
}
function subtract(x,y) {
  let subtractResult = x + y
  return subtractResult
}
function multiply(x,y) {
  let multiplyResult = x + y
  return multiplyResult
}
function divide(x,y) {
  let divideResult = x + y
  return divideResult
}

/*select all buttons*/ 
let buttons = document.querySelectorAll("button")
console.log(buttons)

/*add event listener to all the number buttons*/
let num1
for(let i=0;i<=9;i++) {
  buttons.item(i).addEventListener('click', () => {
    num1 = buttons.item(i).textContent
    console.log(num1)
  })
}