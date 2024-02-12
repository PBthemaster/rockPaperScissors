let i = 0;
function playRound(playerSelection, computerSelection) {
  // your code here!

  if (playerSelection == computerSelection) {
    return `You tied with ${playerSelection}`;
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    return `You lost to ${computerSelection}`;
  } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
    return `You won with ${playerSelection}`;
  } else if (playerSelection == computerSelection) {
    return `You tied with ${playerSelection}`;
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    return `You lost to ${computerSelection}`;
  } else if (computerSelection == "Paper" && playerSelection == "Scissors") {
    return `You won to ${playerSelection}`;
  } else if (playerSelection == computerSelection) {
    return `You tied with ${playerSelection}`;
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    return `You lost to ${computerSelection}`;
  } else if (computerSelection == "Rock" && playerSelection == "Paper") {
    return `You won with ${playerSelection}`;
  } else {
    return `Invalid please try again you put ${playerSelection}`;
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

  let replay = prompt("Do you want to keep playing? y or n");
  if (replay == "y") {
    i += 1;
  } else {
    break;
  }
} while (i < 5);
