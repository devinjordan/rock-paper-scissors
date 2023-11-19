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
    console.log('Tie game!');
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i <5; i++) {
    let playerSelection;
    do {
      playerSelection = prompt("Make a choice: ");
      playerSelection = playerSelection.toLowerCase();
      if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        break;
      } else {
        console.log("Please enter a valid object...");
      }
    } while (true);

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result === 'Tie game!') {
      i--;
      continue;
    } else if (result) {
      playerScore++;
    } else {
      computerScore++;
    }

    // Win/Loss conditions
    if (playerScore === 3) {
      console.log("You've won the game!");
      break;
    } else if (computerScore === 3) {
      console.log('Game over! The computer has won.');
      break;
    }
  }
}

game();
