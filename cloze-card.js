var inquirer = require("inquirer");

var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.partial = partial;
    this.fullText = fullText;
    this.questions = inquirer.prompt([
        {type: "input",
        name: "card-text",
        message: "Write a statement for this card."
        }, {
        type: "input",
        name: "cloze-text",
        message: "What word or phrase do you want to remove?"
        }
    ]);
    this.card = function(){
        console.log(questions.inquirer.prompt[0].message);
        
        // if (!cloze) {
        //     console.log(err);
        // }

    }
};

card();
module.exports = ClozeCard;