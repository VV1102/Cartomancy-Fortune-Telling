 var predictions = [
                      
                        //Spades predictions
                        
                        "Ace of spades: represents death, but rarely physical death. Rather endings and new beginnings, or an important decision that causes worry and anxiety",
                        "2 of spades: betrayal, conflict, disagreement, resentment, separation, or bad news",
                        "3 of spades: deception, lies, dishonesty, cheating, loss, confusion, and misunderstanding",
                        "4 of spades: sickness, confinement, exhaustion, or an unhealthy situation",
                        "5 of spades: anger, abandonment, depression, separation, loss, or sorrow",
                        "6 of spades: completion, permanent ending, moving forward",
                        "7 of spades: bad luck, loss, unexpected trouble, addiction, a setback",
                        "8 of spades: anger, disappointment, a wound, or an imbalance",
                        "9 of spades: failure, sadness, struggle, malice, grief, or serious injury",
                        "10 of spades- misfortune, tragedy, ruin, darkness",
                        "Jack of spades: usually a young male who is emotionally immature or erratic, and is someone to be wary of",
                        "Queen of spades- a divorced or widowed woman, who is intelligent, ambitious, and can be deceitful or cunning",
                        "King of spades- a man of authority who may be divorced or widowed, is usually older, and can be emotionally controlling or possessive",
           
                        //Clubs predictions
                        
                        "Ace of clubs: a new business venture, important legal processes, or the signing of a document or contract",
                        "2 of clubs: a new social or business correspondence, may lead to gossip",
                        "3 of clubs: advancement or growth opportunities, a partnership involving three people",
                        "4 of clubs: possible backstabbing from an unexpected place",
                        "5 of clubs: change in work or social situations, meeting a new friend",
                        "6 of clubs: improvement or success, progress or completion of a business or social goal",
                        "7 of clubs: changes in a business or social matter that require attention to detail",
                        "8 of clubs: potential difficulties in work or career",
                        "9 of clubs: luck, new opportunities",
                        "10 of clubs: travel, perhaps relating to business",
                        "Jack of clubs: a sincere and hardworking friend who can be trusted, usually a young male",
                        "Queen of clubs: a woman in business, or a co-worker, a confident woman",
                        "King of clubs: a successful and kind businessman",
                        
                        
                        //Hearts predictions
                        
                        "Ace of hearts: happiness, the start of a new relationship, positive energy",
                        "2 of hearts: love and affection, success in relationships",
                        "3 of hearts: a new relationship that requires caution",
                        "4 of hearts: change approaching, the return of an old partner",
                        "5 of hearts: jealousy or resentment from someone",
                        "6 of hearts: an unexpected new relationship",
                        "7 of hearts: a second chance, steady or peaceful surroundings",
                        "8 of hearts: working together with someone, an unexpected visitor",
                        "9 of hearts: wishes, desires, or dreams fulfilled",
                        "10 of hearts: success, fulfillment, and good fortune",
                        "Jack of hearts: a young man who you’re close with, such as a brother, son, or boyfriend",
                        "Queen of hearts: a kind blonde woman, such as a sister, aunt, wife, or mother",
                        "King of hearts: a blonde man in your life who is caring, possibly paternal",
           
           
                        //Diamonds predictions
                        
                        "Ace of diamonds: a new beginning, a message, a gift, an engagement",
                        "2 of diamonds: making or receiving payment, disapproval or denial",
                        "3 of diamonds: poor focus or commitment, instability, legal issues",
                        "4 of diamonds: gaining financial stability, unexpected gift or payment",
                        "5 of diamonds: improvement in your personal space, home, or career and positive energy",
                        "6 of diamonds: poor communication, jealousy, relationship issues",
                        "7 of diamonds: earned success or financial achievement",
                        "8 of diamonds: time for planning or caution",
                        "9 of diamonds: surprise payment, bonus, or compensation",
                        "10 of diamonds: success and prosperity, good fortune, wealth",
                        "Jack of diamonds: an unreliable person, possibly a family member",
                        "Queen of diamonds: a successful and financially well-off woman",
                        "King of diamonds: an accomplished and wealthy man",
                        
       ];

var threeReadingsButton = $('#three');
var nineReadingsButton = $('#nine');
var lightCandleButton = $('#oncandle');
var blowOutCandleButton = $('#offcandle');
var reading = $('#reading');
var readingOne = $('#reading1');
var readingTwo = $('#reading2');
var readingThree = $('#reading3');
var readingFour = $('#reading4');
var readingFive = $('#reading5');
var readingSix = $('#reading6');
var readingSeven = $('#reading7');
var readingEight = $('#reading8');
var readingNine = $('#reading9');
var name = $('.name-input').val();

threeReadingsButton.on("click", showThreeReadingFortune);
nineReadingsButton.on("click", showNineReadingFortune);
lightCandleButton.on("click", lightCandle);
blowOutCandleButton.on("click", blowOutCandle);

function lightCandle(){
  document.getElementById("candle").src = "https://www.clipartkey.com/mpngs/m/285-2857726_transparent-waxing-clipart-candle-clipart.png";
}

function blowOutCandle(){
  document.getElementById("candle").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/768px-Solid_black.svg.png";
  reading.text("Your reading is..."); 
readingOne.text("...");
readingTwo.text("...");
readingThree.text("...");
readingFour.text("...");
  readingFive.text("...");
  readingSix.text("...");
  readingSeven.text("...");
  readingEight.text("...");
  readingNine.text("...");
}




function showThreeReadingFortune(){

  var name = $('.name-input').val();

  var predictionSelect = Math.random()*predictions.length;
var predictionCool = Math.floor(predictionSelect);
var predictionRound = predictions[predictionCool];
 
 
reading.text(name + " Your reading is..."); 
readingOne.text(predictionRound);

 predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
readingTwo.text(predictionRound);

 predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
readingThree.text(predictionRound);

  
  
}

function showNineReadingFortune(){

  var name = $('.name-input').val();
  
 var predictionSelect = Math.random()*predictions.length;
var predictionCool = Math.floor(predictionSelect);
var predictionRound = predictions[predictionCool];
  

   
reading.text(name + " Your reading is..."); 
readingOne.text(predictionRound);
  
  predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
readingTwo.text(predictionRound);

   predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
readingThree.text(predictionRound);

   predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
readingFour.text(predictionRound);

   predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
  readingFive.text(predictionRound);

 predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
  readingSix.text(predictionRound);

 predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
  readingSeven.text(predictionRound);

 predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
  readingEight.text(predictionRound);

 predictionSelect = Math.random()*predictions.length;
  predictionCool = Math.floor(predictionSelect);
predictionRound = predictions[predictionCool];
  
  
  readingNine.text(predictionRound);



}
