// get all the elemetns

// d for dealer and p for player initials
var deal = document.getElementById('deal');
var stop = document.getElementById('stop');

var stand = document.getElementById('stand');
var hit = document.getElementById('hit');

const suits = ["S", "C", "H", "D"]
const names = [
    "A","2","3","4","5","6","7",
    "8","9","10","J","Q","K"
  ]

  
function AddUserScore(valueToEnter , deler){
    $('.score-you p').remove();
    $('.score-dealer p').remove();
   $('.score-you').append("<p>" + valueToEnter + "</p>");
   $('.score-dealer').append("<p>" + deler + "</p>");
}


// add listeners

deal.addEventListener('click' , (e)=>{
    $('li').remove();
    $('.score-you p').remove();
    $('.score-dealer p').remove();
    playGame();
})

// stop.addEventListener('click' , ()=>{
//     $('li').remove();
//     $('.score-you p').remove();
//     $('.score h1').remove();
//     $('.dealer').css("height", "96px");
// })

hit.addEventListener('click' , ()=>{
    playerHand.hitMe("p");
    res = firstResultChecker();
    addUserScore(res , dealerHand.score());

    if(isNumeric(res)){
        ShowBTNS();
    } else {
        hideBTNS();
    }

    // console.log(res)
})

stand.addEventListener('click' , ()=>{
    while(dealerHand.score() < 17){
        countingDealersCards = 0;
        dealerHand.hitMe("b");
    }
    console.log("Delaer Scoere is  "+dealerHand.score());
    // get current resulsts
    res = finalResultChecker();
    $('.dealer li').remove();
    console.log("hety the  "+res)
    revealDealerHandValue(dealerHand);
    addUserScore(res , dealerHand.score());
    if(isNumeric(res)){
        ShowBTNS();
    } else {
        hideBTNS();
    }

})

// get all folders images into an array
// var to hold decks
class Deck {
    constructor(cards = InitCard(suits , names)) {
      this.cards = cards;
      this.ReshuffleCards();
    }

    ReshuffleCards() {
        for(let i = this.cards.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp
          }

}
        pop() {
            return this.cards.shift()
        }
        getLength(){
            return this.cards.length
        }
}
class Card {
    constructor(name , suit , path) {
      this.suit = suit
      this.name = name
      this.path = path
    }

    getSuit(){
		return this.suit;
	};
	getNumber(){
		return this.name;
	};
	getValue(){
        if (this.name === "J" || this.name === "Q" || this.name === "K") {
            return 10;
        } else if (this.name === "A") {
            return 11;
        } else {
            return parseInt(this.name);
        }
	}

    getPath(){
        return this.path;
    }

  }

//   create cards
function InitCard(suits , names) {
    return suits.flatMap(suit => {
      return names.map(name => {
        return new Card(name ,suit, "cards/PNG/"+name+suit+".png")
      })
    })
  }


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  

function ShowBTNS(){
    hit.style.visibility = "visible";
    stand.style.visibility = "visible";
  }
  
function hideBTNS(){
    hit.style.visibility = "hidden";
    stand.style.visibility = "hidden";
  }
function Deal(isWho){
    // console.log("hiiit")
	var newCard = myDeck.pop();
    // console.log(newCard)
	if(isWho == "b"){
		countingDealersCards+= 1;
	}
	// I would like to automate the correct div selection, but it dosn't work for now.
	if(isWho == "p"){
        // console.log(newCard.getPath())
        // console.log("this is the new path of the game   "+newCard.path);
        $('.you ul').prepend('<li><img src = '+ newCard.path +'></li>');
	} else if(isWho == "b" && countingDealersCards < 2) {
		$('.dealer').css("height", "");
		$('.dealer ul').prepend('<li><img src = '+ newCard.path +'></li>');
	} else if(isWho == "b" && countingDealersCards == 2){
		$('.dealer ul').prepend('<li><img src = '+ "cards/PNG/blue_back.png" +'></li>');
	}
	return newCard;
};



//Hand Object is keeping the score
function WhatInHand(isWho, howManyCards){
	var isPlaying = isWho;
	var cardArray = [];
	for(i = 0; i < howManyCards; i++) {
    cardArray[i] = Deal(isPlaying);
	}
	this.getWhatInHand = function() {
    return cardArray;
	};

	this.score = function(){
		var handSum = 0;
		var numofaces = 0;
		for(i=0;i<cardArray.length;i++){
			handSum += cardArray[i].getValue();
			if(cardArray[i].getNumber() === 1){
        		numofaces+=1;
        	}
        }
    	if(handSum > 21 && numofaces!=0){
    		for(i=0;i<numofaces;i++){
    			if(handSum > 21){
    				handSum-=10;
    			}
    		}
    	}
        return handSum;
	};
	this.printHand = function(){
		var string = "";
        var mysuits = [];
		for(i=0;i<cardArray.length;i++){
            mysuits.push(cardArray[i].getNumber())
		}
		return mysuits;
	};

	this.hitMe = function(isWho){
    cardArray.push(Deal(isWho));
	this.getWhatInHand();
	};
}


function addUserScore(input , dealer){
    $('.score-you p').remove();
    $('.score-dealer p').remove();
   $('.score-you').append("<p>" + input + "</p>");
   $('.score-dealer').append("<p>" + dealer + "</p>");

}
function GameBegginer(){
	dealerHand = new WhatInHand("b", 2);
	playerHand = new WhatInHand("p", 2);
	res = firstResultChecker();
	addUserScore(res , dealerHand.score());
    console.log(dealerHand.getWhatInHand()[0]);
    if(isNumeric(res)){
		ShowBTNS();
	} else {
		hideBTNS();
	}
};

function finalResultChecker(){
    // console.log("Hi");
    // console.log(dealerHand.printHand())
	var playerScores = playerHand.score();
	var dealerScores = dealerHand.score();

    if(playerScores ===21){
        return "You Won";
    }
    else if(playerScores > 21){
        return "you burst";
    }
    else if(dealerScores === 21){
        return "You Lost";
    }
    else if(dealerScores > 21){
        return "You win";
    }
    if (dealerScores >= 17 && playerScores > dealerScores && playerScores < 21) {
        return "You win";
    }
    if (dealerScores >= 17 && playerScores < dealerScores && dealerScores < 21) {
       return "you lost";
    }
    if (dealerScores >= 17 && playerScores === dealerScores && dealerScores < 21) {
        return "You tired";
    }
    else{
        return "you lost";
    }
    console.log("Hi there")
    console.log("Dealer has "+ dealerScores );
    console.log("Player has "+ playerScores );

 };

function firstResultChecker(){
	playerScores = playerHand.score();
	dealerScores = dealerHand.score();
	if(playerScores > 21){
      	if( dealerScores >21){
          	return "Push";
      	}
      	else{
      	return "Bust";
      	}
  	}
  	else if(dealerScores>21){
    	return "Win";
 	}
 	else if(playerScores===21){
 		return "Black Jack";
 	}
  	else{
      	return playerScores;
  	}
 };

  function revealDealerHandValue(hand){
	var hand = hand.getWhatInHand();

    console.log("This is the   "+hand)
	for(i=0;i<hand.length;i++){
		$('.dealer ul').prepend('<li><a href="#"><img src='+hand[i].path +'></a></li>');
	}
}



// mydeck = new Deck();
// create decks
let myDeck = new Deck();
console.log("hsguh")
var playGame = function(){
	// var igameDeck = new Deck();
	countingDealersCards = 0;
	GameBegginer();
};
