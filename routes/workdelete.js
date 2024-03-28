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
  let workid = req.body.workid;

  const deleteQuery = `delete from tbl_workpost where workid=${workid}`;
  con.query(deleteQuery, (err, rows) => {
    if (err) throw err;
    res.send({ message: "Success" });
  });
});

module.exports = router;
