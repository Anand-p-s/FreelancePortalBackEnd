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
    let subcategory = req.body.subcategory;
    let categoryid = req.body.category;

    let query = `select * from tbl_subcategory where subcategory='${subcategory}';`;
    con.query(query, (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows == '') {
            let strquery = `INSERT INTO tbl_subcategory (subcategory,categoryid) VALUES(?,?);`;
            con.query(strquery, [subcategory, categoryid]);
            res.send({ message: 'Success' });
        }else{
            res.send({ message: 'Failed' });
        }
    })
})
module.exports = router;