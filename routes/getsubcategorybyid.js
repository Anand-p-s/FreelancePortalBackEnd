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
    let subcategoryid = req.body.id;
    let query = `select * from tbl_subcategory s inner join tbl_category c on s.categoryid=c.categoryid
     where s.subcategoryid='${subcategoryid}';`;
    console.log(query)
    console.log(query);
    con.query(query, (err, rows) => {
        if (err) throw err
        res.send(rows);
        // console.log(rows);
    })
})

module.exports = router;