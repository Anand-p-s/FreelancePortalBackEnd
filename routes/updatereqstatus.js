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
    let status = req.body.status
    let reqid = req.body.reqid

    let query = `update tbl_request set req_status='${status}' where requestid=${reqid}`
    con.query(query, (err, rows)=>{
        res.send({ message: 'updated' })
    })
})

module.exports = router