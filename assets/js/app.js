// JavaScript Document]

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let clear = document.querySelector("#clear");

function startTheGame() {
  document.getElementsByClassName("wrapper")[0].classList.add("showgame");
  document.getElementById("startgame").classList.add("hidegame");
  document.getElementById("icons").classList.add("hidegame");
}

clear.addEventListener("click", () => {
  document.querySelector("#compS").innerText = 0;

  document.querySelector("#userS").innerText = 0;
});

function winnerAnnouncement() {
  let winner = document.querySelector("#win");

  return winner;
}

function updateComputerScore() {
  let compscore = document.querySelector("#compS").textContent;

  let compscoreInt = parseInt(compscore);

  compscoreInt++;

  document.querySelector("#compS").innerText = compscoreInt;

  return compscoreInt;
}

function updateUserScore() {
  let userscore = document.querySelector("#userS").textContent;

  let userscoreInt = parseInt(userscore);

  userscoreInt++;

  document.querySelector("#userS").innerText = userscoreInt;

  return userscoreInt;
}

function randomInt(max) {
  let rndchoice = Math.random() * max;

  return Math.floor(rndchoice);
}

function computerSelection() {
  let choices = ["Rock", "Paper", "Scissors"];

  let rndChoice = randomInt(choices.length);

  let computerChoice = choices[rndChoice];

  return computerChoice;
}

const onclickHandler = (e) => {
  let userAnswer = e.currentTarget.dataset.id;

  document.getElementById("user_choice").innerHTML = "";

  document.getElementById("computer_choice").innerHTML = "";

  document.getElementById("user_choice").append(userAnswer);

  let computer_choice = computerSelection();

  document.getElementById("computer_choice").append(computer_choice);

  whoWins(userAnswer, computer_choice);

  return userAnswer;
};

rock.addEventListener("click", onclickHandler);
paper.addEventListener("click", onclickHandler);
scissors.addEventListener("click", onclickHandler);

function whoWins(userAnswer, computer_choice) {
  const win = winnerAnnouncement();

  if (userAnswer === "Rock" && computer_choice === "Rock") {
    win.innerHTML = "";
    win.append("Draw!");
  } else if (userAnswer === "Rock") {
    if (computer_choice === "Scissors") {
      win.innerHTML = "";
      win.append("User Wins!");
      updateUserScore();
    } else {
      win.innerHTML = "";
      win.append("Computer Wins!");
      updateComputerScore();
    }
  }

  if (userAnswer === "Paper" && computer_choice === "Paper") {
    win.innerHTML = "";
    win.append("Draw!");
    updateComputerScore();
  } else if (userAnswer === "Paper") {
    if (computer_choice === "Rock") {
      win.innerHTML = "";
      win.append("User Wins!");
      updateUserScore();
    } else {
      win.innerHTML = "";
      win.append("Computer Wins!");
      updateComputerScore();
    }
  }

  if (userAnswer === "Scissors" && computer_choice === "Scissors") {
    win.innerHTML = "";
    win.append("Draw!");
  } else if (userAnswer === "Scissors") {
    if (computer_choice === "Paper") {
      win.innerHTML = "";
      win.append("User Wins!");
      updateUserScore();
    } else {
      win.innerHTML = "";
      win.append("Computer Wins!");
      updateComputerScore();
    }
  }
}
