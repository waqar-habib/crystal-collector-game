/* PSEUDOCODE

1. Create global vars that can manipulated as need be
2. Generate random number b/w 30-100 for "the winning number"
3. Generate a random number as a value for each of the gem
4. Generate a function which empties out the existing values and appends the new values
5. Reset game function: generates new random numbers again
6. Main game function (gem collector) 
7. Add click events to gem images. Add score together to update total score. 
*/

// Global Vars

var wins = 0;
var losses = 0;
var total = 0;

// Generate The winning number

var winningNumber =  Math.floor(Math.random() * 70) + 30;
console.log(winningNumber);
$('#winningNumber').append(winningNumber);

// Generate random value of each crystal

var gem1 = Math.floor(Math.random() * 10) + 1;
var gem2 = Math.floor(Math.random() * 10) + 1;
var gem3 = Math.floor(Math.random() * 10) + 1;
var gem4 = Math.floor(Math.random() * 10) + 1;
console.log(gem1, gem2, gem3, gem4);

// Append total, wins and losses
$(document).ready(function () {

var newScore = function () {
    $('#wins').empty(); //keeps it from adding new numbers on the same line
    $('#wins').append(wins);

    $('#losses').empty();
    $('#losses').append(losses);

    $('#total').empty();
    $('#total').append(total);

}

// Reset Game function

var resetGame = function () {
    total = 0;
    winningNumber =  Math.floor(Math.random() * 70) + 30;
    console.log(winningNumber);

    $('#winningNumber').empty();
    $('#winningNumber').append(winningNumber);

    var gem1 = Math.floor(Math.random() * 10) + 1;
    var gem2 = Math.floor(Math.random() * 10) + 1;
    var gem3 = Math.floor(Math.random() * 10) + 1;
    var gem4 = Math.floor(Math.random() * 10) + 1;
    console.log(gem1, gem2, gem3, gem4);

    newScore();

}

// Gem Collector function

var collectGems = function() {
	if(total == winningNumber) {
		wins++;
		alert("You win!");
		resetGame();
	}
	else if (total > winningNumber) {
		losses++;
		alert("You Lost!");
		resetGame();
	}
	else {
		newScore();
	}

}

    $('#gem1').click(function(){
        total = total + gem1;
        collectGems();
    })

    $('#gem2').click(function(){
        total = total + gem2;
        collectGems();
    })

    $('#gem3').click(function(){
        total = total + gem3;
        collectGems();
    })

    $('#gem4').click(function(){
        total = total + gem4;
        collectGems();
    })
    
    $(".btn").on("click", function() {
        resetGame();
    });
    
});

