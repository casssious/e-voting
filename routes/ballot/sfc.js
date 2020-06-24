const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

router.get('/ballot/sfc/:student_id', function(req, res){
    
    let student_id = req.params.student_id;

    let myQuery = "SELECT * FROM sfc WHERE fac_id = (SELECT fac_id FROM student WHERE student_id = \"" +student_id +"\")";

    db.query(myQuery, function(err, rows, fields){
        if (err) {
            console.log('Cannot get ', err);
            res.send({
                data: err,
                code: 400,
                message: "Couldn't get all participants"
            })
        } else {
            console.log(rows);
            res.send({
                data : rows,
                code : 200,
                Success: "Successfully got all the participants of the same faculty as the current user"
            });
        } 
    });
});
 
module.exports = router; 