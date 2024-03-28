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
  let loginid = req.body.loginid;
  let title = req.body.title;
  let categoryid = req.body.categoryid;
  let subcategoryid = req.body.subcategoryid;
  let description = req.body.description;
  let cost = req.body.budget;
  let deadlinedate = req.body.deadlinedate;
  let postdate = new Date();

  let query = `INSERT INTO tbl_workpost(title, description, cost, deadlinedate, postdate, companyid, categoryid, subcategoryid) 
            VALUES (?,?,?,?,?,?,?,?)`;

  con.query(
    query,
    [
      title,
      description,
      cost,
      deadlinedate,
      postdate,
      loginid,
      categoryid,
      subcategoryid,
    ],
    (err, result) => {
      if (err) throw err;

      if (result) {
        res.send({ message: "Success" });
      } else {
        res.send({ message: "Failed" });
      }
    }
  );
});

module.exports = router;
