var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
});

router.post('/', (req, res) => {
    let id = req.body.categoryid;
    let categoryname = req.body.category;
    let categoryimage = req.body.categoryimage;

    let query=`update tbl_category set categoryname='${categoryname}',categoryimage='${categoryimage}' 
        where categoryid='${id}';`;
    
    con.query(query, (err, rows) => {
        if (err) throw err
        if (rows) {
            res.send({message:'Success'});
        }else{
            res.send({message:'Failed'});
        }
    })
})

module.exports=router