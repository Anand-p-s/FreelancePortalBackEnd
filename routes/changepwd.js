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
  let currentpwd = req.body.currentPassword;
  let newpwd = req.body.newPassword;
  let loginid = req.body.loginid;

  let query = `select * from tbl_login where loginid=${loginid}`;
  con.query(query, (err, rows) => {
    if (err) throw err;
    if (rows) {
      if (currentpwd == rows[0].password) {
        let query2 = `update tbl_login set password='${newpwd}' where loginid=${loginid}`;
        con.query(query2, (err, rows)=>{
          if (err) throw err;
          res.send({message: 'Success'})
        })
      } else {
        res.send({message: 'wrong'})
      }
    }
  })
});

module.exports = router;
