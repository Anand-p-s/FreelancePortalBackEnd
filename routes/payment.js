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
  let reqid = req.body.requestid;
  let amount = req.body.amount;
  let status = "paid";
  let paymentdate = new Date();
  let brokerage = amount*0.005;
  let finalamount = amount-brokerage;

  let query = `insert into tbl_payment(requestid,amount,paymentstatus,paymentdate,brokerage) values(?,?,?,?,?)`;
  con.query(query, [reqid, finalamount, status, paymentdate, brokerage], (err, rows) => {
    if (err) throw err;
    if (rows) {
      let updateQuery = `update tbl_request set req_status='paid' where requestid=${reqid}`;
      con.query(updateQuery, (err, rows) => {
        if (err) {
          throw err;
        }
      });
      res.send({ message: "Success" });
    }
  });
});

module.exports = router;
