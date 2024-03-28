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
    
    let loginid = req.body.loginid

    console.log(loginid)

    let query = `select * from tbl_request R inner join tbl_workpost W on R.workid=W.workid
    inner join tbl_company C on W.companyid=C.loginid where R.freelancerid=${loginid} and 
    R.req_status='${status}' order by requestid desc`

    console.log(query)

    con.query(query, (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})

module.exports = router