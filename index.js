
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 --6
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

// Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var radnomImageSource2 =  "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", radnomImageSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "⛳ Player 1 Wins "
    + "Refresh to play again"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins ⛳ " + "Refresh to play again"
}
else{
    document.querySelector("h1").innerHTML = "Draw " + "Refresh to play again"
}