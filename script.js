// create arithmetic functions 

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

// select all buttons and the display

let buttons = document.querySelectorAll("button")
console.log(buttons)
const display = document.querySelector("#display")
console.log(display)

let add = false
let subtract = false
let multiply = false
let divide = false

// add event listener to all the number buttons and display them

const numArr = []
let number1 = 0

if((add == false ) && (multiply == false) 
&& (divide == false) && (subtract == false)) {
  for(let i=0;i<=9;i++) {
    buttons.item(i).addEventListener('click', () => {
      numArr.push(buttons.item(i).textContent)
      display.textContent = (numArr.join(''))
      const num1 = display.textContent
      number1 = num1
      console.log(`num1 is ${number1}`)
      console.log(add)
    })
  }
}
// for(let i=0;i<=9;i++) {
//   buttons.item(i).addEventListener('click', () => {
//     numArr.push(buttons.item(i).textContent)
//     display.textContent = (numArr.join(''))
//     const num1 = display.textContent
//     number1 = num1
//     console.log(`num1 is ${number1}`)
//     console.log(add)
//   })
// }

// for loop that loops through the operator buttons
// stores the value on display on operator click
// uses global variable to get the value out of scope


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
    getNum2()
  }
})
buttons.item(11).addEventListener('click', () => {
  if(display.textContent != '0') {
    subtract = true;
    console.log( `subtract is ${subtract}`)
    getNum2()
  }
})
buttons.item(12).addEventListener('click', () => {
  if(display.textContent != '0') {
    multiply = true;
    console.log( `multiply is ${multiply}`)
    getNum2()
  }
})
buttons.item(13).addEventListener('click', () => {
  if(display.textContent != '0') {
    divide = true;
    console.log( `divide is ${divide}`)
    getNum2()
  }
})

const numArr2 = []
let number2 = 0;
function getNum2() {
  if((add == true ) || (multiply == true) 
  || (divide == true) || (subtract == true)) {
    console.log('it works, kinda')
    for(let i=0;i<=9;i++) {
      buttons.item(i).addEventListener('click', () => {
        display.textContent = '';
        numArr2.push(buttons.item(i).textContent)
        display.textContent = (numArr2.join(''))
        const num2 = display.textContent
        number2 = num2
        console.log(`num2 is ${number2}`)      
      })
    }
  }
}