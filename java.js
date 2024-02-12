let i = 0;
function playRound(playerSelection, computerSelection) {
  // your code here!

  if (playerSelection == computerSelection) {
    alert(`You tied with ${playerSelection}`);
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    alert(`You lost to ${computerSelection}`);
  } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
    alert(`You won with ${playerSelection}`);
  } else if (playerSelection == computerSelection) {
    alert(`You tied with ${playerSelection}`);
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    alert(`You lost to ${computerSelection}`);
  } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
    alert(`You won to ${playerSelection}`);
  } else if (playerSelection == computerSelection) {
    alert(`You tied with ${playerSelection}`);
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    alert(`You lost to ${computerSelection}`);
  } else if (computerSelection == "Rock" && playerSelection == "Paper") {
    alert(`You won with ${playerSelection}`);
  } else {
    alert(`Invalid please try again you put ${playerSelection}`);
  }
}

function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3) + 1;

  if (computer == 1) {
    return "Rock";
  } else if (computer == 2) {
    return "Scissors";
  } else {
    return "Paper";
  }
}
do {
  const player = prompt(
    "Welcome to rock paper scissors, just say rock,paper or scissors"
  );
  const playerSelection =
    player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));

  let replay = prompt(`Do you want to keep playing? y or n`);
  if (replay == "y") {
    i += 1;
  } else {
    break;
  }
} while (i < 5);
