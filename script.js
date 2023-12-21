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
    const informTie = document.createElement('p');
    informTie.textContent = "Tie game!";
    resultsArea.appendChild(informTie);
    return('Tie game!');
  } else if (playerSelection == 'rock' && computerSelection == 'paper' || 
  playerSelection == 'paper' && computerSelection == 'scissors' || 
  playerSelection == 'scissors' && computerSelection == 'rock') {
    const informLoss = document.createElement('p');
    informLoss.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    resultsArea.appendChild(informLoss);
    return false;
  } else {
    const informWin = document.createElement('p');
    informWin.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
    resultsArea.appendChild(informWin);
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
