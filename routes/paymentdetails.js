var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.get("/", (req, res) => {
  const query = `SELECT *, 
  (SELECT SUM(p.brokerage) FROM tbl_payment p) AS total_earnings
   FROM tbl_payment P INNER JOIN tbl_request R ON P.requestid=R.requestid
INNER JOIN tbl_freelancer F ON R.freelancerid = F.loginid 
INNER JOIN tbl_workpost W ON R.workid = W.workid 
INNER JOIN tbl_company C ON W.companyid = C.loginid 
INNER JOIN tbl_subcategory S ON F.subcategoryid = S.subcategoryid`;

  console.log(query);
  con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
