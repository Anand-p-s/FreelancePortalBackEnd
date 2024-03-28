var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_freelanceportal",
});

router.get("/", (req, res) => {
  let query = `select *,COUNT(*) AS count_of_requests from tbl_request R
    inner join tbl_workpost W on R.workid=W.workid
    inner join tbl_category C on W.categoryid=C.categoryid group by W.categoryid`;

  con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    console.log(rows);
  });
});

module.exports = router;
