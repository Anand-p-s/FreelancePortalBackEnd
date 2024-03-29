var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "bseii7j52bbzijj17kiq-mysql.services.clever-cloud.com",
    user: "uorzsmwrihg8zem7",
    password: "QJpDd3w4vCsjSnqs6Xj7",
    database: "bseii7j52bbzijj17kiq"
});

router.post('/',(req, res, next)=>{
    let category = req.body.category;
    let categoryimage = req.body.categoryimage

    let query = `select * from tbl_category where categoryname='${category}';`;

    con.query(query, (err, rows) => {
        if (err) {
            throw err;
        }

        if (rows == '') {
            let query1 = `insert into tbl_category (categoryname,categoryimage) values(?,?);`;
            con.query(query1, [category,categoryimage]);

            res.send({message: 'Success'});
        }else{
            res.send({message: 'Failed'});
        }
    })
})

module.exports = router;