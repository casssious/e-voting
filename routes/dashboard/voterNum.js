const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

//number of voters registered
router.get('/number', function(req,res){
    db.query("SELECT COUNT(student_id) as 'users' FROM student",function(error,rows,fields){
        if(error){
            console.log('error');
        }
            res.send({
                data: rows
            })
    });
});
module.exports = router;