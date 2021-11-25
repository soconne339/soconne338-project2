// JavaScript Document]

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const clear = document.querySelector("#clear");
const computerScore = document.querySelector("#compS");
const userScore = document.querySelector("#userS");
const userChoice = document.getElementById("user_choice");
const computerChoice = document.getElementById("computer_choice");
const win = document.querySelector("#win");
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

function startTheGame() {
  document.getElementsByClassName("wrapper")[0].classList.add("showgame");
  document.getElementById("startgame").classList.add("hidegame");
  document.getElementById("icons").classList.add("hidegame");
}

clear.addEventListener("click", () => {
  computerScore.innerText = 0;

  userScore.innerText = 0;
  win.innerHTML = "";
  userChoice.textContent = "....";
  computerChoice.textContent = "....";
});

function updateComputerScore() {
  let compscore = computerScore.textContent;

  let compscoreInt = parseInt(compscore);

  compscoreInt++;

  computerScore.innerText = compscoreInt;

  return compscoreInt;
}

function updateUserScore() {
  const userscore = userScore.textContent;
  let userscoreInt = parseInt(userscore);

  userscoreInt++;

  userScore.innerText = userscoreInt;

  return userscoreInt;
}

function randomInt(max) {
  const rndchoice = Math.random() * max;

  return Math.floor(rndchoice);
}

function computerSelection() {
  const choices = [ROCK, PAPER, SCISSORS];

  const rndChoice = randomInt(choices.length);

  return choices[rndChoice];
}

const onclickHandler = (e) => {
  const userAnswer = e.currentTarget.dataset.id;
  userChoice.innerHTML = userAnswer;

  const computerSel = computerSelection();
  computerChoice.innerHTML = computerSel;

  whoWins(userAnswer, computerSel);

  return userAnswer;
};

rock.addEventListener("click", onclickHandler);
paper.addEventListener("click", onclickHandler);
scissors.addEventListener("click", onclickHandler);

function whoWins(userAnswer, computer_choice) {
  if (userAnswer === ROCK && computer_choice === ROCK) {
    win.innerHTML = "Draw!";
  } else if (userAnswer === ROCK) {
    if (computer_choice === SCISSORS) {
      win.innerHTML = "User Wins!";
      updateUserScore();
    } else {
      win.innerHTML = "Computer Wins!";
      updateComputerScore();
    }
  }

  if (userAnswer === PAPER && computer_choice === PAPER) {
    win.innerHTML = "Draw!";
    updateComputerScore();
  } else if (userAnswer === PAPER) {
    if (computer_choice === ROCK) {
      win.innerHTML = "User Wins!";
      updateUserScore();
    } else {
      win.innerHTML = "Computer Wins!";
      updateComputerScore();
    }
  }

  if (userAnswer === SCISSORS && computer_choice === SCISSORS) {
    win.innerHTML = "Draw!";
  } else if (userAnswer === SCISSORS) {
    if (computer_choice === PAPER) {
      win.innerHTML = "User Wins!";
      updateUserScore();
    } else {
      win.innerHTML = "Computer Wins!";
      updateComputerScore();
    }
  }
}
