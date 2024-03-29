var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post("/", (req, res, next) => {
  let location_name = req.body.location;
  let districtid = req.body.districtid;

  let query = `select * from tbl_location where location='${location_name}';`;
  con.query(query, (err, rows) => {
    if (err) throw err;

    if (rows == "") {
      let strquery = `INSERT INTO tbl_location (location,districtid) VALUES(?,?);`;
      con.query(strquery, [location_name, districtid]);
      res.send({ message: "Success" });
    } else {
      res.send({ message: "Failed" });
    }
  });
});
module.exports = router;
