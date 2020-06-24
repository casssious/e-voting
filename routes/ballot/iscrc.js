const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

router.get('/ballot/iscrc', function(req, res){
    let myQuery = "SELECT * FROM iscrc";

    db.query(myQuery, function(err, rows, fields){
        if (err) {
            console.log('Cannot get ', err);
            res.send({
                data: err,
                code: 400,
                message: "Cannot get rows"
            });
            
        } else {
            console.log(rows);
            res.send({
                data : rows,
                code: 200,
                message: "Cannot get rows"
            });
        }
     });
});

module.exports = router;