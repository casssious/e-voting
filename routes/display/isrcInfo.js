const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

router.get('/isrcData', function(req,res){


    db.query('SELECT isrc_name, total_votes  FROM iscrc',function(error,results,fields){
        if(error) throw error;
     
            return res.send({display:'isrc info', data:results});
        
    });
});

module.exports = router