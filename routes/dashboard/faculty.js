const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');



//retrieve data from user
router.get('/getfaculty', function(req,res){

    db.query('SELECT fac_id, fac_name  FROM faculty',function(error,results,fields){
        if(error) 
        {
            console.log('error occur');
        }
        else{
            
            return res.send({
                display:'faculty results',
                data:results});
        }
            
        
    });
});

module.exports = router;