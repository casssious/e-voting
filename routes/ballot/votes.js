const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

const today = new Date();
let bodyParser= require('body-parser')
router.use(bodyParser.json())
router.post('/ballot/votes/', function(req,res){

    var post = {
        "student_id" : req.body.student_id,
        "v_id" : req.body.v_id,
        "csrc_id"  :req.body.csrc_id,
        "sfc_id" : req.body.sfc_id,
        "isrc_id" : req.body.isrc_id,
        "year": today.getFullYear()
    };

    if(!post){
        console.log('False');
        res.send({
            code: 400,
            message: "False"
        })
    }
    
    db.query( 'INSERT INTO votes SET ?', [post], function(error, results, fields){
        if(error){
            console.log(error);
            res.send({
                data: error,
                code: 400,
                message: "Cannot Insert"
            });
        }
        else{
            console.log(results);
            res.send({
                data : results,
                code : 200,
                Success: "Successfully posted"
            });
        }
    });
});

module.exports = router;