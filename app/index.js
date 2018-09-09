// Create a var to store the index
var bigCount = -1;
var littleCount = -1;

function currentBot() {
  var bigBot = $('main section');
  var bigBotLength = bigBot.length - 1;
	
  var littleBot = $('nav section');
  var littleBotLength = littleBot.length - 1;
  //Check if the actual item isn't more than the length then add 1 otherway restart to 0
  bigCount < bigBotLength ? bigCount++ : bigCount=0;
  littleCount < littleBotLength ? littleCount++ : littleCount=0;
  //Remove the class and add it to the new target
  bigBot.removeClass('current').eq(bigCount).addClass('current');
  littleBot.removeClass('current').eq(littleCount).addClass('current');
}


$(document).ready(function() {
	
	setInterval(currentBot, 5000);

});