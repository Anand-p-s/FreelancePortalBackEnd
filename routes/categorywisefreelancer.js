var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var con = mysql.createConnection({
  host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
  user: "uorzsmwrihg8zem7",
  password: "QJpDd3w4vCsjSnqs6Xj7",
  database: "bseii7j52bbzijj17kiq"
});

router.post('/', (req, res) => {
    let categoryid = req.body.categoryid

    let query = `select * from tbl_freelancer F
    inner join tbl_district D on F.districtid=D.districtid
    inner join tbl_location L on F.locationid=L.locationid
    inner join tbl_category C on F.categoryid=C.categoryid
    inner join tbl_subcategory S on F.subcategoryid=S.subcategoryid
    where F.categoryid='${categoryid}'`
    con.query(query, (err, rows)=>{
        if(err) throw err
        res.send(rows)
    })
})

module.exports = router