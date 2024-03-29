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
    let reqid = req.body.reqid

    let query = `select * from tbl_request R inner join tbl_workpost W on R.workid=W.workid
    inner join tbl_company C on W.companyid=C.loginid 
    inner join tbl_category CT on W.categoryid=CT.categoryid 
    inner join tbl_subcategory S on W.subcategoryid=S.subcategoryid where R.requestid='${reqid}'`

    console.log(query)

    con.query(query, (err, result)=>{
        if (err) throw err

        res.send(result)
    })
})

module.exports = router