

var mysql = require('mysql');
var inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "list",
        message: "Would you like to Post an Item or Bid on an Item?",
        choices: ["Post an Item", "Bid on an Item"],
        name: "bidMenu"
    }
], function (answers) {
    if (answers.bidMenu === "Post an Item") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the name of the item?",
                name: "itemName"
            },
            {
                type: "input",
                message: "Minimum bid?",
                name: "itemMinimum"
            }
        ], function (answers2) {
            someFunction(answers2.itemName, answers2.itemMinimum);
        })



    }
    else {


        var itemArray = getListOfItems();
        inquirer.prompt([
            {
                type: "list",
                choices: itemArray,
                message: "Select An Item",
                name: "itemName"
            }
        ], function (answers2) {

            inquirer.prompt([
                {
                    type: "input",
                    message: "What would you like to bid?",
                    name: "bid"
                }
            ], function (answers3) {

                someFunction(answers2.itemName, answers3.bid);
            })
        }
})


