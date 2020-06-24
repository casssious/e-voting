const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

router.get('/csrcSelect', function(req,res){


    db.query('SELECT csrc_name, total_votes  FROM csrc',function(error,results,fields){
        if(error) throw error;
     
            return res.send({display:'csrc info', data:results});
        
    });
});

module.exports = router