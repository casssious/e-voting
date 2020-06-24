const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../Config/connection');

router.get('/iscrc', function(req, res){
    let myQuery = "SELECT * FROM iscrc";

    db.query(myQuery, function(err, results){
        if (err) {
            console.log('Cannot query ', err);
            
        } else {
            console.log('RESULTS');
        }
    })
    res.end();
});

module.exports = router;