var basic = require("./BasicCard.js");
var advanced = require("./ClozeCard.js");

var newBasic = new basic("Who was the first president of the United States?", "George Washington");

newBasic.showFront();
newBasic.showBack();

var newCloze = new advanced("John Adams was the second president of the United States.", "John Adams");
var brokenCloze = new advanced("John Adams was the second president of the United States.", "George Washington");

newCloze.fullText();
newCloze.clozer();
newCloze.partial();
// brokenCloze.partial();