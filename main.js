var basic = require("./BasicCard.js");
var advanced = require("./ClozeCard.js");

var newBasic = basic("Who was the first president of the United States?", "George Washington");

var newCloze = advanced("John Adams was the second president of the United States.", "John Adams");
var brokenCloze = new advanced("John Adams was the second president of the United States.", "George Washington");


console.log("This prints the front of the card for BasicCard:");
newBasic.showFront();

console.log("------------------------");
console.log("This prints the back of the card for BasicCard:");
newBasic.showBack();

console.log("------------------------");
console.log("This prints the full text for ClozeCard:");
newCloze.fullText();

console.log("------------------------");
console.log("This prints just the clozer of the card for ClozeCard:");
newCloze.clozer();

console.log("------------------------");
console.log("This prints the partial text for ClozeCard:");
newCloze.partial();

console.log("------------------------");
console.log("This prints the message when cloze is not found in the text:");
brokenCloze.partial();