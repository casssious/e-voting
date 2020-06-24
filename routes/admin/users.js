const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

//retrieve data from user
router.get('/student', function(req,res){

    db.query('SELECT student_id, student_fname, student_lname, fac_id  FROM student',function(error,results,fields){
        if(error){
            console.log('error')
        }else{
            return res.send({data:results});
        }
     
    });
});

//delete
router.delete('/student/:id',function(req,res){
    var stud = {id:req.params.id};


    db.query('DELETE FROM student WHERE student_id = '+ req.params.id,stud, function(error,result){
        if(error){
            console.log('error')
        } else {
         res.send({message:'delete success'});
        }
    })
});



module.exports = router