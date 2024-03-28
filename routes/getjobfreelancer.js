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
    let loginid = req.body.storedLoginId

    let query = `select categoryid from tbl_freelancer where loginid='${loginid}'`
    con.query(query, (err, rows) => {
        if (err) throw err
        const categoryid = rows[0].categoryid

        let query1 = `select * from tbl_workpost W inner join tbl_company C on W.companyid=C.loginid 
        where w.categoryid=${categoryid} order by w.workid desc`
        console.log(query1)
        con.query(query1, (err, result) => {
            if (err) throw err
            res.send(result)
        })
    })
})

module.exports = router