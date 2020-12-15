
const randomNumber1 = Math.floor((Math.random() * 6) + 1);
const randomNumber2 = Math.floor((Math.random() * 6) + 1);
let winnerTxt = "Draw!";

if (randomNumber1 > randomNumber2) {
  winnerTxt = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  winnerTxt = "Player 2 Wins!🚩";
}

document.querySelector('.img1').setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector('.img2').setAttribute("src", "images/dice" + randomNumber2 + ".png");
document.querySelector('h1').textContent = winnerTxt;
