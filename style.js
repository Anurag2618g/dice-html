var randomNum1 = Math.floor(Math.random() * 6) + 1;  // 1 -- 6

document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNum1 + ".png");

var randomNum2 = Math.floor(Math.random() * 6) + 1;  // 1 -- 6

document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNum2 + ".png");

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}