var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res)=>{
    let reqId = req.body.reqid

    let query = `delete from tbl_request where requestid=${reqId}`
    con.query(query, (err, rows)=>{
        if (err) {
            throw err
        }
        if (rows) {
            res.send({message: 'Success'})
        } else {
            res.send({message: 'Failed'})
        }
    })
})

module.exports = router