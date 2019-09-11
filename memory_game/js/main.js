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
		alert("You've found a match!");
	} else {
		alert("Sorry, try again");
	}
};

function flipCard(){
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + card[cardId].rank);
	console.log(card[cardId].suit);
	console.log(card[cardId].cardImage);

	cardsInPlay.push(card[cardId].rank);

	this.setAttribute("src", card[cardId].cardImage);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	};



};

function createBoard(){
	for(var i = 0; i < card.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
};

createBoard();


