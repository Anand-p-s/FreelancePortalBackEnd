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
    let id = req.body.id;

    let query = `delete from tbl_category where categoryid='${id}';`;
    con.query(query, (err, rows) => {
        if (err) throw err
        if (rows) {
            res.send({ message: 'Success' });
        }
    })
})

module.exports = router;