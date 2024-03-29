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
    let loginid = req.body.loginid
    let workid = req.body.workid
    let biodata = req.body.biodata
    let reqdate = new Date() 
    let req_status = 'pending'

    let query = `select * from tbl_request where workid='${workid}' and freelancerid='${loginid}'`
    console.log(query)
    con.query(query, (err, rows) => {
        if (err) throw err

        if (rows == 0) {
            let query1 = `insert into tbl_request(workid,freelancerid,requestdate,biodata,req_status) values(?,?,?,?,?)`
            con.query(query1, [workid, loginid, reqdate, biodata, req_status], (err, rows1) => {
                if (err) throw err
                if (rows1) {
                    res.send({ message: 'Success' })
                } else {
                    res.send({ message: 'Failed' })
                }
            })
        } else {
            res.send({ message: 'exist' })
        }
    })


})

module.exports = router