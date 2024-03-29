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
    let reqid = req.body.requestid

    let query = `select * from tbl_workprogress where requestid=${reqid}`

    console.log(query)

    con.query(query, (err, rows)=>{
        if (err) throw err

        res.send(rows)
    })
})

module.exports = router