const userWindow = document.getElementById('user-choice');
const userText = document.getElementById('user-choice-text');
const computerWindow = document.getElementById('computer-choice');
const computerText = document.getElementById('computer-choice-text');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  console.log(userChoice);
  userText.innerHTML = userChoice;
  if(userChoice ===  'rock'){
    userWindow.innerHTML = '<img src="assets/icons8-fist-50-removebg-preview.png" height="50px" width="50px">';
  }
  if(userChoice ===  'paper'){
    userWindow.innerHTML = '<img src="assets/icons8-so-so-50-removebg-preview.png" height="50px" width="50px">';
  }
  if(userChoice ===  'scissor'){
    userWindow.innerHTML = '<img src="assets/icons8-hand-scissors-50-removebg-preview.png" height="50px" width="50px">';
  }
  
  generateComputerChoice();
  getResult();
  
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  
  if(randomNumber === 1){
    computerChoice = 'rock';
  }
  if(randomNumber === 2){
    computerChoice = 'paper';
  }
  if(randomNumber === 3){
    computerChoice = 'scissor';
  }
  
  computerText.innerHTML = computerChoice;
  if(computerChoice ===  'rock'){
    computerWindow.innerHTML = '<img src="assets/icons8-fist-50-removebg-preview.png" height="50px" width="50px">';
  }
  if(computerChoice ===  'paper'){
    computerWindow.innerHTML = '<img src="assets/icons8-so-so-50-removebg-preview.png" height="50px" width="50px">';
  }
  if(computerChoice ===  'scissor'){
    computerWindow.innerHTML = '<img src="assets/icons8-hand-scissors-50-removebg-preview.png" height="50px" width="50px">';
  }
}

function getResult() {
    if(computerChoice === userChoice){
      result = 'its a draw!';
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
      result = 'you win!';
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
      result = 'you lose!';
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
      result = 'you lose!';
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
      result = 'you win!';
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
      result = 'you lose!';
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
      result = 'you win!';
    }
    
    resultDisplay.innerHTML = result;
    if(result === 'you win!'){
      document.getElementById('user').style.backgroundColor= "#FFDE66";
      document.getElementById('computer').style.backgroundColor= "white";
    }
    if(result === 'you lose!'){
      document.getElementById('computer').style.backgroundColor= "#FFDE66";
      document.getElementById('user').style.backgroundColor= "white";
    }
   if(result === 'its a draw!'){
     document.getElementById('user').style.backgroundColor= "white";
     document.getElementById('computer').style.backgroundColor= "white";
   }
}