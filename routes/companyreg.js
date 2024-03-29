var mysql = require("mysql");
var express = require("express");
// const { request } = require('../app');
var router = express.Router();
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post("/", (req, res) => {
  //assigning values to insert into databse
  let name = req.body.name;
  let licenseno = req.body.licenseno;
  let email = req.body.EMAIL;
  let phone = req.body.phone;
  let logo = req.body.logo;
  let username = req.body.username;
  let password = req.body.password;
  let districtid = req.body.districtid;
  let locationid = req.body.locationid;
  let regdate = new Date();
  let role = "client";
  let status = "pending";

  //query to chech duplicate
  let strquery = `select * from tbl_login where username='${username}';`;
  con.query(strquery, (err, rows) => {
    if (err) throw err;
    if (rows == "") {
      //query to insert into tbl_login
      let query = `insert into tbl_login(username,password,role,status) values(?,?,?,?)`;
      console.log(query);
      con.query(query, [username, password, role, status], (err, result) => {
        if (err) throw err;

        //retrieving login id after inserting data in tbl_login
        let loginid = result.insertId;
        console.log(loginid);

        //inserting data into tbl_company after getting login id
        let query1 = `insert into tbl_company(companyname,licenseno,logo,email,phone,regdate,districtid,locationid,loginid) values(?,?,?,?,?,?,?,?,?)`;
        con.query(
          query1,
          [
            name,
            licenseno,
            logo,
            email,
            phone,
            regdate,
            districtid,
            locationid,
            loginid,
          ],
          (err, rows) => {
            if (err) throw err;
            if (rows) {
              res.send({ message: "Success" });
            } else {
              res.send({ message: "Failed" });
            }
          }
        );
      });
    } else {
      res.send({ message: "Exist" });
    }
  });
});

module.exports = router;
