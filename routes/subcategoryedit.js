var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
});

router.post('/', (req, res, next) => {
    let subid = req.body.subcategoryid;
    let categoryid = req.body.categoryid;
    let sub = req.body.subcategoryname;
    
    let query = `update tbl_subcategory set subcategory='${sub}', categoryid='${categoryid}' 
    where subcategoryid='${subid}';`;
    con.query(query,(err, rows) => {
        if(err) throw err
        if (rows) {
            res.send({message: 'Success'});
        } else {
            res.send({message: 'Failed'});
        }
    })
})

module.exports = router;