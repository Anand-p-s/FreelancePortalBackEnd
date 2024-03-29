var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post("/", (req, res) => {
  let date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to get the correct month since getMonth() returns 0-based index
  var day = date.getDate().toString().padStart(2, "0");
  let formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate); // This will print the formatted date

  let progress_percentage = req.body.percentage;
  let progress_description = req.body.progress_desc;
  let requestid = req.body.requestid;

  let query1 = `select * from tbl_workprogress where requestid=${requestid}`;
  con.query(query1, (err, result) => {
    if (err) throw err;

    if (result == 0) {
      let query = `insert into tbl_workprogress(progress_percentage,progress_description,progress_date,requestid)
    values(?,?,?,?)`;
      con.query(
        query,
        [progress_percentage, progress_description, date, requestid],
        (err, rows) => {
          console.log(query);
          if (err) throw err;

          if (rows) {
            res.send({ message: "Success" });
          } else {
            res.send({ message: "Failed" });
          }
        }
      );
    } else {
      let query = `update tbl_workprogress set progress_percentage='${progress_percentage}',
            progress_description='${progress_description}', progress_date='${formattedDate}' where requestid='${requestid}'`;

      console.log(query);

      con.query(query, (err, rows) => {
        if (err) throw err;

        if (rows) {
          if (progress_percentage == 100) {
            let query2 = `update tbl_request set req_status='completed' where requestid=${requestid}`;
            con.query(query2, (err, rows1) => {
              if (err) throw err;
            });
          }
          res.send({ message: "Success" });
        } else {
          res.send({ message: "Failed" });
        }
      });
    }
  });
});

module.exports = router;
