var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
});

router.post('/', (req, res)=>{
    let loginid = req.body.loginid
    let status = req.body.status

    let query = `select * from tbl_workpost W inner join tbl_request R on W.workid=R.workid
    where W.companyid=${loginid} and R.req_status='${status}'`
    con.query(query, (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

module.exports = router