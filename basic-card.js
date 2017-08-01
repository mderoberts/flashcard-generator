

var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    this.cardBasic = function() {
        console.log("Front: " + this.front + "\nBack: " + this.back);
    };
};

var newBasic = new BasicCard("Who was the first president of the United States?", "George Washington");

newBasic.cardBasic();

// module.exports = BasicCard;