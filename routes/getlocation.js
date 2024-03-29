var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
});

router.post('/', (req, res, next) => {
    let districtid = req.body.id;
    let query = `select * from tbl_location where districtid=${districtid};`;
    console.log(query);
    con.query(query, (err, rows) => {
        if (err) throw err
        res.send(rows);
        // console.log(rows);
    })
})

module.exports = router;