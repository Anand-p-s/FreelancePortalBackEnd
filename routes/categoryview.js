var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
});

router.get('/', (req, res, next) => {
    let strquery = `SELECT * FROM tbl_category`;
    // console.log(strquery)
    con.query(strquery, (err, result) => {
        if (err) { console.log(err); }
        // console.log(result);
        res.send(result)
    });
});
module.exports = router;