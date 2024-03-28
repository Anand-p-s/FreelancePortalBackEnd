var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res) => {
    let id=req.body.id;

    let query = `select * from tbl_category where categoryid='${id}';`;
    con.query(query, (err, rows)=>{
        if (err) throw err
        res.send(rows);
    })
})

module.exports=router