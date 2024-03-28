var mysql = require("mysql");
var express = require("express");
var nodemailer = require("nodemailer");
// const { request } = require('../app');
var router = express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_freelanceportal",
});

router.post("/", (req, res) => {
  //assigning values to insert into databse
  let name = req.body.name;
  let email = req.body.EMAIL;
  let phone = req.body.phone;
  let image = req.body.image;
  let username = req.body.username;
  let password = req.body.password;
  let districtid = req.body.districtid;
  let locationid = req.body.locationid;
  let categoryid = req.body.categoryid;
  let subcategoryid = req.body.subcategoryid;
  let regdate = new Date();
  let role = "freelancer";

  //query to chech duplicate
  let strquery = `select * from tbl_login where username='${username}';`;
  con.query(strquery, (err, rows) => {
    if (err) throw err;
    if (rows == "") {
      //query to insert into tbl_login
      let query = `insert into tbl_login(username,password,role) values(?,?,?)`;
      console.log(query);
      con.query(query, [username, password, role], (err, result) => {
        if (err) throw err;

        //retrieving login id after inserting data in tbl_login
        let loginid = result.insertId;
        console.log(loginid);

        //inserting data into tbl_freelancer after getting login id
        let query1 = `insert into tbl_freelancer(freelancername,email,phone,image,regdate,districtid,locationid,categoryid,subcategoryid,loginid) values(?,?,?,?,?,?,?,?,?,?)`;
        con.query(
          query1,
          [
            name,
            email,
            phone,
            image,
            regdate,
            districtid,
            locationid,
            categoryid,
            subcategoryid,
            loginid,
          ],
          (err, rows) => {
            if (err) throw err;
            if (rows) {
              res.send({ message: "Success" });

              const mailOptions = {
                from: `"Comport", "pavooran123@gmail.com"`,
                to: `${email}`,
                subject: "Successful Registration",
                html: `Dear ${name}, You have successfully registered your freelancer account using comport.`,
              };

              const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                  user: "pavooran123@gmail.com",
                  pass: "jtubkukqpigfrqtl",
                },
              });
              
              transporter.sendMail(mailOptions, (err, info) => {
                if (err) console.log(err);
                console.log(info);
              });
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
