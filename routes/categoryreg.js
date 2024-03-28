var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_freelanceportal"
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