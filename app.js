const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice');
const reset = document.querySelector('#reset');
let userChoice;
let computerChoice;
let result;
reset.addEventListener('click', () => {
  location.reload()
})
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))



function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)

  switch (randomNumber) {
    case 1:
      computerChoice = 'rock'
      break;
    case 2:
      computerChoice = 'scissors'
      break;
    case 3:
      computerChoice = 'paper'
      break;
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  function greenColor() {
    resultDisplay.style.color = 'lightgreen';
    resultDisplay.innerHTML = 'you win!'
  }

  function redColor() {
    resultDisplay.style.color = 'red';
    resultDisplay.innerHTML = 'you lose!'
  }

  function drawColor() {
    resultDisplay.style.color = 'white';
    resultDisplay.innerHTML = 'its a draw!'
  }
  switch (true) {
    case (computerChoice === userChoice):
      drawColor()
      break;
    case (computerChoice === 'rock' && userChoice === "paper"):
      greenColor()
      break;
    case (computerChoice === 'rock' && userChoice === "scissors"):
      redColor()
      break;
    case (computerChoice === 'paper' && userChoice === "scissors"):
      greenColor()
      break;
    case (computerChoice === 'paper' && userChoice === "rock"):
      redColor()
      break;
    case (computerChoice === 'scissors' && userChoice === "rock"):
      greenColor()
      break;
    case (computerChoice === 'scissors' && userChoice === "paper"):
      redColor()
      break;
    default:
      resultDisplay.innerHTML = ''
  }
}

