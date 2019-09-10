console.log("Up and running!");



var card = [{
			rank: "queen",
			suit: "hearts",
			cardImage: "images/queen-of-hearts.png"
		},
		{
			rank: "queen",
			suit: "diamonds",
			cardImage: "images/queen-of-diamonds.png"
		},
		{
			rank: "king",
			suit: "hearts",
			cardImage: "images/king-of-hearts.png"
		},
		{
			rank: "king",
			suit: "diamonds",
			cardImage: "images/king-of-diamonds.png"
		}
		];
var cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You've found a match!");
	} else {
		console.log("Sorry, try again");
	}
};

function flipCard(cardId){

	console.log("User flipped " + card[cardId].rank);
	console.log(card[cardId].suit);
	console.log(card[cardId].cardImage);

	cardsInPlay.push(card[cardId].rank);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	};



};

flipCard(0);
flipCard(3);




