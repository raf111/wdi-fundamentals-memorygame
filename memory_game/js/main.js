console.log("Up and running!");

var faces = []; //array to store card images
	 faces[0] = 'images/king-of-diamonds.png';
	 faces[1] = 'images/king-of-hearts.png';
	 faces[2] = 'images/queen-of-diamonds.png';
	 faces[3] = 'images/queen-of-hearts.png';

var cardsInPlay = [];

var checkForMatch = function(cardId) {
	if (faces[cardId] === faces[cardId+1]) {
	      console.log("You found a match!");
	  	} else {
	  	    console.log("Sorry, try again.");
	 	}
}

var flipCard = function(cardId,name) {

	document.getElementById('image1').src=faces[cardId]

	checkForMatch();
}







/* console.log("Up and running!");

var cards = [
	{
		rank: "queen", 
		suit: "hearts", 
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen", 
		suit: "diamonds", 
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts", 
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	      alert("You found a match!")
	  	} else {
	  	    alert("Sorry, try again.")
	 	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		document.createElement("img");
		img.src=cardImage[i].png;
	}
}

createBoard();
flipCard(0);
flipCard(2); */