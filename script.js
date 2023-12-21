const resultsArea = document.querySelector('.resultsArea');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let computerScore = 0;
let playerScore = 0;

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

  } else if (playerSelection == 'rock' && computerSelection == 'paper' || 
  playerSelection == 'paper' && computerSelection == 'scissors' || 
  playerSelection == 'scissors' && computerSelection == 'rock') {
    const informLoss = document.createElement('p');
    informLoss.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}`;
    resultsArea.appendChild(informLoss);
    computerScore++;

  } else {
    const informWin = document.createElement('p');
    informWin.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
    resultsArea.appendChild(informWin);
    playerScore++;
  }

  if (playerScore === 5) {
    const informWonGame = document.createElement('p');
    informWonGame.textContent = "You've won the game!";
    informWonGame.style.color = 'green';
    resultsArea.appendChild(informWonGame);
  }

  if (computerScore === 5) {
    const informGameOver = document.createElement('p');
    informGameOver.textContent = "Game over! Better luck next time..."
    informGameOver.style.color = 'red';
    resultsArea.appendChild(informGameOver);
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
