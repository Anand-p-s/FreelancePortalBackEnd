var mysql = require("mysql");
var express = require("express");
// const { request } = require('../app');
var router = express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_freelanceportal",
});

router.post("/", function (req, res, next) {
  let district = req.body.district;

  let query = `select * from tbl_district where district='${district}';`;

  con.query(query, (err, rows) => {
    if (err) {
      throw err;
    }

    if (rows == "") {
      let strquery = `insert into tbl_district (district) values (?);`;
      //console.log(strquery)
      con.query(strquery, [district]);
      res.send({ message: "Success" });
    } else {
      res.send({ message: "Failed" });
    }
  });
});

module.exports = router;
