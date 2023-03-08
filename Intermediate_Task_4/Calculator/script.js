let screen = document.querySelector('.screen');

function appendToScreen(value) {
  screen.innerHTML += value;
}

function clearScreen() {
  screen.innerHTML = '';
}

function calculate() {
  let result = eval(screen.innerHTML);
  screen.innerHTML = result;
}
