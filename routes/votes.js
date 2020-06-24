const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../Config/connection');


router.post('/votes', function(req,res){
    const userID = req.body.$user_id;
    const mysql = 'INSERT INTO votes SET {voter_id = voter_id + 1, user_id = , user_id = 000, candidate_id = 000 }';

    db.query(mysql, function(err, fields){
        if(err){
            console.log('Cannot Insert');
            console.log(req.body);
        }else{
            console.log(rows);
        }
    });
    res.end();
});

module.exports = router;