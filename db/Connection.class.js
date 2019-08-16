const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "felipe",
    password: "123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("select * from cf_prod.grupo", function (err, result) {
        if (err) throw err;
        let i = 1
        result.forEach(element => {
            console.log(i + ": " + JSON.stringify(element));
            i++
        });
    });
});