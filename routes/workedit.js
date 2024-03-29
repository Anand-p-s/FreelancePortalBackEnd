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
  let title = req.body.title;
  let categoryid = req.body.categoryid;
  let subcategoryid = req.body.subcategoryid;
  let description = req.body.description;
  let cost = req.body.budget;
  let deadlinedate = req.body.deadlinedate;

  const updateQuery = `UPDATE tbl_workpost SET title='${title}',description='${description}',cost='${cost}',deadlinedate='${deadlinedate}',categoryid=${categoryid},subcategoryid=${subcategoryid} 
  WHERE workid=${workid}`;

  con.query(updateQuery, (err, rows) => {
    if (err) throw err;

    if (rows) {
      res.send({ message: "Success" });
    } else {
      res.send({ message: "Failed" });
    }
  });
});

module.exports = router;
