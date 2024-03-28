var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res, next) => {
    let locationid = req.body.id;
    let query = `select * from tbl_location l inner join tbl_district d on l.districtid=d.districtid where l.locationid=${locationid};`;
    // console.log(query)
    console.log(query);
    con.query(query, (err, rows) => {
        if (err) throw err
        res.send(rows);
        // console.log(rows);
    })
})

module.exports = router;