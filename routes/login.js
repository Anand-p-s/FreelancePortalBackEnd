var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    let strquery = `SELECT * FROM tbl_login where username='${username}' and password='${password}';`;
    // console.log(strquery);
    con.query(strquery, (err, result) => {
        if (err) { console.log(err); }
        console.log(result);
        res.send(result)
    });
});

module.exports = router;