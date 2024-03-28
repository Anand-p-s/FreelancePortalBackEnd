var mysql = require('mysql');
var express = require('express');
const { route } = require('.');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res, next) => {
    let locationid = req.body.id;
    console.log(locationid);

    let query = `DELETE FROM tbl_location WHERE locationid='${locationid}';`;
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