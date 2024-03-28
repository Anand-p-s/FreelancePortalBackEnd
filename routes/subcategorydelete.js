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
    let subcategoryid = req.body.id;
    console.log(subcategoryid);

    let query = `DELETE FROM tbl_subcategory WHERE subcategoryid='${subcategoryid}';`;
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