const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../Config/connection');

router.get('/sfc', function(req, res){
    let myQuery = "SELECT fac_name FROM faculty WHERE user_id = 2001";
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