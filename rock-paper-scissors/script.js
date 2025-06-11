let userScore = 0;
let computerScore = 0;

const handImages = {
  rock: "hand-rock.png",
  paper: "hand.png",
  scissors: "hand-scissors.png",
};

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const userHand = document.getElementById("user-hand");
  const compHand = document.getElementById("computer-hand");

  userHand.style.animation = "shake 0.5s";
  compHand.style.animation = "shake 0.5s";

  setTimeout(() => {
    // Update hand images
    userHand.innerHTML = `<img src="https://img.icons8.com/color/96/${handImages[userChoice]}" />`;
    compHand.innerHTML = `<img src="https://img.icons8.com/color/96/${handImages[computerChoice]}" />`;

    userHand.style.animation = "";
    compHand.style.animation = "";

    // Determine result
    let outcome = "";
    if (userChoice === computerChoice) {
      outcome = "🤝 It's a draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      outcome = "🎉 You Win!";
      userScore++;
    } else {
      outcome = "😢 You Lose!";
      computerScore++;
    }

    const resultMessage = `You chose <strong>${capitalize(userChoice)}</strong> — Computer chose <strong>${capitalize(computerChoice)}</strong> → ${outcome}`;

    document.getElementById("result").innerHTML = resultMessage;
    document.getElementById("score").innerText = `Score: You ${userScore} - ${computerScore} Computer`;
  }, 600);
}
