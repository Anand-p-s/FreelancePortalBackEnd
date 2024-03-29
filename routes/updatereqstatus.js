var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
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