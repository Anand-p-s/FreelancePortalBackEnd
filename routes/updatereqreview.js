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
    let reqid = req.body.reqid
    let status = req.body.status
    let rejectreason = req.body.rejectreason

    let query = `update tbl_request set req_status='${status}', req_review='${rejectreason}' 
    where requestid=${reqid}`
    con.query(query, (err, rows)=>{
        if (err) throw err
        if (rows) {
            res.send({message: 'Success'})
        } else {
            res.send({message: 'Failed'})
        }
    })
})

module.exports = router