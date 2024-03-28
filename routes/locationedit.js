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
    let locationid = req.body.locationid;
    let districtid = req.body.districtid;
    let location = req.body.locationname;
    // console.log(locationid);

    let query = `update tbl_location set districtid='${districtid}',location='${location}' where locationid='${locationid}';`;
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