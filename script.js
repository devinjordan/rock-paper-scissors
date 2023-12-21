const resultsArea = document.querySelector('.resultsArea');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function getComputerChoice() {
  random = Math.random();
  let computerSelection;
  if (random <= 0.333) {
    computerSelection = 'rock';
  } else if (random > 0.333 && random < 0.667) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissors';
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    informTie = document.createElement('p');
    informTie.textContent
    ('Tie game!');
    return('Tie game!');
  } else if (playerSelection == 'rock' && computerSelection == 'paper' || 
  playerSelection == 'paper' && computerSelection == 'scissors' || 
  playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log(`You lose the round! ${computerSelection} beats ${playerSelection}`);
    return false;
  } else {
    console.log(`You win the round! ${playerSelection} beats ${computerSelection}`);
    return true;
  }
}

rock.onclick = function () {
  playRound('rock', getComputerChoice());
}
paper.onclick = function () {
  playRound('paper', getComputerChoice());
}
scissors.onclick = function () {
  playRound('scissors', getComputerChoice());
}
