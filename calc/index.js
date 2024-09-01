

let display = document.querySelector('.display');
let button = document.querySelectorAll('button');
let oparetor = document.querySelectorAll('.oparetor');

function calculate() {
      display.textContent = eval(display.textContent)
}

function defaultvalue() {
      display.textContent = '0'
}

function number(value)  {
      if (display.textContent === '0') {
            display.textContent = value ;
      }
      else{
            display.textContent += value ;
      }
}

function deleteNumer() {
      display.textContent = display.textContent.slice(0 , -1)
}