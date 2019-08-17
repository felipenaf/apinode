const mysql = require('mysql');

class Connection {
    constructor() {
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123"
        });
    }
}

var conn = new Connection()

conn.con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

conn.con.query("select * from cf_prod.grupo", function (err, result) {
    if (err) throw err;
    let i = 1
    result.forEach(element => {
        console.log(i + ": " + JSON.stringify(element));
        i++
    });
});