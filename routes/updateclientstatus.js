var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post("/", (req, res) => {
  let status = req.body.status;
  let id = req.body.id;

  let query = `update tbl_login set status='${status}' where loginid=${id}`;

  con.query(query, (err, rows) => {
    if (err) {
      throw err;
    }
    res.send({ message: "Success" });

    if (status == "accepted") {
      const mailOptions = {
        from: `"Comport", "pavooran123@gmail.com"`,
        to: `${email}`,
        subject: "Registration Completed",
        html: `Your Company have successfully registered you can start posting works using comport.`,
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
      const mailOptions = {
        from: `"Comport", "pavooran123@gmail.com"`,
        to: `${email}`,
        subject: "Registration Failed",
        html: `Your Company may found invalid.`,
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
    }
  });
});

module.exports = router;
