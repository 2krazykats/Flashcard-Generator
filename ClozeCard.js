function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;	
}


ClozeCard.prototype.clozer = function() {
	console.log(this.cloze);
}

ClozeCard.prototype.fullText = function() {
	console.log(this.text);
}

ClozeCard.prototype.partial = function() {
	try {
	const replacedText = this.text.replace(this.cloze, "...");
	console.log(replacedText);
	} catch(err) {
		console.log("This doesn't work");
	}
}

module.exports = ClozeCard;