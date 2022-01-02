let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let choice = ['rock', 'paper', 'scissors'];
  let random = Math.floor(Math.random() * 3);
  
  return choice[random];
}

function playerRound(playerSelect, computerSelect) {
  let result = '';
  let playerChoice = playerSelect.toLowerCase();

  
  if(playerChoice == computerSelect) {
    result = 'Tie';
  }

  if((playerChoice == 'rock' && computerSelect == 'scissors') ||
     (playerChoice == 'paper' && computerSelect == 'rock')    ||
     (playerChoice == 'scissors' && computerSelect == 'paper')) {
    
    playerScore++;
    result = 'Player Wins';
  }

  if((computerSelect == 'rock' && playerChoice == 'scissors') ||
     (computerSelect == 'paper' && playerChoice == 'rock')    ||
     (computerSelect == 'scissors' && playerChoice == 'paper')) {

    computerScore++;
    result = 'Computer Wins';
  }
 
  // console.log({playerChoice, computerSelect, result});
  return result;

}

function game() {
  let playerSelect = window.prompt('Rock, paper, scissors?');
  let computerSelect = computerPlay();
  
  console.log(playerRound(playerSelect, computerSelect), playerScore, computerScore);
}

game();
game();
game();
game();
game();
