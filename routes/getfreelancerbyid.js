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
  let id = req.body.loginid;

  let query = `select * from tbl_freelancer F
  inner join tbl_district D on F.districtid=D.districtid
  inner join tbl_location L on F.locationid=L.locationid
  inner join tbl_category C on F.categoryid=C.categoryid
  inner join tbl_subcategory S on F.subcategoryid=S.subcategoryid
  where loginid=${id}`;
  con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
