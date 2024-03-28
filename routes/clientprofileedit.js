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
  let name = req.body.name;
  let email = req.body.EMAIL;
  let phone = req.body.phone;
  let licenseno = req.body.licenseno;
  let districtid = req.body.districtid;
  let locationid = req.body.locationid;
  let loginid = req.body.loginid;

  let query = `UPDATE tbl_company SET companyname='${name}',licenseno='${licenseno}',email='${email}',phone='${phone}',districtid=${districtid},locationid=${locationid}
   WHERE loginid=${loginid}`;
  con.query(query, (err, rows) => {
    if (err) throw err;
    if (rows) {
      res.send({ message: "Success" });
    } else {
      res.send({ message: "failed" });
    }
  });
});

module.exports = router;
