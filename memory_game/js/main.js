console.log("Up and running!");



var card = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, try again");
	}
};

function flipCard(cardId){

	console.log("User flipped " + card[cardId]);
	cardsInPlay.push(card[cardId]);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	};

};

flipCard(0);
flipCard(1);




