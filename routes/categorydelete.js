var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
});

router.post('/', (req, res) => {
    let id = req.body.id;

    let query = `delete from tbl_category where categoryid='${id}';`;
    con.query(query, (err, rows) => {
        if (err) throw err
        if (rows) {
            res.send({ message: 'Success' });
        }
    })
})

module.exports = router;