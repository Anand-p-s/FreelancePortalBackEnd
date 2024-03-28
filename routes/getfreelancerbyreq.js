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
    let workid = req.body.workid
    let req_status = req.body.status
    console.log(workid)

    let query = `select * from tbl_request R 
    inner join tbl_freelancer F on R.freelancerid=F.loginid
    inner join tbl_workpost W on R.workid=W.workid
    where R.workid = ${workid} and R.req_status='${req_status}'`
        console.log(query)

    con.query(query, (err, rows)=>{
        if (err) throw err
        res.send(rows)
    })
})

module.exports = router