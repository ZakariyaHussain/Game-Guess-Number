
var numWon = 0;
var numLost = 0;
for (var x = 1; x <= 5; x++) {
    var num = parseInt(prompt("Enter your guess number form 1 to 5: "));
    var guessNum = Math.floor(Math.random(num) * 5 + 1);

    if (num == guessNum) {
        document.write("You won: Guess Number = " + guessNum + "<br>");
        numWon++;
    }else {
        document.write("You lost: Guess Number = " + guessNum + ", Your Num = " + num + "<br>");
        numLost++;
    }
    
}
document.write("Total Number of Won = " + numWon + "<br>");
document.write("Total Number of Lost = " + numLost);
