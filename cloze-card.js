
var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.partial = text.split(cloze).pop();
    this.fullText = text;
    this.cardCloze = function(){
        if(!cloze) {
        console.log(err);
        }
        console.log("Full text: " + this.fullText + "\nCloze: " + this.cloze + "\nPartial: " + this.partial); 
    };
};

var gDubs = new ClozeCard("George Washington was the first president.", "George Washington");

gDubs.cardCloze();

// module.exports = ClozeCard;