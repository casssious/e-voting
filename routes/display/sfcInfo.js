const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');

router.get('/select', function(req,res){


    db.query('SELECT sfc_name, sfc_position, total_votes  FROM sfc',function(error,results,fields){
        if(error) throw error;
     
            return res.send({display:'sfc info',data:results});
        
    });
});

module.exports = router