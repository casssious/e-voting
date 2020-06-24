const express = require('express');
const router = express.Router();
const sql = require('mysql');
const db = require('../../Config/connection');


//poll display
router.get('/sfc', function(req,res){

    var fac_id = req.body.fac_id;
    console.log(req.body.fac_id);
    db.query("SELECT v.sfc_id, s.sfc_position, s.sfc_img,f.fac_name, COUNT(v.sfc_id) FROM votes v, sfc s, faculty f WHERE year = 2019 AND s.sfc_id = v.sfc_id AND s.fac_id = "+fac_id+" GROUP BY v.sfc_id ORDER BY COUNT(v.sfc_id) DESC", function(error,results,fields){
        if(error){
            console.log(error)
        }else{
            console.log(results);
            return res.send({
                data: results
            });
        }
     
        
        
    });
});


module.exports = router;