var mysql = require("mysql");
var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post("/", (req, res) => {
  let username = req.body.username;

  var query = `select * from tbl_login where username='${username}'`;
  con.query(query, (err, rows) => {
    if (err) throw err;

    if (rows.length > 0) {
      const loginid = rows[0].loginid;
      const role = rows[0].role;
      const newPassword = generateRandomPassword();

      const updateQuery = `UPDATE tbl_login SET password='${newPassword}' WHERE loginid=${loginid}`;
      con.query(updateQuery, (err, result) => {
        if (err) throw err;

        if (result) {
          if (role == "freelancer") {
            var query = `select email from tbl_freelancer where loginid=${loginid}`;
            con.query(query, (err, rows) => {
              if (err) throw err;

              const email = rows[0].email;
              sendNewPasswordToEmail(email, newPassword);
            });
          } else if (role == "client") {
            var query = `select email from tbl_company where loginid=${loginid}`;
            con.query(query, (err, rows) => {
              if (err) throw err;

              const email = rows[0].email;
              sendNewPasswordToEmail(email, newPassword);
            });
          }
          res.send({ message: "Success" });
        } else {
            res.send({ message: "Failed" });
        }
      });
    } else {
      res.send({ message: "Wrong" });
    }
  });
});

function generateRandomPassword() {
  // Generate a random string with desired length and characters
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const passwordLength = 8;
  let newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return newPassword;
}

function sendNewPasswordToEmail(email, password) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pavooran123@gmail.com", // Your Gmail email address
      pass: "jtubkukqpigfrqtl", // Your Gmail password
    },
  });

  const mailOptions = {
    from: "pavooran123@gmail.com",
    to: email,
    subject: "Password Reset (FreelancePortal)",
    text: `Dear User, Your new password is: ${password}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = router;
