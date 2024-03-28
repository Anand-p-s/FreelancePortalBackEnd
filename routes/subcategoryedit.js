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