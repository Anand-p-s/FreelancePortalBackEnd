var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.get('/', (req, res) => {
    let query = `select * from tbl_category`;

    con.query(query, (err, rows) => {
        if (err) throw err
        res.send(rows);
    });

})

module.exports = router;