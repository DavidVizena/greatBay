var mysql = require("mysql");



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "great_bay"
  });



function postItem(){

}


function bidItem(){

}

createItem();



function readTable() {
    connection.query(`SELECT * FROM great_bay`);
}

function createItem() {
    console.log('Inserting new item up for bidding!');
    connection.query(`INSERT INTO great_bay(item,highest_bid,starting_bid) VALUES(?,?,?)`, {
        item: process.argv[2],
        highest_bid: process.argv[3],
        starting_bid: process.argv[4],
    }, function (err, res) {
        console.log(`${res.affectedRows} items inserted`);
    });

    readTable();
}