require("./server")
const c = require("./db/Connection")

c.con.query("select * from cf_prod.grupo", function (err, result) {
    if (err) throw err;
    let i = 1
    result.forEach(element => {
        console.log(i + ": " + JSON.stringify(element));
        i++
    });
});
