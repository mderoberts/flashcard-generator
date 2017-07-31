var inquirer = require("inquirer");


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
