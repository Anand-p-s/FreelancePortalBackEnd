var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_freelanceportal",
});

router.post("/", (req, res) => {
  let loginid = req.body.loginid;

  let query = `select * from tbl_company C
    inner join tbl_district D on C.districtid=D.districtid
    inner join tbl_location L on C.locationid=L.locationid
    where loginid=${loginid}`;

  con.query(query, (err, rows) => {
    if (err) throw err;

    res.send(rows);
  });
});

module.exports = router;
