let button = document.querySelectorAll('.btn');
let player = document.querySelector('.player-score');
let computer = document.querySelector('.computer-score');
let winner_results = document.querySelector('.results h1');

let playerScore = 0;
let computerScore = 0;

player.textContent = playerScore;
computer.textContent = computerScore;

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
    result = 'Player beats Computer';
  }

  if((computerSelect == 'rock' && playerChoice == 'scissors') ||
     (computerSelect == 'paper' && playerChoice == 'rock')    ||
     (computerSelect == 'scissors' && playerChoice == 'paper')) {

    computerScore++;
    result = 'Computer beats Player';
  }

  winner_results.textContent = result;
  player.textContent = playerScore;
  computer.textContent = computerScore;

  checkWinner(playerScore, computerScore);
 
  // console.log({playerChoice, computerSelect, result});
  return result;

}

function checkWinner(player, computer) {
  if (player == 5)
    alert("Player Wins");

  if (computer == 5)
    alert("Computer Wins");
}

function game() {
  let playerSelect = window.prompt('Rock, paper, scissors?');
  let computerSelect = computerPlay();
  
  console.log(playerRound(playerSelect, computerSelect), playerScore, computerScore);
}

button.forEach(btn => {
  btn.addEventListener('click', () => {
    playerRound(btn.value, computerPlay())
  });
})