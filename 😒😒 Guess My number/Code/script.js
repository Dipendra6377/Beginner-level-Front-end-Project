let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = document.querySelector(".highscore").textContent;
document.querySelector(".check").addEventListener(
  "click",
  function () {
    const guess = Number(document.querySelector(".guess").value);
    //console.log(guess, typeof guess);  // typeof tell data type of variable
    if (!guess) {
      document.querySelector(".message").textContent = "🚫🚫 No number";
    } else if (guess == number) {
      document.querySelector(".message").textContent =
        "🥳🎆 Congo correct guess";
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        document.querySelector(".highscore").textContent = score;
      }
    } else if (score !== number) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > number ? "📈 Too high !!" : "📉 Too low !!";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😒😒You Lost!! Try again !!";
        score = 20;
        document.querySelector(".score").textContent = score;
        document.querySelector(".highscore").textContent = 0;
      }
    }
  }
  //   else if (guess > number) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too high !!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "😒😒You Lost!! Try again !!";
  //       score = 20;
  //       document.querySelector(".score").textContent = score;
  //       document.querySelector(".highscore").textContent = 0;
  //     }
  //   } else if (guess < number) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too low !!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "😒😒You Lost!! Try again !!";
  //       score = 20;
  //       document.querySelector(".score").textContent = score;
  //       document.querySelector(".highscore").textContent = 0;
  //     }
  //   }
);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing ...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
