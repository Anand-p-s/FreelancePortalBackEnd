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
    let workid = req.body.id

    let query = `select * from tbl_workpost W inner join tbl_company C on W.companyid=C.loginid 
        inner join tbl_category CT on W.categoryid=CT.categoryid 
        inner join tbl_subcategory S on W.subcategoryid=S.subcategoryid where workid='${workid}'`

    console.log(query)

    con.query(query, (err, result)=>{
        if (err) throw err

        res.send(result)
    })
})

module.exports = router