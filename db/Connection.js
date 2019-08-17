const mysql = require('mysql');

function Connection(){
    this.con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123"
    });

    this.con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return this
}

module.exports = Connection()