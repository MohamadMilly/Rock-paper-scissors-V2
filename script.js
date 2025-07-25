/* step 1 was creating the HTML file */

// step 2: computerChoice function
function getComputerChoice() {
  const probability = Math.random() * 3;
  if (probability < 1) {
    return "rock";
  } else if (probability < 2) {
    return "paper";
  }
  return "scissors";
}

//step 3 : getHumanChoice function
function getHumanChoice() {
  let humanChoice = prompt(`
    Enter Your Choice : 
    - Paper 
    - Rock
    - Scissors

    
    `);
  if (!humanChoice) {
    alert("Cancelled or empty input , try again.");
    return getHumanChoice();
  }

  humanChoice = humanChoice.toLowerCase().trim();

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    alert("Enter a valid value !");
    return getHumanChoice();
  }
}

// step 4 : scores variables
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
// step 5 : the logic to play one single round
function playRound() {
  alert(`Round ${currentRound} , Go !`);
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    currentRound++;
    alert("You Won This Round !");
  } else if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    currentRound++;
    alert("Draw !");
  } else {
    computerScore++;
    currentRound++;
    alert("Computer Won This Round");
  }
}
// step 6 : the game function
function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    alert("You Won The Game !");
    return;
  }
  alert("You Lost The Game :(");
  const playAgainConfirm = confirm("Do You Want To Play Again ?");
  if (playAgainConfirm) {
    resetGame();
    playGame();
  }
}

// launch game
playGame();

function resetGame() {
  // (optional)
  currentRound = 1;
  humanScore = 0;
  computerScore = 0;
}
