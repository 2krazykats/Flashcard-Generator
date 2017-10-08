function ClozeCard(text, cloze) {
	if(!(this instanceof ClozeCard)) {
		return new ClozeCard(text,cloze);
	}
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
	const replacedText = this.text.replace(this.cloze, "...");
	if (this.text.includes(this.cloze) == true) {
	console.log(replacedText);
	} else {
		console.log("This doesn't work");
	}
}

module.exports = ClozeCard;