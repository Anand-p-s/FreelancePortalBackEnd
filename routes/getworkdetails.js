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
  let loginid = req.body.storedLoginId;

  let query1 = `select * from tbl_workpost where companyid='${loginid}' order by workid desc`;

  con.query(query1, (err, result) => {
    if (err) throw err;

    if (result) {
      res.send(result);
    }
  });
});

module.exports = router;
