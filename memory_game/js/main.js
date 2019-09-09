console.log("Up and running!");



var card = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = card[0];
var cardTwo = card[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo); 

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

console.log(cardsInPlay);

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match!")
	} else {
		alert("Sorry, try again")
	}
}


