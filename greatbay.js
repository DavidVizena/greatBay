var mysql = require('mysql');
var inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "list",
        message: "Would you like to Post an Item or Bid on an Item?",
        choices: ["Post an Item", "Bid on an Item"],
        name: "user"
    }
])


