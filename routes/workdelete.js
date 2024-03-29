var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post("/", (req, res) => {
  let workid = req.body.workid;

  const deleteQuery = `delete from tbl_workpost where workid=${workid}`;
  con.query(deleteQuery, (err, rows) => {
    if (err) throw err;
    res.send({ message: "Success" });
  });
});

module.exports = router;
