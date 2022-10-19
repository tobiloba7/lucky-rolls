let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

const button = document.querySelector(".btn");

const init = function () {
  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
};

button.addEventListener("click", function () {
  init();
  setTimeout(function () {
    window.location.reload();
  }, 2000);
});
