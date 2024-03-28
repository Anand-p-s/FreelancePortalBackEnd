var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res, next) => {
    let districtid = req.body.districtid;
    let district = req.body.district;
    // console.log(locationid);

    let query = `update tbl_district set district='${district}' where districtid='${districtid}';`;
    console.log(query);
    con.query(query, (err, rows)=>{
        if (err) throw err
        if (rows) {
            res.send({message: 'Success'})
        } else {
            res.send({message: 'Failed'})
        }
    })
})
module.exports=router;